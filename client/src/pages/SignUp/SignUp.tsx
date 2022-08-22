import { Avatar, Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Grid } from "@material-ui/core";
import SignUpForm from "../../components/Auth/SignUpForm";

const SignUp = () => {
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
          Sign Up
        </Typography>

        <SignUpForm />

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Typography mt={3} color="text.secondary">
              Already have an account? <Link to="/">Login</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SignUp;
