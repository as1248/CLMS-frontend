import React, { useEffect, useState } from 'react';
import { TextField, MenuItem } from '@mui/material';
import axios from 'axios';

const SelectUniv = ({setUnivStu}) => {
  const [universities, setUniversities] = useState([]);
  
  useEffect(() => {
    axios.get('/register/universities')
      .then(response => {
        setUniversities(response.data.universities);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleUniversityChange = (event) => {
    setUnivStu(event.target.value);
};

  return (
    <TextField
      required
      select
      fullWidth
      margin="normal"
      onChange={handleUniversityChange} 
    >
      {universities?.map((university) => (
        <MenuItem key={university?.id} value={university?.id}>
          {university?.name}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default SelectUniv;
