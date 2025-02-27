import React, { useState } from "react";

const FormState = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterData, setEnterDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnterDescription(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };

  const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
        title: enterTitle,
         description:enterDescription
      };
  
      console.log(expenseData);

  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label><br />
        <input type="text" onChange={titleChangeHandler} /><br />
        <label>Description</label><br />
        <textarea
          cols="30"
          rows="10"
          minLength={500}
          onChange={descriptionChangeHandler}
        ></textarea><br />
        <label>Amount</label><br />
              <input type="number" name="" id="" min='0.01' step='0.01'
                onChange={amountChangeHandler}
              />
        <br />
        <label>Date</label><br />
              <input type="date"
                  min='2019-01-01'
                  max='2022-12-31'
                onChange={dateChangeHandler} 
              
              />
             
             <br /><br />
              <button type="button">Invia</button>
      </div>
    </form>
  );
};

export default FormState;
