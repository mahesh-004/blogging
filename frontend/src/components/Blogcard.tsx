import { Link } from "react-router-dom"

interface Blogcard{
    id:number
    authorname:string,
    title:string,
    content:string,
    publishedDate:string
}

export const Blogcard =({
    id,authorname,title,content,publishedDate
}:Blogcard)=>{
    return(
        <Link to={`/blog/${id}`} >
            <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-lg cursor-pointer" >
                <div className="flex">
                    <div className="">
                        <Avathar authorname={authorname}></Avathar>
                    </div>

                
                <div className=" flex justify-center flex-col font-extralight pl-2 text-sm">
                    {authorname}
                </div>
                <div className="flex justify-center flex-col pl-2">
                <Circle></Circle>
                </div>
                
                
                    <div className=" flex justify-center flex-col text-sm pl-2 font-thin  text-slate-400">
                        {publishedDate}

                    </div>
                
                
                </div>
                <div className="text-xl font-semibold pt-2">
                    {title}
                </div>
                <div className="text-md font-thin" >
                    {content.slice(0,100)}+"..."
                
                </div>
                <div className=" pt-4 text-sm font-thin  text-slate-500">
                    {`${Math.ceil(content.length/100)} minute(s) read`}
                </div>
            

            </div>
        </Link>
    )
}

export function Avathar({authorname ,size=7}:{authorname:string,
size?:number}){
    return(
        <div className={`relative inline-flex items-center justify-center w-${size}  h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className="text-xs  text-gray-600 dark:text-gray-300">{authorname[0]}</span>
        </div>
    )
}
export function Circle(){
    return(
        <div className="h-1 w-1 rounded-full bg-slate-500">

        </div>
    )
}