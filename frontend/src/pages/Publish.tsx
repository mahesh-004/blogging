import { ChangeEvent, useState } from "react"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Publish=()=>{
    const navigate=useNavigate()
    const [title,settitle]=useState<string>("");
    const[content,setcontent]=useState<string>("");
    return(
        <div>
            <Appbar></Appbar>
            <div className="flex justify-center w-full pt-8">
                
            
            <div className="mb-6 max-w-screen-lg w-full">
                <label  className="block mb-2 text-sm font-medium text-black ">Title</label>
                <input type="text" onChange={(e)=>{
                    settitle(e.target.value)
                }} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500    "></input>
                <Textarea onChange={(e)=>{
                    setcontent(e.target.value)
                } }></Textarea>
                <button onClick={async ()=>{
                    const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content


                    },{
                        headers:{
                            Authorization:localStorage.getItem("token")

                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type="button" className=" my-2 mr-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   ">Publish post</button>
                
            </div>
            
            
            {/**/}

           </div>
           


        </div>
        
    )
}

function Textarea({onChange}:{
    onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void
}){
    return(
        <div>
             
            <textarea onChange={onChange}  rows={Number("4") }className="block my-3  p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500     " placeholder="Write about your Blog here..."></textarea> 
        </div>
    )

}