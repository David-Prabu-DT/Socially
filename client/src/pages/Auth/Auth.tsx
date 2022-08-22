import { Avatar, Box, Container, Typography } from "@mui/material";

import LoginForm from "../../components/Auth/LoginForm";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import SignUpForm from "../../components/Auth/SignUpForm";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

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
          {isSignUp ? "Register" : "Login"}
        </Typography>

        {isSignUp ? <SignUpForm /> : <LoginForm />}

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Typography
              mt={3}
              color="text.secondary"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
