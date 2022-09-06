import React from "react";
import * as Yup from "yup";
import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import {
  // Alert,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import { LoadingButton } from "@mui/lab";
import { signUp } from "../../../actions/AuthActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../store/ReduxStore";

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const SignUpSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
    username: Yup.string().required("User Name is required"),
    password: Yup.string().required("Password is required"),
  });

  const Formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: () => {
      dispatch(signUp(values, navigate));
    },
  });
  const { errors, touched, values, handleSubmit, isSubmitting, getFieldProps } =
    Formik;
  return (
    <>
      <FormikProvider value={Formik}>
        <Form
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
          data-testid="form"
        >
          <Stack spacing={3}>
            <Stack
              component={motion.div}
              initial={{ opacity: 0, y: 60 }}
              animate={animate}
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <TextField
                fullWidth
                label="First name"
                {...getFieldProps("firstname")}
                error={Boolean(touched.firstname && errors.firstname)}
                helperText={touched.firstname && errors.firstname}
                data-testid="firstname"
              />

              <TextField
                fullWidth
                label="Last name"
                {...getFieldProps("lastname")}
                error={Boolean(touched.lastname && errors.lastname)}
                helperText={touched.lastname && errors.lastname}
                data-testid="lastname"
              />
            </Stack>

            <Stack
              spacing={3}
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              animate={animate}
            >
              <TextField
                fullWidth
                autoComplete="username"
                type="text"
                label="User Name"
                {...getFieldProps("username")}
                error={Boolean(touched.username && errors.username)}
                helperText={touched.username && errors.username}
                data-testid="username"
              />

              <TextField
                fullWidth
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
                label="Password"
                {...getFieldProps("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword((prev) => !prev)}
                      ></IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                data-testid="password"
              />
            </Stack>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={animate}
            >
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                data-testid="submitBtn"
              >
                Sign up
              </LoadingButton>
            </Box>
          </Stack>
        </Form>
      </FormikProvider>
      <br />
      {/* <Alert severity="success">This is an error message!</Alert> */}
    </>
  );
};

export default SignUpForm;
