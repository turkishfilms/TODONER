import Button from "./Button";
import ListArea from "./ListArea";
import ListItem from "./ListItem";
import TopBar from "./TopBar";

const App = () => {
  return (
    <>
      <TopBar>
        <Button count={12}>Noway</Button>
        <Button count={12}>Hey</Button>
      </TopBar>

      <Button count={3}>Hugo</Button>
      <ListArea>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ListArea>
    </>
  );
};

export default App;
