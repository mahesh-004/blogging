import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avathar } from "./Blogcard"

export const FullBlog=({blog}:{blog:Blog})=>{
    return(
        <div>
            <Appbar></Appbar>
            <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 pt-200 w-full max-w-screen-xl">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold pt-12">
                        {blog.title}

                    </div>
                    <div className="text-slate-500 pt-4 ">
                        posted on 1-01-2023
                    </div>
                    <div className="text-slate-500 pt-4" >
                        {blog.content}

                    </div>

                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author

                    </div>
                    
                    <div className="flex">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avathar size={8} authorname={blog.author.name||"Ananonymous"}></Avathar>

                        </div>
                        
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name||"Anonymous"}
                            </div>
                    
                            <div className="pt-2 text-slate-500" >
                                Random catch phrase about the author's ability to grab the user's attention
                            </div>

                        </div>

                    </div>
                    

                </div>
                

            </div>

            </div>
            

        </div>
        
    )
}