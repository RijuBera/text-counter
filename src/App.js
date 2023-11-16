import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Textform from "./components/Textform";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import React, {useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [redmode, setredmode] = useState("light")
  const toggleredMode=()=>{
    if(redmode==="light"){
      setredmode('#b01e41');
    document.body.style.backgroundColor="red";
    showAlert("light mode is enable","success");
    }
    else{
      setredmode('light');
    document.body.style.backgroundColor="white";
    showAlert("light mode is enable","primary");
    }
  }
  const showAlert=(message,type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const removeClass=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
  }
 const toggleMode= (cls) =>{
   removeClass();
  document.body.classList.add('bg-'+cls);
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor="blue";
    showAlert("light mode is enable","primary");
    // document.title="textutiles-lightmode"
  }
  else{
    setMode ('light');
    document.body.style.backgroundColor="white";
    showAlert("dark mode is enable","success");

  }
 }
  return(
    <>

  <Router>
<Navbar title="Titletext2" home= "Home" mode={mode} redmode={redmode}toggleredMode={toggleredMode} toggleMode={toggleMode} />
<div style={{height:'50px',weight:'40px'}}>
<Alert alert={alert}/>
</div>
<div className="container my-3">
  <Textform mode={mode} toggleMode={toggleMode}/>
         <Routes>
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"
           element= {<Textform />}>
          </Route> */}
          <Route exact path="/about"
           element= {<About />}>
          </Route>
        </Routes>
      </div>
    </Router>
{/* <About/> */}
 

</>
 
  );
  }
export default App;
