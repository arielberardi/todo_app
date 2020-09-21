import React from "react"
import { useEffect, useRef } from "react"

const TodoHeader = props => {

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  }

  const isInitialMount = useRef(true)

  useEffect(() => {
    
    if(isInitialMount.current){
      isInitialMount.current = false
    }
    else{
  
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";

      document.getElementById("inH1").innerHTML = "clicked";
      document.getElementById("inH1").style.backgroundColor = bgColor;
    }
  }, [props.headerSpan])

  return (

    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
        Simple Todo APP <span id="inH1"></span>
      </h1>
      <p style={{ fontSize: "19px" }}>Please add to-dos item(s) through the input field</p>
    </header>
  )
}

export default TodoHeader