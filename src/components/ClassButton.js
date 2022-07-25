import React from "react";
import "../styles/ClassButton.css";


function BoldText({children}) {
  return <span style={{fontWeight: 'bold', textDecoration: 'underline'}}>{children}</span>;
}

const ClassButton = ({classText}) => {
  
  const classNameArr = classText.split(" , ");
  const firstName = classNameArr[0];
  const secondName = classNameArr[1];
  
  const manageSignUpClick = () => {

  }

  return (
    <div id = "class-box">
        <div id= "class-text">
          <BoldText>{firstName}</BoldText> {secondName}
        </div>
        <button id="sign-up" onClick = {manageSignUpClick} >
          Sign Up
        </button>
        
      </div>
  )

}

export default ClassButton;