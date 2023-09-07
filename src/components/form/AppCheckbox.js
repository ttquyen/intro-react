import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function AppCheckbox({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return <Checkbox {...field} checked={field.value || false} />;
          }}
        />
      }
      {...other}
    />
  );
}
export default AppCheckbox;
