import { Link, useNavigate } from "react-router-dom"
import { Inputbox } from "./Inputbox"
import { singnupInput } from "@mahesh-oo7/medium-common"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Signinpage=({type}:{
    type:string
})=>{
    const [postinputs,setpostinputs]=useState<singnupInput>({
        
        username:"",
        password:""
    })
    const navigate=useNavigate();

    async function sendRequest(){
        try{
            const response= await axios.post(`${BACKEND_URL}/api/v1/user/signin`,postinputs);
            const jwt=response.data;
            localStorage.setItem("token",jwt)
            navigate("/blogs")

        }catch(e){
            alert("enter correct values")
        }
        

    }

    return(
        <div className="h-screen bg-white flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="px-10">
                        <div >

                    <div className="text-3xl font-extrabold">
                        Login in

                    </div>
                    <div className="text-slate-400">
                        Do not  have an account?
                        <Link className="pl-2 underline" to={"/signup"}>Signup</Link>
                    </div>
                    
                    <Inputbox label="Email" placeholder="Enter your Email" onChange={(e)=>{
                        setpostinputs(c=>({
                            ...c,
                            username : e.target.value
                        }))

                    }}></Inputbox>
                    <Inputbox label="password" type={"password"} placeholder="Enter your password" onChange={(e)=>{
                        setpostinputs(c=>({
                            ...c,
                            password: e.target.value
                        }))

                    }}></Inputbox>
                     <button onClick={sendRequest} className="  bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 mt-5 rounded">
                           {type=="signin"?"signin":"signup"}
                    </button>
                    





                </div>
                </div>
                
                

            </div>
            
            
        </div>

         
    )
}