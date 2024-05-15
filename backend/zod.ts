import { z} from "zod"

export const singnupSchema=z.object({
    username:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})
//type inference in zod 
export type singnupInput=z.infer<typeof singnupSchema>