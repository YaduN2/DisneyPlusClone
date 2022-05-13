import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "D:/Other/Random Projects and tests/Ragam Test Site/Disney-Plus/disney-plus-clone/src/firebase.js";
import { setMovies } from "D:/Other/Random Projects and tests/Ragam Test Site/Disney-Plus/disney-plus-clone/src/features/movie/movieSlice.js";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMoives = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      // console.log(tempMoives);
      dispatch(setMovies(tempMoives));
    });
  }, []);

  // const fetchMovies = async () => {
  //   const response = db.collection("movies");
  //   const data = await response.get();
  //   console.log(data.docs[1].data());
  // };

  // useEffect(() => {
  //   fetchMovies();
  // });
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  overflow-x: hidden;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
