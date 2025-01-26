import ListForm from "./ListForm";
import Logo from "./Logo";
import Stats from "./Stats";
import List from "./List";
function App() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
  ];

  return (
    <div className="app">
      <Logo />
      <ListForm />
      <List items={initialItems} />
      <Stats />
    </div>
  );
}

export default App;
