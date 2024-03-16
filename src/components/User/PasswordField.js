import styled from "styled-components";
import PasswordInput from "./PasswordInput";

const PasswordField = ({password, setPassword, passwordValid, setPasswordValid, handleKeyDown}) => {

  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex =
      /^[a-zA-z0-9]{8,20}$/;
    if(regex.test(e.target.value)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }

  return (
    <>
      <PasswordInput password={password} handlePassword={handlePassword} passwordValid={passwordValid} handleKeyDown={handleKeyDown} />
      {!passwordValid && password.length > 0 && (
        <StyledText>특문자 제외 영문자 숫자로 8자 이상 20자 미만으로 입력해주세요</StyledText>
      )}
    </>
  );
}

export default PasswordField;

const StyledText = styled.div`
  color:red;
  font-size:0.8rem;
`;