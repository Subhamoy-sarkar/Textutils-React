import React , {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleCapitaliseCase=()=>{  //self made yo
    let newText=text.split(" ");
    let ans="";
    for(let i=0;i<newText.length;i++){
      newText[i]=newText[i][0].toUpperCase() + newText[i].substring(1);
      ans+=newText[i]+" ";
    }
    setText(ans.substring(0,ans.length-1));
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleClear=()=>{   //self made yo
    let newText="";
    setText(newText);
  }

  const[text,setText]=useState('');
/*
  text="new text" ;    //-> wrong way to update the state
  setText("new text");  // --> correct way to update/change the state
*/
  return (
    <>
      <div style={{color:props.mode==='light'? 'black':'white'}}>
          <h2 >{props.text}</h2>
          <div className="form-group">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'? 'white':'black' , color:props.mode==='light'? 'black':'white'}} id="myBox" cols="20" rows="10"></textarea>
          </div>
          <button className="btn btn-primary my-2" onClick={handleUpClick} >Convert to Upper case</button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Lower case</button>
          <button className="btn btn-primary mx-2" onClick={handleCapitaliseCase}>Capitalise Case</button>
          <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>handleExtraSpaces</button>
      </div>
      <div className="container my-3 " style={{color:props.mode==='light'? 'black':'white'}}>
        <h1>Your text summary : </h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview </h2>
        <p>{text.length===0 ? "Enter something in textbox above to preview it here " : text}</p>
      </div>
    </>
  )
}
