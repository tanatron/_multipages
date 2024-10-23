import { useEffect, useState } from "react";
function Timer() {
    
    const [running ,setRunning] = useState(false);
    const [seconds,setSeconds] = useState(58);

    useEffect(() => {
        let interval = null;
        if(running){
            interval  = setInterval(() =>{
                setSeconds(seconds+1)
            },1000)
        }
        return () => clearInterval(interval);
    }, [running, seconds]);

    function secondsToString(seconds){
        const MINUTE_SECONDS = 60;
        const HOUR_SECONDS = MINUTE_SECONDS * 60;
        const DAY_SECONDS = HOUR_SECONDS * 24;
        
        const day = Math.floor(seconds / DAY_SECONDS);
        const hour = Math.floor((seconds % DAY_SECONDS) / HOUR_SECONDS);
        const minute = Math.floor((seconds % HOUR_SECONDS) / MINUTE_SECONDS);
        const second = seconds % MINUTE_SECONDS;

        if(day > 0){
            return `${day}d ${hour}h ${minute}m ${second}s`;
        }else if(hour > 0){
            return `${hour}h ${minute}m ${second}s`;
        }else if(minute > 0){
            return `${minute}m ${second}s`;
        }else{
            return `${second}s`;
        }
    }

    function runClick(){
        setRunning(!running);
    }

    function ResetClick(){
        setRunning(false);
        setSeconds(0);
    }

    return ( 
        <div className="Timer-container">
            <h3>Timer</h3>
            <p><input className='Timer-Display' type="text" readOnly={true} value={secondsToString(seconds)}/></p>
            <div className='btn-container'>
                <button className='btn btn-danger'  onClick={ResetClick}>Reset</button>
                <button className={'btn ' +  (running ? 'btn-warning' : 'btn-success')} onClick={runClick}>{running ? 'Pause' : 'Run'}</button>
            </div>
        </div>
     );
}

export default Timer;