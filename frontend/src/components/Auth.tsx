import { singnupInput } from "@mahesh-oo7/medium-common"
import {   useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Inputbox } from "./Inputbox"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth =({type}:{
    type:string
})=>{
    const [postinputs,setpostinputs]=useState<singnupInput>({
        name:"",
        username:"",
        password:""
    })

    const navigate  = useNavigate()
    
    async function sendRequest(){
        try{
            const response= await axios.post(`${BACKEND_URL}/api/v1/user/signup`,postinputs

            );
            const jwt=response.data;
            localStorage.setItem("token",jwt)
            navigate("/blogs")

        }catch(e){
            alert("enter correct values")
        }
        

    }


    return (
        <div className="h-screen bg-white flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="px-10">
                        <div >

                    <div className="text-3xl font-extrabold">
                        crate an account

                    </div>
                    <div className="text-slate-400">
                        Already have an account?
                        <Link className="pl-2 underline" to={"/signin"}>Login</Link>
                    </div>
                    <Inputbox  label="Name" placeholder="Enter your Name" onChange={(e)=>{
                        setpostinputs(c=>({
                            ...c,
                            name : e.target.value
                        }))

                    }}></Inputbox>
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



