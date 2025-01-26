import ListForm from "./ListForm";
import Logo from "./Logo";
import Stats from "./Stats";
import List from "./List";
import { useState } from "react";
function App() {
  // const items = [
  //   { id: 1, description: "Passports", quantity: 2, packed: false },
  //   { id: 2, description: "Socks", quantity: 12, packed: true },
  // ];

  const [items, setItems] = useState([]);

  function onAddItems(qty, description) {
    let newItem = { id: crypto.randomUUID(), description, quantity: Number(qty), packed: false };
    setItems((items) => [...items, newItem]);
  }

  return (
    <div className="app">
      <Logo />
      <ListForm onAddItems={onAddItems} />
      <List items={items} />
      <Stats />
    </div>
  );
}

export default App;
