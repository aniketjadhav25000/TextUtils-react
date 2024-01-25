import React , {useState}from 'react'


export default function TextForms(props) {

    const handleupClick = ()=>
    {
        console.log("Uppercase was Clicked..!"+text);
        let uppertxt = text.toUpperCase();
        setText(uppertxt);
    }

    const Clicklowercase=()=>
    {
        console.log("Lowercase was clicked..!"+text);
        let lowertext = text.toLowerCase();
        setText(lowertext);
        
    }

    const clickCleartextarea=()=>
    {
        setText(' ');
    }
    const handleOnChange=(event)=>
    {
        console.log("On change");
        setText(event.target.value)
    }


    const[text, setText] = useState('');
    


  return (
    <>
    
<div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <div className='container' >
    
        <div className={"mb-3 "}>

            <h1>Enter the text in below textarea..!</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color : props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
            <button className="btn btn-primary mx-2" id="btnUpper" onClick={handleupClick} >Uppercase </button>
            <button className="btn btn-primary mx-2" onClick={Clicklowercase}>Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clickCleartextarea}>Clear</button>
            
    </div>

    <div className='container'>
        <h1>Your text summary</h1>
        <p>you typed {text.split(" ").length-1} words and {text.length} characters</p>
    </div>

    <div className='container'>
        <h1>Preview</h1>
        <p>{text.length>0?text:'Enter text in textarea to preview it here'}</p>
    </div>
    </div>

    </>

  )
}