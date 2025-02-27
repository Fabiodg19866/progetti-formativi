import React,{useState} from 'react'

export default function UseState() {

    const [counter, setCounter] = useState('counter');
    const [increment, setIncrement] = useState(0);
    const [decrement, setDecrement] = useState(20);

    const clickHandler = () => {
        setCounter('Update Counter');
        setIncrement(increment + 1)
        console.log(increment);
        setDecrement(decrement - 1)
        console.log(decrement);
    }

  return (
      <div>
            <button onClick={clickHandler}>My name is </button>
       <p>{counter}</p>
       <p>{increment}</p>
       <p>{decrement}</p>    
    

    </div>
  )
}
