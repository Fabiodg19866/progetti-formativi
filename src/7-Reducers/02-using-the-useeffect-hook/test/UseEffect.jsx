import React,{useState, useEffect} from 'react'

export default function UseEffect() {


  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(20);


  useEffect(() => {
    setTimeout(() => {
      setIncrement((increment) => increment + 1);
    }, 1000);
    setTimeout(() => {
      setDecrement((decrement) => decrement - 1);
    }, 1000);



  }, [increment,decrement]); 


  return (
    <React.Fragment>
      <div> 
      {increment}
       </div>
      <div>{decrement}</div>
   
    </React.Fragment>
  )
}
