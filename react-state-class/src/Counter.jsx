import { useState } from "react";

function init() {
    return Math.random();
}

export default function Counter() {
    let [count, setCount]= useState(init);
    console.log("Component is rendered");
  
    let incCount = () => {
        setCount((currCount) => {
           return currCount + 1;
        });
        setCount((currCount) => {
            return currCount + 1;
        });
        console.log(`Inside incCount,count = ${count}`);
    }
    
    return (
        <div>
            {/* <button onClick={decCount}>Decrease Count</button> */}
            <h3>Count= {count}</h3>
            <button onClick={incCount}>Increase Count</button> 
        </div>
    );
}