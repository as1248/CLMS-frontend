import React, { useEffect, useState } from 'react';
import { TextField, MenuItem } from '@mui/material';
import axios from 'axios';

const SelectDept = ({ universityId = 1, setDeptStu}) => {
  const [departments, setDepartments] = useState([]);
  
  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`/register/departments?universityId=${universityId}`);
      setDepartments(response.data.departments);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, [universityId]); 

  const handleDepartmentChange = (event) => {
    const selectedDepartment = departments.find(department => department.name === event.target.value);
    if (selectedDepartment) {
      setDeptStu(selectedDepartment.id);
    }
};

  return (
    <TextField
      required
      select
      fullWidth
      onChange={handleDepartmentChange}
      margin="normal"
    >
      {departments?.map((department) => (
        <MenuItem key={department?.id} value={department?.name}>
          {department?.name}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default SelectDept;
