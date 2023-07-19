import { useState } from "react";

import Button from "./Button";
import ListArea from "./ListArea";
import TopBar from "./TopBar";
import TodoInput from "./TodoInput";

function App() {
  const [view, setView] = useState({
    home: true,
    chain: false,
    donate: false,
  });

  const handleNav = (viewName: string) => {
    setView({
      home: viewName === "home",
      chain: viewName === "chain",
      donate: viewName === "donate",
    });
  };

  return (
    <>
      <TopBar onClickLink={handleNav} />
      {view.home && (
        <div>
          <Button>New Item</Button>
          <TodoInput />
          <ListArea />
        </div>
      )}
      {view.chain && <div>chain</div>}
      {view.donate && <div>btc or avax plz</div>}
    </>
  );
}

export default App;
