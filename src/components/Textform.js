import React,{useState} from 'react'
export default function Textform(props) {
  const handleupClick= ()=>{
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleloClick= ()=>{
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("gbbfyfdt","JK");
  }
  const handleOnChange= (event)=>{
  
     setText(event.target.value);
    }
    const handleclClick= (event)=>{
      let newtext=' ';
      setText(newtext);
    }
    const handlereClick= ()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
    }
    const [text, setText] =useState('');
    return (
      <>
    
    <div className='container' style={{color: props.mode==="dark"?"white" :"black"}}>
<div className="mb-3">
  <h2 htmlFor="mybox" className="form-label">Example textarea</h2>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="5" style={{backgroundColor: props.mode==='light'?'white':'blue' ,color: props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-3 my-3" onClick={handleupClick}>change uppercase</button>
<button className="btn btn-primary mx-3 my-3" onClick={handleloClick}>change lowercase</button>
<button className="btn btn-primary mx-3 my-3" onClick={handleclClick}>clear text</button>
<button className="btn btn-primary mx-3 my-3" onClick={handlereClick}>remove space</button>
    </div>
  <div className='container my-3'style={{color: props.mode==="dark"?"white" :"black"}}>
    <h1>your text summary</h1>
    <p> {text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} charte</p>
    <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes time</p>
    <h2>preview</h2>
    <p>{text}</p>
  </div>
    </>
  )
}

