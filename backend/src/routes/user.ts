import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { singnupSchema,signinSchema } from "@mahesh-oo7/medium-common";
export const userRounter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>();



userRounter.post('/signup',async (c) => {

    const body= await c.req.json();
    const {success} =singnupSchema.safeParse(body);
    if(!success){
        c.status(411);
        return c.text("enter correct credentials..")
    }


    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try{
      const user = await prisma.user.create({
        data:{
          name:body.name,
          username:body.username,
          password:body.password,
    
        }
      })
      const jwt=await sign({id:user.id},c.env.JWT_SECRET);
      return c.text(jwt);
  
    }catch(e){
      c.status(411);
      return c.text("invalid inputs")
    }
  
  })
  
userRounter.post('/signin',async (c) => {
    const body= await c.req.json();
    const {success} = signinSchema.safeParse(body);
    if(!success){
        c.status(411);
        return c.text("enter correct credentials..")
    }



    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try{
      const user = await prisma.user.findFirst({
        where:{
          
          username:body.username,
          password:body.password,
    
        }
      })
      if(!user){
        c.status(403);
        return c.text("user does not exists")
  
      }
      const jwt=await sign({id:user.id},c.env.JWT_SECRET);
      return c.text(jwt);
  
    }catch(e){
      c.status(411);
      return c.text("invalid inputs")
    }
  
  })
  