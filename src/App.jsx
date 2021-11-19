import React from "react";
import { Container } from "@mui/material";
import AppNavBar from "./components/AppNavBar";

import "./index.css";
import TimeLinePost from "./components/TimeLinePost";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";

const App = () => {
  return (
    <div>
      {/* <AppNavBar /> */}
      <PrimarySearchAppBar />
      <Container maxWidth="md">
        <TimeLinePost />
      </Container>
    </div>
  );
};

export default App;
