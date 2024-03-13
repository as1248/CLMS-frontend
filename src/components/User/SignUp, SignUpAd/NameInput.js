import TextField from '@mui/material/TextField';

const PasswordInput = ({name, setName, handleKeyDown}) => {

  const handleName = (e) => {
    setName(e.target.value);
  }
  
  return (
    <TextField
      value={name}
      onChange={handleName}
      onKeyDown={handleKeyDown}
      margin="normal"
      label="이름"
      name="name"
      required
      fullWidth
    />
  );
};

export default PasswordInput;