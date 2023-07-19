import Button from "./Button";
import ListArea from "./ListArea";
import TopBar from "./TopBar";
import TodoInput from "./TodoInput";
import { useState } from "react";

const [screen, setScreen] = useState({
  home: 1,
  chain: 0,
  donate:0
});

const App = () => {
  return (
    <>
      <TopBar></TopBar>
      {screen.home ?? (
        <div>
          <Button>New Item</Button>
          <TodoInput></TodoInput>
          <ListArea></ListArea>
        </div>
      )}
    </>
  );
};

export default App;
