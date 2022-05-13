import React from "react";
import styled from "styled-components";
import { selectMovies } from "D:/Other/Random Projects and tests/Ragam Test Site/Disney-Plus/disney-plus-clone/src/features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Movies() {
  const movies = useSelector(selectMovies);
  // console.log(movies);
  return (
    <Container>
      <h3>Recommended For You</h3>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img src={movie.cardImg} />
              </Link>
            </Wrap>
          ))}
      </Content>
      {/* <h3>Trending Now</h3>
      <Content>
        <Wrap>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtcjHG3G-RVw6sOBrZ99tw8x6TVST7hnc8w&usqp=CAU"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtcjHG3G-RVw6sOBrZ99tw8x6TVST7hnc8w&usqp=CAU"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtcjHG3G-RVw6sOBrZ99tw8x6TVST7hnc8w&usqp=CAU"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtcjHG3G-RVw6sOBrZ99tw8x6TVST7hnc8w&usqp=CAU"
            alt=""
          />
        </Wrap>
      </Content> */}
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  margin: 0 15px 15px;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  overflow: hidden;
  transition-duration: 200ms;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
  }
`;
