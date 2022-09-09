import React, { useState } from "react";
import * as Yup from "yup";
import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../../actions/UploadAction";
import { updateUser } from "../../../actions/UserAction";
import { useFormik, Form, FormikProvider } from "formik";
import { motion } from "framer-motion";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { AuthDataType } from "../../../types/Global";
import { RootState } from "../../../store/ReduxStore";
import { ToastContainer, toast } from "react-toastify";

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

const ProfileModal = ({ modalOpened, setModalOpened, data }) => {
  const theme = useMantineTheme();
  const [profileImage, setProfileImage] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);
  const user: AuthDataType | null = useSelector(
    (state: RootState) => state["auth"]["authData"]["user"]
  );

  const param = useParams();
  const dispatch = useDispatch();

  const userId: string | null = user && user._id!;

  const firstname = user && user["firstname"];
  const lastname = user && user["lastname"];
  const worksAt = user && user["worksAt"];
  const livesIn = user && user["livesIn"];
  const country = user && user["country"];
  const relationship = user && user["relationship"];

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage" && setProfileImage(img);
    }
  };

  const ProfileSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
  });

  const Formik = useFormik({
    initialValues: {
      firstname: firstname || "",
      lastname: lastname || "",
      worksAt: worksAt || "",
      livesIn: livesIn || "",
      country: country || "",
      relationship: relationship || "",
    },
    validationSchema: ProfileSchema,
    onSubmit: () => {
      setLoading(true);

      if (profileImage) {
        const data:
          | {
              id?: string | null;
              name?: string;
              file?: Blob | null;
            }
          | FormData = new FormData();
        const fileName = `${Date.now()} ${profileImage["name"]}`;
        data.append("id", userId ?? "");
        data.append("name", fileName);
        data.append("file", profileImage);

        try {
          dispatch(uploadImage(data));
          setTimeout(() => {
            setModalOpened(false);
            setLoading(false);
            toast.success("User Image Updated !");
          }, 2000);
        } catch (err) {
          console.log(err);
          toast.error("Something Error!!");
        }
      }

      try {
        dispatch(updateUser(param["id"], values));
        setTimeout(() => {
          setModalOpened(false);
          setLoading(false);
          toast.success("User Details Updated!");
        }, 2000);
      } catch (error) {
        console.log(error);
        toast.error("Something Error!!");
      }
    },
  });
  const { errors, touched, values, handleSubmit, getFieldProps } = Formik;

  return (
    <>
      {/* <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={true}
        // onClose={handleClose}
        message="I love snacks"
      /> */}
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        size="55%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <Typography variant="h5" color="initial">
          Update Your Info
        </Typography>
        <br />
        <FormikProvider value={Formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
                  size="small"
                  variant="standard"
                />

                <TextField
                  fullWidth
                  label="Last name"
                  {...getFieldProps("lastname")}
                  error={Boolean(touched.lastname && errors.lastname)}
                  helperText={touched.lastname && errors.lastname}
                  size="small"
                  variant="standard"
                />
              </Stack>

              <Stack
                component={motion.div}
                initial={{ opacity: 0, y: 60 }}
                animate={animate}
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
              >
                <TextField
                  fullWidth
                  autoComplete="worksAt"
                  type="text"
                  label="Works At"
                  {...getFieldProps("worksAt")}
                  error={Boolean(touched.worksAt && errors.worksAt)}
                  helperText={touched.worksAt && errors.worksAt}
                  size="small"
                  variant="standard"
                />

                <TextField
                  fullWidth
                  autoComplete="livesIn"
                  type="text"
                  label="Lives In"
                  {...getFieldProps("livesIn")}
                  error={Boolean(touched.livesIn && errors.livesIn)}
                  // helperText={touched.livesIn && errors.livesIn}
                  size="small"
                  variant="standard"
                />
              </Stack>

              <Stack
                component={motion.div}
                initial={{ opacity: 0, y: 60 }}
                animate={animate}
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
              >
                <TextField
                  fullWidth
                  autoComplete="country"
                  type="text"
                  label="Country"
                  {...getFieldProps("country")}
                  error={Boolean(touched.country && errors.country)}
                  // helperText={touched.country && errors.country}
                  size="small"
                  variant="standard"
                />

                <TextField
                  fullWidth
                  autoComplete="relationship"
                  type="text"
                  label="Relationship status"
                  {...getFieldProps("relationship")}
                  error={Boolean(touched.relationship && errors.relationship)}
                  // helperText={touched.relationship && errors.relationship}
                  size="small"
                  variant="standard"
                />
              </Stack>

              <Stack
                component={motion.div}
                initial={{ opacity: 0, y: 60 }}
                animate={animate}
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
              >
                <TextField
                  fullWidth
                  autoComplete="profileImage"
                  label="Profile Image"
                  variant="standard"
                  name="profileImage"
                  type="file"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={onImageChange}
                />

                {/* <TextField
                  fullWidth
                  autoComplete="coverImage"
                  type="file"
                  label="Cover Image"
                  size="small"
                  variant="standard"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={onImageChange}
                /> */}
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
                  loading={loading}
                >
                  {loading ? "loading..." : "Update"}
                </LoadingButton>
              </Box>
            </Stack>
          </Form>
        </FormikProvider>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default ProfileModal;
