import React from "react";
import { Container } from "@mui/material";
import AppNavBar from "./components/AppNavBar";
import RecipeReviewCard from "./components/RecipeReviewCard";

import "./index.css";

const App = () => {
  return (
    <div>
      <AppNavBar />
      <Container maxWidth="md">
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </Container>
    </div>
  );
};

export default App;
