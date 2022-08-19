import { Avatar, Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LoginForm from "../../components/Auth/LoginForm";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Grid } from "@material-ui/core";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    // const color = Math.floor(Math.random() * 16777215).toString(16);
    // document.body.style.background = `#${color}`;
  });
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          backgroundColor: "light",
          padding: 5,
          borderRadius: 2,
          boxShadow: 3,
        }}
        mt={15}
        alignItems="center"
        justifyContent="center"
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Box>

        <Typography
          mb={3}
          mt={2}
          component="h1"
          variant="h5"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Login
        </Typography>

        <LoginForm />

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Typography mt={3} color="text.secondary">
              Don't have account? <Link to="/signup"> Sign in</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
