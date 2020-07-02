import React, { useState, useRef } from "react";
import anime from "animejs";
import { useEffectOnce, useLockBodyScroll } from "react-use";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPowerOff } from "react-icons/fa";

import { useHistory } from "react-router-dom";

import {
  NavbarContainer,
  Expand,
  NavbarBoxOne,
  NavbarBoxTwo,
  NavbarBoxThree,
  NavbarBoxOneItem,
  NavbarBoxThreePowerBtn,
} from "./navbar.styles";

const Navbar = (props) => {
  let history = useHistory();

  console.log("history", history);
  const [expand, setExpand] = useState(false);
  useLockBodyScroll(expand);

  return (
    <NavbarContainer>
      <NavbarBoxOne
        onMouseEnter={() => {
          setExpand(true);
        }}
      >
        <NavbarBoxOneItem>
          <GiHamburgerMenu
            onMouseEnter={() => {
              setExpand(true);
            }}
            size="30px"
          />
        </NavbarBoxOneItem>
      </NavbarBoxOne>
      <NavbarBoxTwo></NavbarBoxTwo>
      <NavbarBoxThree>
        <NavbarBoxThreePowerBtn>
          <FaPowerOff size="25px" onClick={() => history.push("/signin")} />
        </NavbarBoxThreePowerBtn>
      </NavbarBoxThree>
      {expand && <ExpandFun setExpand={setExpand} />}
    </NavbarContainer>
  );
};

const ExpandFun = ({ setExpand }) => {
  //return <GiHamburger size="30px" />;
  const expandElement = useRef(null);
  console.log("expandElement", expandElement);
  useEffectOnce(() => {
    anime({
      targets: expandElement.current,
      translateX: "5rem",
      easing: "easeOutExpo",
      duration: 800,
    });
  });
  console.log("expandElement", expandElement);
  return (
    <Expand
      ref={expandElement}
      onMouseLeave={() => {
        setExpand(false);
      }}
      onMouseEnter={() => {
        setExpand(true);
      }}
    />
  );
};

export default Navbar;
