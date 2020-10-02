import React, {useRef, useState} from "react";
export default function Card(title) {
    const [count, setCount] = useState(0)
    const [callbackSetup, setCallbackSetup] = React.useState(false)
    const stateRef = useRef();

    // make stateRef always have the current count
    // your "fixed" callbacks can refer to this object whenever
    // they need the current value.  Note: the callbacks will not
    // be reactive - they will not re-run the instant state changes,
    // but they *will* see the current value whenever they do run
    stateRef.current = count;

    function setupConsoleCallback(callback) {
        console.log("Setting up callback")
        setInterval(callback, 3000)
    }

    function clickHandler() {
        setCount(count+1);
        if (!callbackSetup) {
            setupConsoleCallback(() => {console.log(`Count is: ${stateRef.current}`)})
            setCallbackSetup(true)
        }
    }

    return (
        <div>
            Active count {count} <br/>
            <button onClick={clickHandler}>Increment</button>
        </div>
    );

}
