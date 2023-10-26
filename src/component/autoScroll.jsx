import React from "react";
import {
    FaLongArrowAltUp,
  } from "react-icons/fa";
const scrollup=()=>{
    console.log('===scroll=====')
    window.scroll({
        top: 0,
        behavior: "smooth",
      })
}
const autoScroll=()=>{
    return (
        
        <div className="upScroll" onClick={()=>scrollup()}>
                     <FaLongArrowAltUp size={32} color="blue" />
 
        </div>
     
    );
}

export default autoScroll;