import Button from "@mui/material/Button";

const SendEmailBtn = ({emailValid, sendButtonDisabled, handleButtonClick}) => {
  return (
    <Button
      disabled={!emailValid || sendButtonDisabled}
      onClick={handleButtonClick}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      전송
    </Button>
  );
};

export default SendEmailBtn;
