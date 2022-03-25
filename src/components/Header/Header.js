import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <NavBar>
      <a href="https://www.codechef.com/ide">
        <Logo src="/images/logo.svg"></Logo>
      </a>
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

      <UserImg src="/images/profile.png" />
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
