import React, { useState } from "react";
import Box from "@mui/material/Box";
import Post from "./Post";
import style from "./Feed.module.css";

const Feed = ({ postDatas, deletePostEvent }) => {
  return (
    <Box flex={4} p={1}>
      {postDatas &&
        postDatas.map((data) => (
          <Post
            className={`${style.trans}`}
            dataTitle={data.title}
            imageURL={data.imageURL}
            dateInput={data.dateInput}
            dataContent={data.content}
            dataId={data.id}
            key={data.id}
            deletePostEvent={deletePostEvent}
          />
        ))}
    </Box>
  );
};

export default Feed;
