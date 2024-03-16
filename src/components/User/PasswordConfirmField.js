import styled from "styled-components";
import PasswordConfirmInput from "./PasswordConfirmInput";

const PasswordConfirmField = ({password, passwordConfirm, setPasswordConfirm, passwordConfirmValid, setPasswordConfirmValid, handleKeyDown}) => {
  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
    const regex = password;
    if(regex === e.target.value) {
      setPasswordConfirmValid(true);
    } else {
      setPasswordConfirmValid(false);
    }
  }

  return (
    <>
      <PasswordConfirmInput passwordConfirm={passwordConfirm} handlePasswordConfirm={handlePasswordConfirm} passwordConfirmValid={passwordConfirmValid} handleKeyDown={handleKeyDown} />
      {!passwordConfirmValid && passwordConfirm.length > 0 && (
        <StyledText>비밀번호가 일치하지 않습니다</StyledText>
      )}
    </>
  );
}

export default PasswordConfirmField;

const StyledText = styled.div`
  color:red;
  font-size:0.8rem;
`;