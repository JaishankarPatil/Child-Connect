import styled, { css } from "styled-components";

export const Group = styled.div`
  position: relative;
  width: 18rem;
  margin: 15px 0px;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`;

const shrink = css`
  ~ ${Label} {
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    top: -20px;
    font-size: 16px;
  }
`;

const shrinkLabel = (props) => {
  console.log("props", props.value.length);
  if (props.value.length >= 1) {
    return shrink;
  }
};

export const FormInputBox = styled.input`
  background-color: #f2f2f2;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: 1px solid #f2f2f2;
  border-radius: 2px;
  outline: none;
  &:focus ~ ${Label} {
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    top: -20px;
    font-size: 16px;
  }
  ${shrinkLabel}
`;
