import { TextField } from "@mui/material";

const ServerIP = ({serverData, setServerData, IPValidate, setIPValidate}) => {
  const IPValidation = (str) => {
    const reg =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return reg.test(str);
  };
  const handleServerIP = (event) => {
    const value = event.target.value;
    setServerData({ ...serverData, Ipv4: value });
    if (IPValidation(value)) {
      setIPValidate(true);
    } else {
      setIPValidate(false);
    }
  };

  return (
    <TextField
      label="등록할 서버의 고정 IP 주소"
      onChange={(e) => handleServerIP(e)}
      error={!IPValidate}
      helperText="IP주소를 입력해주세요"
      fullWidth
      variant="standard"
    />
  );
};

export default ServerIP;