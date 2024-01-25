
import './App.css';
import Navbar from './component/Navbar';
import TextForms from './component/TextForms';
import react,{ useState } from 'react';
import About from './component/About';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import About  from './component/About';
let name="Aniket";
function App() {

  const [mode,setMode] = useState('light');
  const [DarkText,setDarkText] = useState('Enable Dark mode');

  const [alert,setAlert] = useState(null);


  const toggleMode=()=>
  {
    if(mode==='dark')
    {
      setMode('light');
      setDarkText('Enable dark mode');
      document.body.style.backgroundColor='white';
      document.title= 'TextUtils-light mode';
    }
    else
    {
      setMode('dark');
      setDarkText('Enable light mode');
      document.body.style.backgroundColor='#001e49';
      document.title= 'TextUtils-dark mode';
    }
  }
  return ( // above code is JSX
<>

<Navbar title="TechyGeek!" aboutText="about" mode={mode} toggleMode = {toggleMode} DarkText={DarkText} /> 

<div className="container my-4">
<TextForms  mode={mode}/> 
</div>

</>
  );
}
export default App;
