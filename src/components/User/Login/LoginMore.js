import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";

const LoginMore = () => {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item xs>
        <Link sx={{ fontSize: '1rem' }} underline="hover" onClick={()=>navigate("/login/findPassword")} style={{cursor:'pointer'}}>
          비밀번호 변경
        </Link>
      </Grid>
      <Grid item xs>
        <Link sx={{ fontSize: '1rem' }} underline="hover" onClick={()=>navigate("/login/signUp")} style={{cursor:'pointer'}}>
          회원가입(학습자)
        </Link>
      </Grid>
      <Grid item>
        <Link sx={{ fontSize: '1rem' }} underline="hover" onClick={()=>navigate("/login/signUpAd")} style={{cursor:'pointer'}}>
          회원가입(교수자)
        </Link>
      </Grid>
    </Grid>
  );
}

export default LoginMore