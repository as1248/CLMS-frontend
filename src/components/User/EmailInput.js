import TextField from '@mui/material/TextField';

const EmailInput = ({email, setEmail, emailValid, setEmailValid, handleKeyDown, showEmailField}) => {
  const handleEmail = (e)=> {
    setEmail(e.target.value);
    const regex = /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }

  return (
    <TextField
      error={!emailValid}
      value={email}
      onChange={handleEmail}
      onKeyDown={handleKeyDown}
      disabled={showEmailField}
      label="이메일"
      placeholder="example@company.com"
      margin="normal"
      required
      fullWidth
    />
  );
};

export default EmailInput;