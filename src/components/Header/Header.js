import React, { useEffect } from "react";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "D:/Other/Random Projects and tests/Ragam Test Site/Disney-Plus/disney-plus-clone/src/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  auth,
  provider,
} from "D:/Other/Random Projects and tests/Ragam Test Site/Disney-Plus/disney-plus-clone/src/firebase.js";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      navigate("/");
      let user = result;
      dispatch(
        setUserLogin({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      );
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      }
    });
  }, []);

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      navigate("./login");
    });
  };

  return (
    <NavBar>
      <a href="https://www.codechef.com/ide">
        <Logo src="/images/logo.svg"></Logo>
      </a>
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a href="#1">
              <img src="/images/home-icon.svg" alt="" />
              <span>HOME</span>
            </a>
            <a href="#5">
              <img src="/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </a>
            <a href="#4">
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>
            <a href="#4">
              <img src="/images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>
            <a href="#2">
              <img src="/images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </a>
            <a href="#3">
              <img src="/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg onClick={signOut} src={userPhoto} />
        </>
      )}
    </NavBar>
  );
}

export default Header;

const NavBar = styled.nav`
  overflow-x: hidden;
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 25px;
    }

    span {
      font-size: 16px;
      letter-spacing: 1.2px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        // top: 0;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  border: solid transparent 3px;

  &:hover {
    border: solid white 3px;
  }
`;
const Login = styled.div`
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rbga(0, 0, 0, 0.6);
  transistion: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
