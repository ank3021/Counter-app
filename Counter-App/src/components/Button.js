import React, {useState} from 'react'
import PropTypes from 'prop-types'

let p = 0;
let q = 0;
let r = 0;
//let s = 0;
export default function Button(props) {
    const[number, setNumber] = useState(0);
    
    const button1 = ()=>{
      console.log("button 1 was clicked.")
      p = p + 1;
      let a = number + 1;
      setNumber(a);
    }

    const button2 = ()=>{
        console.log("button2 was clicked.")
        q = q + 1;
        let b = number - 1;
        setNumber(b);
    }

    const button3 = ()=>{
        console.log("It has been cleared.")
        r = r + 1;
        let c = number - number;
        setNumber(c);
    }

    /*const button4 = ()=>{
      console.log("It has been trimmed.")
      s = s + 1;
      
    }*/

    const change = ()=>{
       console.log("Change happened.")
       setNumber(Event.target.value);
    }
  return (
    <>
    <h2><i>Counter App -</i></h2>
  <div className="container">
  <textarea className="form-control 2" value = {number} onChange = {change} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className = "increase" onClick={button1}>{props.Increase}</button>
  <button className = "decrease" onClick={button2}>{props.Decrease}</button>
  <button className = "clear" onClick={button3}>{props.Clear}</button>
  <p className = "para1"><b><i>Number of times Increment was done: {p}</i></b></p>
 <p className = "para2"><b><i>Number of times Decrement was done: {q}</i></b></p>
 <p className = "para3"><b><i>Number of times Clear was done: {r}</i></b></p>
</div>
    </>
  )
}

Button.propTypes = {
    Increase:PropTypes.string.isRequired,
    Decrease:PropTypes.string.isRequired,
    Clear:PropTypes.string.isRequired
}
