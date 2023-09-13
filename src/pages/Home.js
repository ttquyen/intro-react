import React, { Fragment } from "react";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <PrimarySearchAppBar />
      <Outlet />
    </Fragment>
  );
}

export default Home;
