import styled from "styled-components";
import React, { useState } from 'react'
import {FormControl,InputLabel,MenuItem,Select} from '@mui/material';
const Component = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const StyledComponent = () => {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };


  return (
    <div>
      <Component>
        <Title>Styled Component</Title>
          </Component>
          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>




    </div>
  );
};

export default StyledComponent;
