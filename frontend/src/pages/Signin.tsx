
import { Quote } from "../components/Quote"
import { Signinpage } from "../components/Signinpage"

export const Siginin=()=>{
    return(
        <div className="   grid grid-cols-1  lg:grid-cols-2">
            <div>
                <Signinpage type="signin"></Signinpage>
                

            </div>
            <div className="hidden lg:block">
                <Quote></Quote>

            </div>
            
            
        </div>
    )
}