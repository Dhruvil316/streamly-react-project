import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "../Videos/Videos.jsx";

import ChannelCard from "../ChannelCard/ChannelCard";
import { FetchFromAPI } from "../../Utils/FetchFromAPI.js"

const Channel = () => {
  const { id } = useParams();

  const [channelDetail, setChannleDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  console.log(channelDetail);

  useEffect(() => {
    // here I pass the query which search across all the channels whoes snippet and id = given id ...returns the data of that channel -> returns the array containing 1 elemetn
    FetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannleDetail(data?.items[0])
    );

    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setChannelVideos(data?.items)
    );
  }, [id]);

  return (
    <Box
      minHeight="95vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>

      <Box p={2} display="flex" justifyContent="center">
        <Box sx={{ mr: { sm: "18px" } }} />
        <Videos videos={channelVideos} />
      </Box>
    </Box>
  );
};

export default Channel;
