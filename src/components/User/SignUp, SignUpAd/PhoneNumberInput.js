import TextField from '@mui/material/TextField';

const PhoneNumberInput = ({phoneNumber, handlePhoneNumber, handleKeyDown}) => {
  return (
    <TextField
      value={phoneNumber}  
      onChange={handlePhoneNumber}
      onKeyDown={handleKeyDown}
      label="학과 전화번호"
      margin="normal"
      required
      fullWidth
    />
  );
};

export default PhoneNumberInput;