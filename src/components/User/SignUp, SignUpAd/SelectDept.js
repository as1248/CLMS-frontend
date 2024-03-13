import React, { useEffect, useState } from 'react';
import { TextField, MenuItem } from '@mui/material';
import axios from 'axios';

const SelectDept = ({ universityId = 1, setDeptStu}) => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    try {
      axios.get(`/register/departments?universityId=${universityId}`).then(response=>setDepartments(response.data.departments));
    } catch (error) {
      console.error(error);
    }
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
      margin="normal"
      label={'학과 선택'}
      onChange={handleDepartmentChange}
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
