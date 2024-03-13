import Button from "@mui/material/Button";

const SubmitBtn = ({notAllow, onClickConfirmButton}) => {
  return (
    <Button
      disabled={notAllow}
      onClick={onClickConfirmButton}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      가입하기
    </Button>
  );
};

export default SubmitBtn;
