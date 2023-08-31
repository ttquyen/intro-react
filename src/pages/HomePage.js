import { Container, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";
import AppBox from "../components/AppBox";
import jobList from "../data.json";
import { useNavigate } from "react-router-dom";
const ITEM_PER_PAGE = 5;
function HomePage() {
  const navigate = useNavigate();
  const [dataList, setDataList] = useState(jobList.slice(0, 5) || []);
  const [page, setPage] = useState(1);

  const handleBtnLearnMore = (id) => {
    navigate(`/detail/${id}`);
  };
  const handleChangePage = (event, value) => {
    setDataList(
      jobList.slice(
        (value - 1) * ITEM_PER_PAGE,
        (value - 1) * ITEM_PER_PAGE + 5
      )
    );
    setPage(value);
  };

  return (
    <Container sx={{ minWidth: "100%", minHeight: "100%" }}>
      <Grid container spacing={2} padding={2}>
        {dataList.map((j, index) => (
          <Grid key={index} item xs={12} md={4} lg={4}>
            <AppBox data={j} handleBtnLearnMore={handleBtnLearnMore} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        sx={{ display: "flex", justifyContent: "center" }}
        alignitems="center"
        count={Math.round(jobList.length / ITEM_PER_PAGE)}
        page={page}
        onChange={handleChangePage}
      />
    </Container>
  );
}

export default HomePage;
