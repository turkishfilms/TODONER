import Button from "./Button";
import ListArea from "./ListArea";
import ListItem from "./ListItem";
import NavBarElement from "./NavBarElements";
import TopBar from "./TopBar";



const doThing = ()=>{
  console.log("pooty")
}

const App = () => {
  return (
    <>
      <TopBar>
      <NavBarElement onclick={doThing}>h</NavBarElement>
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
