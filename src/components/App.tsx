import Button from "./Button";
import ListArea from "./ListArea";
import TopBar from "./TopBar";
import TodoInput from "./TodoInput";
import { useState } from "react";

function App() {
  const [screen, setScreen] = useState({
    home: 1,
    chain: 0,
    donate: 0,
  });
  // setScreen({ home: 1, chain: 0, donate: 0 });
  return (
    <>
      <TopBar />
      {screen.home && (
        <div>
          <Button>New Item</Button>
          <TodoInput />
          <ListArea />
        </div>
      )}
      {screen.chain && <div>chain</div>}
      {screen.donate && <div>btc or avax plz</div>}
    </>
  );
}

export default App;
