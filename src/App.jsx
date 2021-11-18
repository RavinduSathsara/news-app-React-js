import React from "react";
import AppNavBar from "./components/AppNavBar";
import RecipeReviewCard from "./components/RecipeReviewCard";
import { Container } from "@mui/material";

const App = () => {
  return (
    <div>
      <AppNavBar />
      <Container maxWidth="md">
        <RecipeReviewCard />
      </Container>
    </div>
  );
};

export default App;
