import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blog{
    title:string,
    content:string,
    author:{
        name:string,

    }
    
    id:number
}

export const useBlog=({id}:{id:string})=>{
    const [loading,setloading]=useState(true);
    const [blog,setblog]=useState<Blog>();
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
            .then(res=>{
                setblog(res.data.blog);
                setloading(false)
            })
        

    },[id])
    return({
        loading,
        blog
    })
    
}
export const useBlogs=()=>{


    const [loading,setloading]=useState(true);
    const [blogs,setblogs]=useState<Blog[]>([]);
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
            .then(res=>{
                setblogs(res.data.blogs);
                setloading(false)
            })
        

    },[])
    return({
        loading,
        blogs
    })
}