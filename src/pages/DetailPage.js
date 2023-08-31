import React from "react";
import jobList from "../data.json";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import BasicChips from "../components/BasicChips";
function formatDate(date) {
  let formatedDate = new Date(date);
  return `${formatedDate.getDay()}/${formatedDate.getMonth()}/${formatedDate.getFullYear()}`;
}
function DetailPage() {
  const { jobId } = useParams();
  const data = jobList.find((i) => i.id === jobId);

  return (
    <Box
      sx={{
        m: "auto",
        p: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        maxHeight: 400,
        maxWidth: 500,
        backgroundColor: "primary.dark",
        borderRadius: 4,
        color: "white",
        "@media (max-width:600px)": {
          maxWidth: 300,
          p: 1,
        },
      }}
    >
      {!data ? (
        <>Something went wrong...</>
      ) : (
        <>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {data.title}
          </Typography>
          <BasicChips dataChips={data.skills} />
          <Typography textAlign="start">
            Posted Date: {formatDate(data.postedDate)}
          </Typography>
          <Grid container spacing={2} sx={{ m: 2 }}>
            <Grid item xs={6}>
              <Typography textAlign="center">City: {data.city}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign="center">
                Remote: {data.remote ? "Allowed" : "Not allowed"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign="center">
                {data.yrsXPExpected} year's experience
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign="center">
                Up to {data.salaryHigh}
              </Typography>
            </Grid>
          </Grid>
          <Typography>{data.description}</Typography>
        </>
      )}
    </Box>
  );
}

export default DetailPage;
