import React, {useState}  from 'react'

export default function Textarea(props) {
  const handleUpClick = ()=>{
    console.log(text)
    let newText =text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    console.log(text)
    let newText =text.toLowerCase();
    setText(newText)
  }
  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
const [text, setText] = useState("Enter the text");
  return (
  <>
<div className='container' style={{ color:props.mode === 'dark'?'white': 'black'}} >
<h2>{props.heading}</h2>
  <div className="mb-3">
  <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'Grey': 'white', color:props.mode === 'dark'?'white': 'black'}} id="mybox" rows="8"></textarea>
   </div>
  <button className='btn btn-primary mx-2 ' onClick={handleUpClick} >convert to uppercase</button>
  <button className='btn btn-primary mx-2' onClick={handleLoClick} >convert to Lowercase</button>
  <button className='btn btn-primary mx-2 my-2' onClick={speak} >speak</button>
 </div>
 <div className="container my-3" style={{ color:props.mode === 'dark'?'white': 'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
 </div>
 </>
  )
}
