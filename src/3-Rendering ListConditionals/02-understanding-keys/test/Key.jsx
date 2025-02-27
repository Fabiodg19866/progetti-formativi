import React from 'react'

function Car(props) {
    return <li>I am a { props.brand }</li>;
  }

export default function Key() {
    const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <div>

      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
      
    </div>
  );
}
