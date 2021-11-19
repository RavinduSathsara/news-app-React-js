import React from "react";
import { Container } from "@mui/material";
import AppNavBar from "./components/AppNavBar";

import "./index.css";
import TimeLinePost from "./components/TimeLinePost";

const App = () => {
  return (
    <div>
      <AppNavBar />
      <Container maxWidth="md">
        <TimeLinePost />
      </Container>
    </div>
  );
};

export default App;
