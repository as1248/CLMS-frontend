import TextField from '@mui/material/TextField';

const PasswordInput = ({password, handlePassword, handleKeyDown}) => {
  return (
    <TextField
      value={password}
      onChange={handlePassword}
      onKeyDown={handleKeyDown}
      margin="normal"
      label="비밀번호"
      type="password"
      name="password"
      placeholder="특수문자 제외, 영문, 숫자 포함 8자 이상"
      required
      fullWidth
      autoComplete="current-password"
    />
  );
};

export default PasswordInput;