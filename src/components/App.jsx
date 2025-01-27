import ListForm from "./ListForm";
import Logo from "./Logo";
import Stats from "./Stats";
import List from "./List";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);
  const [currId, setCurrId] = useState("1");

  function onAddItems(qty, description) {
    let newItem = { id: currId, description, quantity: Number(qty), packed: false };
    setItems((items) => [...items, newItem]);
    setCurrId((prev) => prev + 1);
  }

  function onDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function onToggleCheck(id) {
    setItems((items) => {
      return items.map((item) => {
        return {
          ...item,
          packed: item.id === id ? !item.packed : item.packed,
        };
      });
    });
  }

  function onCleatList() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <ListForm onAddItems={onAddItems} />
      <List items={items} onDeleteItem={onDeleteItem} onToggleCheck={onToggleCheck} onCleatList={onCleatList} />
      <Stats items={items} />
    </div>
  );
}

export default App;
