import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 5rem;
  background-color: #f2f2f2;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
`;

export const NavbarBoxOneItem = styled.div`
  width: 3rem;
  height: 30%;
  z-index: 2;
  position: relative;
  top: 40px;
`;

export const NavbarBoxOne = styled.div`
  width: 5rem;
  background-color: blueviolet;
  position: relative;
  height: 20%;
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
`;

export const NavbarBoxTwo = styled.div`
  width: 5rem;
  background-color: green;
  position: relative;
  height: 80%;
  z-index: 2;
`;

export const NavbarBoxThree = styled.div`
  width: 5rem;
  background-color: yellow;
  position: relative;
  height: 20%;
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
`;

export const NavbarBoxThreePowerBtn = styled.div`
  width: 3rem;
  height: 30%;
  z-index: 2;
  position: relative;
  top: 40px;
`;

export const Expand = styled.div`
  background: red;
  width: 15rem;
  height: 100%;
  position: absolute;
  z-index: 1;
`;
