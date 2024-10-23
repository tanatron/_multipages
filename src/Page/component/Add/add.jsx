import { useState } from "react";
import Variable from "../Variable/Variable";
import './Add.css';
function Add() {
    
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
    
    return ( 
        <div className="add-container">
            <h3 className="title">ADD</h3>
            
            <h2 className="display-container">
                <span className="badge text-bg-secondary"> A = {a}</span>
                <span className="badge text-bg-primary"> A + B = {a+b}</span>
                <span className="badge text-bg-secondary"> B = {b}</span>
            </h2>

            <div className="variable-container">
                <Variable type="int" name={"A"} value={a} setValue={setA}/>
                <Variable type="int" name={"B"} value={b} setValue={setB}/>
            </div>
        </div>
     );
}

export default Add;