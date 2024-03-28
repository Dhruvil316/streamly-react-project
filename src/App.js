import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Feed from "./Components/Feed/Feed";
import NavBar from "./Components/Navbar/NavBar";
import Video from "./Components/Video/Video";
import Channel from "./Components/Channel/Channel";
import SearchFeed from "./Components/Search/SearchFeed";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "black" }}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
