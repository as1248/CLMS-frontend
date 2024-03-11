import Button from "@mui/material/Button";

const LoginBtn = ({notAllow, onClickConfirmButton}) => {
  return (
    <Button
      disabled={notAllow}
      onClick={onClickConfirmButton}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      로그인
    </Button>
  );
};

export default LoginBtn;

