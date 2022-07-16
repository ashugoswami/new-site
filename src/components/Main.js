import { Box } from "@mui/material";
import React from "react";
import { Post } from "./Post";
//box => css => inline
// stack => already flex , we need to flex-direction
// sx={{}}// same as box

export const Main = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
