import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify,decode } from "hono/jwt";
import { createBlogSchema,updateBlogSchema } from "@mahesh-oo7/medium-common";

export const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string


    }

}>();

blogRouter.use("/*",async (c,next)=>{
    const authHeader=c.req.header("Authorization")||"";
    try{
        const user=await verify(authHeader,c.env.JWT_SECRET)
        if(user){
            c.set("userId",user.id);
            await next()
        }else{
            c.status(403);
            return c.text("you r not logged in");

        }

    }catch(e){
        c.status(411);
        return c.text("please log in..")
    }
    
});

blogRouter.post('/',async (c) => {
    const body = await c.req.json();
    const {success}=createBlogSchema.safeParse(body)
    if(!success){
        c.status(411);
        return c.text("enter correct inputs..")
    }
    const userId=c.get("userId")
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    const blog = await prisma.blog.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:Number(userId),


        }
    })
  
  
    return c.json({
        id:blog.id,
    })
})
  
blogRouter.put('/',async (c) => {
    const body = await c.req.json();
    const {success}=updateBlogSchema.safeParse(body)
    if(!success){
        c.status(411);
        return c.text("enter correct inputs..")
    }
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    const blog = await prisma.blog.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content
        }
    })
  
  
    return c.json({
        id:blog.id,
    })
})

blogRouter.get('/bulk',async (c) => {
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany({
        select:{
            id:true,
            content:true,
            title:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    },
    
    )
  
  
    return c.json({
        blogs
    })
})
  
  
blogRouter.get('/:id',async (c) => {
     const id = await c.req.param("id");
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    try{
        const blog = await prisma.blog.findFirst({
            where:{
                id:Number(id)
            },
            select:{
                id:true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })
      
      
        return c.json({
            blog
        })

    }catch(e){
        c.status(411);
        return c.json({
            msg:"error while fetching blog post"
        })
    }


    
    
})
  
