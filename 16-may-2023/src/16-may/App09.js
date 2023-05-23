import TrialProps from "./TrialProps";


let obj = {xcoordinate:12,ycoordinate:20}
let arr=[12,3,55]

export default function App09()

{
    function alpha()
    {
        console.log("ALPHA IS CALLED")
    }    
    return <div>
       
          
         <TrialProps func1={alpha} flag={true} point={obj} num1={45} str={"PPP"} arr={[10,20,30]} ></TrialProps>
        <TrialProps point={obj} num1="45" arr={arr}></TrialProps> 
   </div>     
  }