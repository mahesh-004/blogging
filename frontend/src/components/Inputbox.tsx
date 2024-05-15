import { ChangeEvent } from "react"

interface input{
    label:string,
    placeholder:string,
    onChange:(e: ChangeEvent<HTMLInputElement>)=>void,
    type?:string
}
export function Inputbox({label,placeholder,onChange ,type}:input){
    return(
        <div>
            
            <label  className="block mb-2 text-sm font-semibold pt-2 text-gray-900 dark:text-black">{label}</label>
            <input type= {type==="password"?"password":"text"}  onChange={onChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        

        </div>
    )
}