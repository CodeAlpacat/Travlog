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
  const initialJsonData = [
    {
      id: 1000,
      title: "제목1",
      content: "내용1",
    },
  ];
  const [postDatas, setPostDatas] = useState(initialJsonData);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [counter, setCounter] = useState(0);

  //localStorage에 저장
  const savePostLocal =  () => {
    localStorage.setItem("postDatas", JSON.stringify(postDatas))
  }
  
  const getPostLocal = JSON.parse(localStorage.getItem('postDatas'))
  console.log(getPostLocal)

  //게시글을 생성하는 Input 데이터 가져오기
  const getPostTitle = (e) => {
    setPostTitle(e.target.value);
  };
  const getPostContent = (e) => {
    setPostContent(e.target.value);
  };


  
  
  //생성하는 게시글 마다 key 값을 부여해주기 위해 id 값 증가
  const countPlus = () => {
    setCounter(counter + 1);
  };

  //새로운 게시글 생성 함수
  const CreateNewData = (e) => {
    e.preventDefault();
    countPlus();
    //삭제 후에 빈 값이거나 false가 뜰 경우를 위한 예외 처리
    console.log(postDatas)
    if (postDatas) {
      setPostDatas((currentDatas) => [
        {
          id: counter,
          title: postTitle,
          content: postContent,
        },
        ...currentDatas,
      ]);
      //생성한 뒤 저장
      savePostLocal();
    }
    else {
      setPostDatas([])
    }
  };

  //다크모드 함수
  const onDarkMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };


  //삭제 시에 setPostDatas 안에 arrow 함수로 filter를 반환하는 실수를 저지름
  const deletePostEvent = id => {
    setPostDatas(
      postDatas.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar onDarkMode={onDarkMode} />
          <Feed postDatas={postDatas} deletePostEvent={deletePostEvent} />
          <RightBar />
        </Stack>
        <Add
          getPostTitle={getPostTitle}
          getPostContent={getPostContent}
          CreateNewData={CreateNewData}
        />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
