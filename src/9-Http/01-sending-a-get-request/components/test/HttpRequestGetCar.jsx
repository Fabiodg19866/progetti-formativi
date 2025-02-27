import React, { useState } from 'react';
import axios from 'axios';

import HttpRequestCarList from './HttpRequestCarList';
import './HttpRequestGetCar.css';

function HttpRequest() {
  const [cars, setCars] = useState([]);

  async function fetchCarsHandler() {
    await axios.get('https://mocki.io/v1/abd9fa71-67e7-4e58-a03b-267715169e4a')
     .then((response) => {
        const apiCars = response.data.map((carsData) => {
          return {
            id: carsData.cars_id,
            brand: carsData.brand,
            model: carsData.model,
            birthModel: carsData.birthModel,
          };
        });
        setCars(apiCars);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchCarsHandler}>Fetch Cars</button>
      </section>
      <section>
        <HttpRequestCarList cars={cars} />
      </section>
    </React.Fragment>
  );
}

export default HttpRequest;
