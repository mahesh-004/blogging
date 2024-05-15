import { z} from "zod"

export const singnupSchema=z.object({
    username:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})

export const signinSchema=z.object({
    username:z.string().email(),
    password:z.string().min(6)
})

export const createBlogSchema = z.object({
    title:z.string(),
    content:z.string(),

})

export const updateBlogSchema = z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()

})
//type inference in zod 
export type singnupInput=z.infer<typeof singnupSchema>
export type singinInput=z.infer<typeof signinSchema>
export type createBlogInput=z.infer<typeof createBlogSchema>
export type updateBlogInput=z.infer<typeof updateBlogSchema>