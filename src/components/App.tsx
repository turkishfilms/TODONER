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

  const [list, setList] = useState(["woah"]);

  const handleNav = (viewName: string) => {
    setView({
      home: viewName === "home",
      chain: viewName === "chain",
      donate: viewName === "donate",
    });
  };
  const handleItemAdd = (newItem: string) => {
    setList([newItem, ...list]);
  };

  const appendList = (text: string) => {
    let newList = list;
    console.log("A,appendli:text=> ,", text)
    newList.push(text);
    setList(newList);
  };
  return (
    <>
      <TopBar onClickLink={handleNav} />
      {view.home && (
        <div>
          <Button onAddItem={handleItemAdd}>New Item</Button>
          <TodoInput onAddText={appendList} />
          <ListArea>{list}</ListArea>
        </div>
      )}
      {view.chain && <div>chain</div>}
      {view.donate && <div>btc or avax plz</div>}
    </>
  );
}

export default App;
