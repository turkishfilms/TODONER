import Button from "./Button";

interface TopBarInterface {
  children: Array<Button>;
}

const TopBar = ({ children }: TopBarInterface) => {
  return (
    <>
      <div className="navbar">TopBar + {children.length}</div>
      {children.forEach((child) => {
        return child;
      })}
      {/* { <Button count={1}>N</Button> <Button count={22}>toot</Button>} */}
    </>
  );
};

export default TopBar;
