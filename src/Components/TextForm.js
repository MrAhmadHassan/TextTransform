import React from "react";
import { useState } from "react";

const TextForm = () => {
    const [text, settext] = useState("");

    const  handleUpClick = ()=>{
        console.log("Hye I am handleUpClick Thankyou for clicking me");
        settext(text.toUpperCase())
    }
    const  handleloClick = ()=>{
        console.log("Hye I am handleUpClick Thankyou for clicking me");
        settext(text.toLowerCase())
    }
    const  handleChange = (e)=>{
        console.log("Hye I am handleChange Thankyou for clicking me");
        settext(e.target.value);
        
    }




  return (
    <div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="12"
          onChange={handleChange}
          value = {text}
        ></textarea>
        
      </div>
    <button className="btn btn-success mx-5"  onClick={handleUpClick}>UpperCase</button>
    <button className="btn btn-success mx-5" onClick={handleloClick}>LowerCase</button>
    {/* <button className="btn btn-success mx-5">LowerCase</button>
    <button className="btn btn-success mx-5">LowerCase</button>
    <button className="btn btn-success mx-5">LowerCase</button> */}
    </div>
  );
};

export default TextForm;
