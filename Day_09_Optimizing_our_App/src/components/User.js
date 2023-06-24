// Function Based component

import { useEffect, useState } from "react";


const User = (props) => {
    const [count,setcount]=useState(0);

    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("AKS ROCKS");
        },1000)
        return()=>{
           clearInterval(timer)
        }
    },[])

    return (
        <div className="user-card">
            <h2>Count = {count}</h2>
            <button onClick={() => {
                    setcount(count+1)
                }}>
                    Increase Count
                </button>
                <span>  </span>
                <button onClick={() => {
                    if(count>0){
                        setcount(count-1)
                    }
                }}>
                    Decrease Count
                </button>
            <h2>Name: {props.name}</h2>
            <h2>Location : Vaishali </h2>
            <h2>Contact : avnishaks </h2>
        </div>
    )
}

export default User;
