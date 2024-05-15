export const Button =({type}:{
    type:string
})=>{
    return(
        <div className="flex justify-center">
                        <button className="  bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 mt-5 rounded">
                           {type=="signin"?"signin":"signup"}
                        </button>
                    </div>
    )
}