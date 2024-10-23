import  Add from "./Add/Add";
import Counter from "./Counter/counter";
import  Timer from "./Timer/Timer";
import Temperature from "./Temperature/Temperature";
import "./Component.css";
function Component() {
    return (
        <>
           
            <div className="K-container">
                <div className="T-container">
                    <h1  style={{fontSize:"40px"}} className="badge bg-warning text-dark">REACT COMPONETS</h1>
                </div>
             
             <div className="main-info-container">
                <div className="in-container">
                    <Counter/>
                    <Timer />
                </div>

                <div className="in-3-container">
                    <Add/>
                </div>

             
             </div>

                <div className="info-4-container">
                <Temperature/>
                </div>

                <div className="O-container">
                <h1 className="badge bg-warning text-dark" style={{fontSize:"40px"}}>นางสาว กันต์ณิษา อินตรา 66080904</h1>
                </div>

            </div>
            
            
        </>
      );
}

export default Component;
