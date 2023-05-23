import { useState } from "react";
import ParentComponent from "./ParentComponent";
import SquareC from "./SquareC";
import Header from "./header";
import Fruits from "./Fruits";
import Login from "C:\Ashish\reactproject\ABhij\abhijeet\src\Login.js";

export default function App17() {
    let [hideflag, setflag] = useState(false)

    return <div>
        {/* {hideflag?"":<Header></Header>} */}
        {/* { !hideflag && <Header></Header>} */}
        <br></br>
        {/* Hide Header :<input type="checkbox" onChange={(e)=>{setflag(e.target.checked)}}/> */}
        {/* <SquareC></SquareC>
        <ParentComponent></ParentComponent> */}
        {/* <Fruits></Fruits> */}
        <Login></Login>
    </div>
}