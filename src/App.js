import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About'
import React from "react";

function App() {
    const[mode,setmode]=useState("light");
    const tooglemode=() => {
      if (mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor ='#230303'
        //setInterval(()=>{
        //   document.title='Install textUtils'
        //},2000);
        //setInterval(()=>{
        //   document.title='textUtils is amazing'
        //},2000);
        
      }
      else{
        setmode('light');
        document.body.style.backgroundColor ='white'
      }
    };
  return (  
   <>
   <Navbar title= "TEXTEDITOR" about="about" mode={mode} tooglemode={tooglemode} />
  
   <div className="container">
    
     <Textarea heading="Please enter the text area" mode={mode}/>
      <About></About>
   </div>
   </>
  );
}

export default App;
