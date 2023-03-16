// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [Mode,setMode]=useState('light');//whether dark mode is enable or not 
  const [textMode,setTextMode]=useState('DarkMode');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  }
  const toggle=()=>{
    if(Mode==='dark'){
      setMode('light');
      setTextMode('DarkMode');
      document.body.style.backgroundColor='white';
      showAlert("light Mode has been enabled","success");
      document.title="TextUtils- Light Mode";
    }
    else {
      setMode('dark');
      setTextMode('LightMode');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been enabled","success");
      document.title="TextUtils- Dark Mode";
    }
  }
  // return (); --> JSX
  return (  
    // <> </>  --> JSX fragment 
    <>
      <Navbar title="TextUtils" about="About us" mode={Mode} toggle={toggle} textMode={textMode}  />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm text="Enter text below  : " mode={Mode}   showAlert={showAlert}></TextForm>
      </div>
    </>
  );
}

export default App;