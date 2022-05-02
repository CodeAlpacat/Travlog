import React, { useRef, useState } from "react";
import NavBar from "./NavBar";
import Box from "@mui/material/Box";
import Feed from "../routes/Feed";
import Stack from "@mui/material/Stack";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import Add from "./Add";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const Home = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  //데이터를 저장할 객체 배열
  const jsonData = [
    {
      id: 1000,
      title: '제목1',
      content: '내용1',
    }
  ]
  const [postDatas, setPostDatas] = useState(jsonData);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [counter, setCounter] = useState(0);
  
  const countPlus = () => {
    setCounter(counter + 1)
  }


  const getPostTitle = (e) => {
    setPostTitle(e.target.value);
  };
  const getPostContent = (e) => {
    setPostContent(e.target.value);
  };

  const CreateNewData = (e) => {
    e.preventDefault();
    countPlus()
    setPostDatas((currentDatas) => [
      {
        id: counter,
        title: postTitle,
        content: postContent,
      },
      ...currentDatas,
    ]);
    
  };

  // const deleteButton = useRef()
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed postDatas={postDatas}/>
          <RightBar />
        </Stack>
        <Add getPostTitle={getPostTitle} getPostContent={getPostContent} CreateNewData={CreateNewData}/>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
