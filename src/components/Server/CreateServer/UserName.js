import { TextField } from "@mui/material";

const UserName = ({serverData, setServerData, serverUserNamevalidate, setServerUserNameValidate}) => {
  const serverUserNamevalidation = (str) => {
    const reg = /[a-zA-Zㄱ-ㅎ가-힣0-9]+/gim;
    return reg.test(str);
  };

  const handleServerUserName = (event) => {
    const value = event.target.value;
    setServerData({ ...serverData, serverUsername: value});
    if (value.length >= 1 && value.length <= 250) {
      for (let i = 0; i < value.length; i++) {
        if (serverUserNamevalidation(value[i])) {
          setServerUserNameValidate(true);
        } else {
          setServerUserNameValidate(false);
          break;
        }
      }
    } else {
      setServerUserNameValidate(false);
    }
  };
  return (
    <TextField
      label="유저 이름 입력"
      onChange={(e) => handleServerUserName(e)}
      error={!serverUserNamevalidate}
      helperText="리눅스 계정명을 입력해주세요"
      fullWidth
      variant="standard"
    />
  );
};

export default UserName;