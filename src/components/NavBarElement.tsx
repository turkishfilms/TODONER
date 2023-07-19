import React from "react";

interface NavBarElementInterface {
  children: string;
  onclick: () => void;
}

const NavBarElement = ({ children, onclick }: NavBarElementInterface) => {
  return (
    <>
      <nav onClick={() => onclick()}>{children}</nav>
    </>
  );
};
export default NavBarElement;
