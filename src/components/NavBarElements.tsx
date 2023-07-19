interface NavBarElementInterface {
  children: string;
  onclick: () => void;
}

const NavBarElement = ({ children, onclick }: NavBarElementInterface) => {
  return (
    <>
      <div onClick={() => onclick()}>{children}</div>
    </>
  );
};
export default NavBarElement;
