import { TextField } from "@mui/material";

const ServerName = ({serverData, setServerData, serverNameValidate, setServerNameValidate}) => {
  const serverNameValidation = (str) => {
    const reg = /[a-zA-Zㄱ-ㅎ가-힣0-9]+/gim;
    return reg.test(str);
  };
  const handleServerName = (event) => {
    const value = event.target.value;
    setServerData({ ...serverData, serverName: value});
    if (value.length >= 1 && value.length <= 250) {
      for (let i = 0; i < value.length; i++) {
        if (serverNameValidation(value[i])) {
          setServerNameValidate(true);
        } else {
          setServerNameValidate(false);
          break;
        }
      }
    } else {
      setServerNameValidate(false);
    }
  };

  return (
    <TextField
      label="서버 별명 입력"
      onChange={(e) => handleServerName(e)}
      error={!serverNameValidate}
      helperText="사용할 서버의 이름을 입력해주세요"
      fullWidth
      variant="standard"
    />
  );
};

export default ServerName;