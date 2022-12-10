import React, { useState } from "react";
const TrafficLight = () => {
    const [color, setColor] = useState("")
    const [isPurple, setIsPurple] = useState(false)
    const handleClick = () => {
        setColor("red")
    }
    const handleSecondClick = () => {
        setColor("yellow")
    }
    const handleThirdClick = () => {
        setColor("green")
    }
    const handleFourthClick = () => {
        setColor("purple")
    }

    const handleButton = () => {
        if (color === "purple") {
            setColor("red")
        }else if (color === "red") {
            setColor("yellow");
        } else if (color === "yellow"){
            setColor("green");
        } else if (color === "green" && isPurple){
            setColor("purple")
        } else {setColor("red")
        }
    }
    
    const handleSecondButton = () => {
        setIsPurple(true)
        setColor("purple")
    }

    return isPurple && color === "purple" ? (
        <>
            <div className="stick"></div>
            <div className="trafficLight">
                <div className="red" onClick={handleClick}></div>
                <div className="yellow" onClick={handleSecondClick}></div>
                <div className="green" onClick={handleThirdClick}></div>
                <div className="purple selected" onClick={handleFourthClick}></div>
            </div>
            <button className="btn" onClick={handleButton}>Cycle colors</button>
            <button className="secondBtn" onClick={handleSecondButton}>Create extra color</button>
        </>
    ) : isPurple && color === "" ? (
        <>
            <div className="stick"></div>
            <div className="trafficLight">
                <div className="red" onClick={handleClick}></div>
                <div className="yellow" onClick={handleSecondClick}></div>
                <div className="green" onClick={handleThirdClick}></div>
                <div className="purple" onClick={handleFourthClick}></div>
            </div>
            <button className="btn" onClick={handleButton}>Cycle colors</button>
            <button className="secondBtn" onClick={handleSecondButton}>Create extra color</button>
        </>

    ) : isPurple && color === "red" ? (
        <>
                <div className="stick"></div>
                <div className="trafficLight">
                    <div className="red selected" onClick={handleClick}></div>
                    <div className="yellow" onClick={handleSecondClick}></div>
                    <div className="green" onClick={handleThirdClick}></div>
                    <div className="purple" onClick={handleFourthClick}></div>
                </div>
                <button className="btn" onClick={handleButton}>Cycle colors</button>
                <button className="secondBtn" onClick={handleSecondButton}>Create extra color</button>
            </>

    ) : isPurple && color === "yellow" ? (
        <>
                <div className="stick"></div>
                <div className="trafficLight">
                    <div className="red" onClick={handleClick}></div>
                    <div className="yellow selected" onClick={handleSecondClick}></div>
                    <div className="green" onClick={handleThirdClick}></div>
                    <div className="purple" onClick={handleFourthClick}></div>
                </div>
                <button className="btn" onClick={handleButton}>Cycle colors</button>
                <button className="secondBtn" onClick={handleSecondButton}>Create extra color</button>
            </>

    ) : isPurple && color === "green" ? (
        <>
                <div className="stick"></div>
                <div className="trafficLight">
                    <div className="red" onClick={handleClick}></div>
                    <div className="yellow" onClick={handleSecondClick}></div>
                    <div className="green selected" onClick={handleThirdClick}></div>
                    <div className="purple" onClick={handleFourthClick}></div>
                </div>
                <button className="btn" onClick={handleButton}>Cycle colors</button>
                <button className="secondBtn" onClick={handleSecondButton}>Create extra color</button>
            </>

    ) : isPurple === false && color === "" ? (
        <>
            <div className="stick"></div>
            <div className="trafficLgt">
                <div className="red" onClick={handleClick}></div>
                <div className="yellow" onClick={handleSecondClick}></div>
                <div className="green" onClick={handleThirdClick}></div>
            </div>
            <button className="btn" onClick={handleButton}>Cycle colors</button>
            <button className="secondBtn" onClick={handleSecondButton}>Create extra color</button>
        </>
    ) : isPurple === false && color === "red" ? (
        <>
                <div className="stick"></div>
                <div className="trafficLgt">
                    <div className="red selected" onClick={handleClick}></div>
                    <div className="yellow" onClick={handleSecondClick}></div>
                    <div className="green" onClick={handleThirdClick}></div>
                </div>
                <button className="btn" onClick={handleButton}>Cycle colors</button>
                <button className="secondBtn" onClick={handleSecondButton}>Create extra color</button>
            </>
    ) : isPurple === false && color === "yellow" ? (
        <>
                <div className="stick"></div>
                <div className="trafficLgt">
                    <div className="red" onClick={handleClick}></div>
                    <div className="yellow selected" onClick={handleSecondClick}></div>
                    <div className="green" onClick={handleThirdClick}></div>
                </div>
                <button className="btn" onClick={handleButton}>Cycle colors</button>
                <button className="secondBtn" onClick={handleSecondButton}>Create extra color</button>
            </>
    ) : isPurple === false && color === "green" ? (
        <>
        <div className="stick"></div>
        <div className="trafficLgt">
            <div className="red" onClick={handleClick}></div>
            <div className="yellow" onClick={handleSecondClick}></div>
            <div className="green selected" onClick={handleThirdClick}></div>
        </div>
        <button className="btn" onClick={handleButton}>Cycle colors</button>
        <button className="secondBtn" onClick={handleSecondButton}>Create extra color</button>
    </>   
    ) : (
        <>
        <div className="stick"></div>
        <div className="trafficLgt">
            <div className="red" onClick={handleClick}></div>
            <div className="yellow" onClick={handleSecondClick}></div>
            <div className="green" onClick={handleThirdClick}></div>
        </div>
        <button className="btn" onClick={handleButton}>Cycle colors</button>
        <button className="secondBtn" onClick={handleSecondButton}>Create extra color</button>
    </>
    )
}
export default TrafficLight;