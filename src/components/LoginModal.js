import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { JobPostingsContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import FormProvider from "./form/FormProvider";
import AppTextField from "./form/AppTextField";
import { useForm } from "react-hook-form";
import { IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import AppButton from "./AppButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "white",
  "@media (max-width:500px)": {
    width: "80%",
  },
};

export default function LoginModal() {
  console.log("ZOOOOO");
  const contextProps = useContext(JobPostingsContext);
  const { openSignIn, setOpenSignIn, setIsSignedIn, setOpenJobDetail } =
    contextProps;
  const navigate = useNavigate();
  console.log(openSignIn);

  const handleCloseModal = () => {
    setOpenSignIn(false);
    console.log(">>>>>>>close login");
    navigate("/");
  };
  const methods = useForm({
    defaultValues: {
      username: "coderschool",
      password: "123456",
    },
  });
  const { handleSubmit } = methods;
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("username", JSON.stringify(data?.username));
    localStorage.setItem("password", JSON.stringify(data?.password));
    setIsSignedIn(true);
    setOpenSignIn(false);
    setOpenJobDetail(false);
    console.log(">>>>>>>submit login form");
    navigate("/");
  };
  return (
    <div>
      <Modal
        open={openSignIn || true}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
            Login
          </Typography>
          <FormProvider onSubmit={handleSubmit(onSubmit)} methods={methods}>
            <Stack spacing={2}>
              <AppTextField name="username" label="Username" />
              <AppTextField
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <AppButton variant="contained" type="submit">
                LOGIN
              </AppButton>
            </Stack>
          </FormProvider>
        </Box>
      </Modal>
    </div>
  );
}
