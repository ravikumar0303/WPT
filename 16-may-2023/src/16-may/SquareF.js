import { useState } from "react"

export default function SquareF(){

    //here sqr is a STATE variable 
    let [sqr,setSqr]=useState("")

    //v is a simple local variable
    let v=0
    function textreceiver(e)
    {
        v = e.target.value
        v = v*v
        setSqr(v)
        console.log(v)
    }

    return <div>
        <input type="number" onBlur={textreceiver} />
        <p>{sqr}</p>
    </div>
}