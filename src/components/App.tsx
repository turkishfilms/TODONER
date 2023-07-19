import Button from "./Button";
import ListArea from "./ListArea";
import TopBar from "./TopBar";
import TodoInput from "./TodoInput"

const App = () => {
  return (
    <>
      <TopBar></TopBar>
      <Button>New Item</Button>
        <TodoInput></TodoInput>
      <ListArea></ListArea>
    </>
  );
};

export default App;
