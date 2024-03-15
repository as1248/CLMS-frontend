import TextField from '@mui/material/TextField';

const PhoneNumberInput = ({phoneNumber, handlePhoneNumber, phoneNumberValid, handleKeyDown}) => {
  return (
    <TextField
      error={!phoneNumberValid}
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