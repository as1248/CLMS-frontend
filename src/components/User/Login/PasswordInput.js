import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordInput = ({password, handlePassword, handleKeyDown}) => {
  const [passwordType, setPasswordType] = useState({
    type: 'password',
    visible: false
  });

  const PasswordIcon = passwordType.visible ? VisibilityIcon : VisibilityOffIcon;

  const handlePasswordType = () => {
    setPasswordType(prevState => {
      return {
        type: prevState.visible ? "password" : "text",
        visible: !prevState.visible
      };
    });
  };
  
  return (
    <TextField
      margin="normal"
      label="비밀번호"
      name="password"
      placeholder="특수문자 제외, 영문, 숫자 포함 8자 이상"
      required
      fullWidth
      autoComplete="current-password"
      type={passwordType.type}
      ref={password}
      onChange={handlePassword}
      onKeyDown={handleKeyDown}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <PasswordIcon onClick={handlePasswordType} />
          </InputAdornment>
        )
      }} 
    />
  );
};

export default PasswordInput;