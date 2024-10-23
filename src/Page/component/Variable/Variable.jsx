import './Variable.css';

function Variable({type , name , value , setValue}) {
    

    return (  
        <div className="main-container">
            <h1>{name || "Counter" }</h1>
            <div className="info-container">
                <button className='btn btn-danger Counter-btn' onClick={() => setValue(value-1)}>-</button>
                <h2>{type && type === "int" ? value : value.toFixed(2)}</h2>
                <button className='btn btn-success Counter-btn' onClick={() => setValue(value+1)}>+</button>
            </div>
        </div>
    );
}

export default Variable;