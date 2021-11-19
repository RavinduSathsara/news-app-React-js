import React from "react";
import { Container } from "@mui/material";
import AppNavBar from "./components/AppNavBar";
import Post from "./components/Post";

import "./index.css";
import TimeLinePost from "./components/TimeLinePost";

const App = () => {
  return (
    <div>
      <AppNavBar />
      <Container maxWidth="md">
        {/* <Post /> */}
        <TimeLinePost />
      </Container>
    </div>
  );
};

export default App;
