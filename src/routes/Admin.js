import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import RejectBtn from "../components/Admin/RejectBtn";
import ConfirmBtn from "../components/Admin/ConfirmBtn";
import VerificationList from "../components/Admin/VerificationList";

const Admin = () => {
  const [arrIds, setArrIds] = useState([]);

  //
  const handleClick = () => {
    console.log(arrIds);
  };


  return (
    <Container component="main" maxWidth="md">
      <Box 
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <div>인증요청 목록</div>
        <VerificationList onRowSelectionModelChange={setArrIds} />
        <Grid container justifyContent="space-between">
          <Grid item xs={5}>
            <RejectBtn onClick={handleClick} arrIds={arrIds} />
          </Grid>
          <Grid item xs={5}>
            <ConfirmBtn onClick={handleClick} arrIds={arrIds} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Admin;