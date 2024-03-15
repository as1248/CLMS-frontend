import TextField from '@mui/material/TextField';

const PasswordConfirmInput = ({passwordConfirm, handlePasswordConfirm, passwordConfirmValid, handleKeyDown}) => {
  return (
    <TextField
      error={!passwordConfirmValid}
      value={passwordConfirm}
      onChange={handlePasswordConfirm}
      onKeyDown={handleKeyDown}
      margin="normal"
      label="비밀번호 확인"
      type="password"
      name="passwordConfirm"
      required
      fullWidth
      autoComplete="current-password"
    />
  );
};

export default PasswordConfirmInput;