import { useState, useEffect } from "react";
import Variable from "../Variable/Variable";
import './Temperature.css';

function Temperature() {
    // ฟังก์ชันสำหรับการแปลงอุณหภูมิ
    const convertCtoF = (C) => (C * 9/5) + 32;
    const convertCtoK = (C) => C + 273.15;
    const convertFtoC = (F) => (F - 32) * 5/9;
    const convertKtoC = (K) => K - 273.15;

    const [Cel, setCel] = useState(25);
    const [Fa, setFa] = useState(convertCtoF(25)); // เริ่มต้นจาก 25°C
    const [K, setK] = useState(convertCtoK(25));   // เริ่มต้นจาก 25°C

    // ใช้ useEffect เพื่ออัพเดตค่าเมื่อมีการเปลี่ยนแปลง
    useEffect(() => {
        setFa(convertCtoF(Cel)); // อัพเดต Fahrenheit
        setK(convertCtoK(Cel));   // อัพเดต Kelvin
    }, [Cel]);

    // ฟังก์ชันสำหรับอัพเดตค่า Fahrenheit
    const handleFaChange = (newFa) => {
        setFa(newFa);
        setCel(convertFtoC(newFa)); // อัพเดต Celsius
        setK(convertCtoK(convertFtoC(newFa))); // อัพเดต Kelvin
    };

    // ฟังก์ชันสำหรับอัพเดตค่า Kelvin
    const handleKChange = (newK) => {
        setK(newK);
        setCel(convertKtoC(newK)); // อัพเดต Celsius
        setFa(convertCtoF(convertKtoC(newK))); // อัพเดต Fahrenheit
    };

    return ( 
        <div className="Tem-container">
            <h3 className="title">Temperature</h3>
            
            <h2 className="display-container">
                <span className="badge text-bg-primary"> {Cel.toFixed(2)}°C</span>
                <span className="badge text-bg-primary"> {Fa.toFixed(2)}°F</span>
                <span className="badge text-bg-primary"> {K.toFixed(2)}K</span>
            </h2>

            <div className="variable-container">
                <Variable name={"Celsius"} value={Cel} setValue={setCel} />
                <Variable name={"Fahrenheit"} value={Fa} setValue={handleFaChange} />
                <Variable name={"Kelvin"} value={K} setValue={handleKChange} />
            </div>
        </div>
    );
}

export default Temperature;
