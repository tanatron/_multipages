import { useState } from "react";
function Counter(props) {
    
    const [value,setValue] = useState(0);

    function increment(){
        setValue(value+1);
    }

    function decrement(){
        setValue(value-1);
    }

    return (  
        <div className="main-container">
            <h1 className="title">{props.name || "Counter" }</h1>
            <div className="info-container">
                <button className="btn btn-danger Counter-btn" onClick={decrement}>-</button>
                <h2>{value}</h2>
                <button className="btn btn-success Counter-btn" onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default Counter;