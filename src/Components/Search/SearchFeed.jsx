import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "../Videos/Videos";
import { FetchFromAPI } from "../../Utils/FetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  console.log(searchTerm);
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
    // search is undefined here
    // console.log(searchTerm);
  }, [searchTerm]);

  return (
    <>
      {/* there is problem in search term -> solve this  */}
      <h1 style={{ color: "white" }}>hello {searchTerm}</h1>

      <Box p={2} minHeight="95vh">
        <Typography
          variant="h4"
          fontWeight={900}
          color="white"
          mb={3}
          ml={{ sm: "100px" }}
        >
          Search Results for{" "}
          <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>
        <Box display="flex">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};

export default SearchFeed;
