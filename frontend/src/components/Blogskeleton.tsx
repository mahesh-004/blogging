import { Circle } from "./Blogcard"

export const Blogskeleton=()=>{
    return(
        <div>
            
        <div role="status" className="animate-pulse">
            <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-lg cursor-pointer" >
                <div className="flex">
                    <div className="">
                        <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
                    </div>

                
                <div className=" flex justify-center flex-col font-extralight pl-2 text-sm">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="flex justify-center flex-col pl-2">
                <Circle></Circle>
                </div>
                
                
                    <div className=" flex justify-center flex-col text-sm pl-2 font-thin  text-slate-400">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

                    </div>
                
                
                </div>
                <div className="text-xl font-semibold pt-2">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="text-md font-thin" >
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                
                </div>
                <div className=" pt-4 text-sm font-thin  text-slate-500">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>

                
                {/* <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
                <span className="sr-only">Loading...</span> */}
            </div>


        </div>
        </div>
    )
}