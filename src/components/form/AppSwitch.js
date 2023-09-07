import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function AppSwitch({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Switch {...field} checked={field.value || false} />
          )}
        />
      }
      {...other}
    />
  );
}

export default AppSwitch;
