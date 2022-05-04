import React, { useEffect, useRef, useState } from "react";
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

  //localStorage에서 기존 데이터를 받아옴.
  const getPostLocal = JSON.parse(localStorage.getItem("postDatas"));
  const [postDatas, setPostDatas] = useState(getPostLocal);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [imgURL, setImageURL] = useState(null);
  const [dateInput, setDateInput] = useState();
  useEffect(() => {
    window.localStorage.setItem("postDatas", JSON.stringify(postDatas));
  }, [postDatas]);

  //게시글을 생성하는 Input 데이터 가져오기
  const getPostTitle = (e) => {
    setPostTitle(e.target.value);
  };
  const getPostContent = (e) => {
    setPostContent(e.target.value);
  };

  //새로운 게시글 생성 함수
  const CreateNewData = (e) => {
    e.preventDefault();
    //삭제 후에 빈 값이거나 false가 뜰 경우를 위한 예외 처리
    if (postDatas) {
      setPostDatas((currentDatas) => [
        {
          id: Date.now(),
          title: postTitle,
          content: postContent,
          imageURL: imgURL,
          dateInput: dateInput,
        },
        ...currentDatas,
      ]);
      //생성한 뒤 저장
      // savePostLocal();
    } else {
      setPostDatas([]);
    }
  };

  //다크모드 함수
  const onDarkMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  //삭제 시에 setPostDatas 안에 arrow 함수로 filter를 반환하는 실수를 저지름
  const deletePostEvent = (id) => {
    setPostDatas(
      postDatas.filter((item) => {
        return item.id !== id;
      })
    );
  };

  //업로드한 이미지 파일 url 받아오기
  const saveImgFile = (e) => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = function (e) {
    setImageURL(e.target.result);
    };
  };

  //날짜 정보 가져와 업데이트
  const setDatePicker = (e) => {
    setDateInput(String(e).substring(0, 15))
    console.log(dateInput)
  }

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
          saveImgFile={saveImgFile}
          setDatePicker={setDatePicker}
          dateInput={dateInput}
        />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
