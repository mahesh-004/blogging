import { Appbar } from "../components/Appbar"
import { Blogcard } from "../components/Blogcard"
import { Blogskeleton } from "../components/Blogskeleton";
import { useBlogs } from "../hooks"

export const Blogs=()=>{
    const {loading,blogs}=useBlogs();
    if(loading){
        return(
            <div className="flex justify-center">
                <div>
                <Appbar></Appbar>
                <div>
                <Blogskeleton></Blogskeleton>
                <Blogskeleton></Blogskeleton>
                <Blogskeleton></Blogskeleton>
                <Blogskeleton></Blogskeleton>

                </div>
                </div>
                
            </div>
        )
    }
    return(<div >
            <Appbar></Appbar>
            <div className="flex justify-center">
            <div className="" >
                {blogs.map(blog=><Blogcard id={blog.id} authorname={blog.author.name||"Ananonymous"} title={blog.title}
                        content={blog.content}
                        publishedDate={"22-01-2020"}>
                        </Blogcard>
                )}
                    
                        
                
                
            </div>
            </div>

        </div>
    )
    
}