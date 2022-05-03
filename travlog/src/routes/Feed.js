import React, { useState } from "react";
import Box from "@mui/material/Box";
import Post from "./Post";

const Feed = ({ postDatas, deletePostEvent}) => {
  //받은 json 객체 배열들을 순차적으로 나열
  return (
    <Box flex={4} p={2}>
      {postDatas && postDatas.map((data) => (
        <Post dataTitle={data.title} dataContent={data.content} dataId={data.id} key={data.id} deletePostEvent={deletePostEvent}/>
      ))}
    </Box>
  );
};

export default Feed;

