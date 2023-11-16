import React from 'react';
import {Link} from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} ${props.redmode==="light" ? "red": "light"}bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="navbar-brand" aria-current="page" href="/">{props.home}</a>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
           <a className="navbar-brand" href="/"> 
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled">Disabled</a> */}
        </li>
      </ul>
      <div className='bg-primary rounded my-3' onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}>
      </div>
      <div className='bg-success rounded my-3' onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}>
      </div>
      <div className={`form-check form-switch text-${props.mode==="light" ? "dark" : "light"} `} >
       <input className='form-check-input' onClick={()=>{props.toggleMode(null)}} type="checkbox"/>
       <label  className='form-check-lebel' htmlFor="switch">{props.mode==="light" ? "dark" : "light"} mode</label>
       <div className={`form-check form-switch text-${props.mode==="light" ? "dark" : "light"} `}>
       <input className='form-check-input' onClick={props.toggleredMode} type="checkbox"/>
       <label  className='form-check-lebel' htmlFor="switch">{props.redmode==="light" ? "light" : "red"} mode</label>
       </div>
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}
