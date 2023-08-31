import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AppButton from "./AppButton";
import BasicChips from "./BasicChips";

export default function AppBox({ data, handleBtnLearnMore }) {
  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: 260,
        backgroundColor: "primary.dark",
        borderRadius: 4,
        color: "white",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {data.title}
      </Typography>
      <BasicChips dataChips={data.skills} />
      <Typography>{data.description}</Typography>
      <AppButton
        variant="contained"
        onClick={() => handleBtnLearnMore(data.id)}
      >
        Learn More
      </AppButton>
    </Box>
  );
}
