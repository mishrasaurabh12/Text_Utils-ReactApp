import React, { useState } from "react";

export default function Textarea(props) {
  const handleUpClick = () => {
    // console.log("handleUpClick was clicked");
    let newText;
    newText=text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to upper case','success');
  };
  const handleLoClick = () => {
    // console.log("handleUpClick was clicked");
    let newText;
    newText=text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lower case','success');
  };
  const handleCopyText = () => {
    // console.log("handleUpClick was clicked");
    
    let vartext;
    vartext=document.getElementById('mybox');
    vartext.select();
    navigator.clipboard.writeText(vartext.value);
    document.getSelection().removeAllRanges();
    

  };
  const handleClearText = () => {
    
    let vartext;
    vartext="";
    setText(vartext);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className="mb=4">{props.heading}</h1>
        <div className="input-group">
          {/* <span className="input-group-text">With textarea</span> */}
          <textarea style={{backgroundColor: props.mode==='dark'?'grey':'white'}}
            className="form-control new"
            id="mybox"
            value={text}
            onChange={handleOnChange}
            aria-label="With textarea"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick} disabled={text.length===0}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick} disabled={text.length===0}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopyText} disabled={text.length===0}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleClearText} disabled={text.length===0}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>Your Text Summary</h1>
          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
          <p>On an average it will take {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text}</p>
      </div>
    </>
  );
}
