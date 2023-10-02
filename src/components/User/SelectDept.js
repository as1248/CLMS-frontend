import React, { useEffect, useState } from 'react';
import { TextField, MenuItem } from '@mui/material';
import axios from 'axios';
import { baseUrl } from "../../Atoms";
import { useRecoilState } from "recoil";

const SelectDept = ({ universityId = '1', setDeptStu}) => {
  const [BASEURL,] = useRecoilState(baseUrl);
  const [departments, setDepartments] = useState([]);
  
  const fetchDepartments = async () => {
    try {
      const response = await axios.get(BASEURL+'/register/departments?universityId='+universityId);
      setDepartments(response.data.departments);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, [universityId, BASEURL]); 

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
