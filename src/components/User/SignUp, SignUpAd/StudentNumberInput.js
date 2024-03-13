import TextField from '@mui/material/TextField';

const StudentNumberInput = ({studentNumber, handleStudentNumber, handleKeyDown}) => {
  return (
    <TextField
      value={studentNumber}
      onChange={handleStudentNumber}
      onKeyDown={handleKeyDown}
      margin="normal"
      label="학번"
      name="studentNumber"
      required
      fullWidth
    />
  );
};

export default StudentNumberInput;