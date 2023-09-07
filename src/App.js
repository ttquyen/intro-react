import { useForm } from "react-hook-form";
import "./App.css";
import {
  Alert,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import {
  FormProvider,
  AppCheckbox,
  AppTextField,
  AppMultiCheckbox,
  AppRadioGroup,
  AppSelectBox,
  AppSwitch,
} from "./components/form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup
  .object({ username: yup.string().required(), email: yup.string().email() })
  .required();

function App() {
  const defaultValues = {
    username: "",
    email: "quyentt@nec.vn",
    password: "123",
    remember: true,
    industry: [],
    gender: "",
    country: "Vietnam",
  };
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <Typography variant="h3" textAlign="center" mb={3}>
        React Form Data
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <AppTextField name="username" label="Username" />
          <AppTextField name="email" label="Email Address" />
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
          <AppMultiCheckbox name="industry" options={["web", "mobile"]} />
          <AppRadioGroup name="gender" options={["male", "female"]} />
          <AppSelectBox name="country" label="Country">
            {[
              { code: "VN", label: "Vietnam" },
              { code: "CA", label: "Cambodia" },
            ].map((option) => (
              <option key={option.code} value={option.label}>
                {option.label}
              </option>
            ))}
          </AppSelectBox>
          <AppSwitch name="isGoing" label="Is Going" />
        </Stack>
        <Stack>
          <AppCheckbox name="remember" label="Remember me" />
        </Stack>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </FormProvider>
    </div>
  );
}

export default App;
