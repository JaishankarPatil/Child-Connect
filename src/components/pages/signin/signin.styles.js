import styled from "styled-components";

import Back from "../../../assets/2549400.jpg";

export const SigninPage = styled.div`
  min-width: 100%;
  height: 100vh;
  background-image: url(${Back});
  background-size: cover;
  background-position: center;
`;

export const SigninContainer = styled.div`
  height: 30rem;
  width: 22rem;
  background-color: #666668;
  margin: auto;
  border-radius: 9px;
  top: 4rem;
  position: relative;
`;

export const SigninIconCont = styled.div`
  height: 5rem;
  position: relative;
  top: 2rem;
`;

export const SigninInputCont = styled.div`
  height: 20rem;
  width: 18.3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 1.5rem;
  left: 2rem;
`;

export const RememberMeContainer = styled.div`
  width: 18rem;
  height: 2rem;
  position: relative;
  display: flex;
  justify-content: left;
`;
export const RememberMeSpan = styled.span`
  font-size: 16px;
  padding-left: 6px;
`;
export const RememberMe = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 15px;
  cursor: pointer;
`;

export const SigninButton = styled.button`
  width: 18rem;
  height: 3rem;
  position: relative;
  background-color: #66f1f3;
  border-radius: 4px;
  margin-top: 25px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
`;
export const ForgrtPasswordContainer = styled.div`
  width: 18rem;
  height: 2rem;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ForgrtPasswordSpan = styled.span`
  font-size: 16px;
  color: black;
`;

export const ForgrtPasswordAnchor = styled.a`
  text-decoration: none;
  color: black;
`;
