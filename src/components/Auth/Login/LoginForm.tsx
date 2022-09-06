import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/ReduxStore";
import { logIn } from "../../../actions/AuthActions";
import {
  Alert,
  Box,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";

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

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [open, setOpen] = useState<Boolean>(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("User Name is required"),
    password: Yup.string().required("Password is required"),
  });

  const responseHandler = (res: {
    response: { data: React.SetStateAction<string> };
  }) => {
    setOpen(true);
    setLoading(false);
    setAlert(res.response.data);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }, [alert, open]);

  const Formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      setLoading(true);
      setTimeout(() => dispatch(logIn(values, responseHandler)), 2000);
    },
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = Formik;

  return (
    <>
      <FormikProvider value={Formik}>
        <Form
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
          data-testid="form"
        >
          <Box
            component={motion.div}
            animate={{
              transition: {
                staggerChildren: 0.55,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
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
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <Icon icon="eva:eye-fill" />
                        ) : (
                          <Icon icon="eva:eye-off-fill" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                data-testid="password"
              />
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={animate}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ my: 2 }}
              >
                <Link
                  component={RouterLink}
                  variant="subtitle2"
                  to="#"
                  underline="hover"
                >
                  Forgot password?
                </Link>
              </Stack>

              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={loading}
                data-testid="submitBtn"
              >
                {loading ? "loading..." : "Login"}
              </LoadingButton>
            </Box>
          </Box>
        </Form>
      </FormikProvider>

      {open && (
        <Alert style={{ marginTop: 10 }} severity="error">
          {alert}
        </Alert>
      )}
    </>
  );
};

export default LoginForm;
