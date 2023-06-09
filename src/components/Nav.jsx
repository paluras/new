import React from "react";
import { useState ,useEffect} from 'react'

function Nav({handleClickCRT, number}){

    const [time, setTime] = useState(new Date());
    //const [number , setNumber] = useState(Math.floor(Math.random() * 100))
    const months = ["Mon","Tue","Wen","Thurs","Fry","Sat","Sun"];

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

 


    return(
            <nav>
                <p>100 <span className="crt-mode" onClick={() => handleClickCRT()}>CRT</span> <span>{number}</span> <span>{months[time.getDay()-1]}</span> {time.getDate()}.{time.getMonth()+1}.{time.getFullYear()} {time.toLocaleTimeString()}</p>
              </nav>
    )
}

export default Nav