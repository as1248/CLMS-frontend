import Button from "@mui/material/Button";

const SubmitBtn = ({children, notAllow, onClickConfirmButton}) => {
  return (
    <Button
      disabled={notAllow}
      onClick={onClickConfirmButton}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      {children}
    </Button>
  );
};

export default SubmitBtn;
