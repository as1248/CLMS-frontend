import TextField from '@mui/material/TextField';

const EmailInput = ({email, handleEmail, handleKeyDown}) => {
  return (
    <TextField 
      ref={email}
      onChange={handleEmail} 
      onKeyDown={handleKeyDown} 
      label="이메일" 
      placeholder="이메일을 입력해주세요." 
      margin="normal" 
      required 
      fullWidth
    />
  );
};

export default EmailInput;