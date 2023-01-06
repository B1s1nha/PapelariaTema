import ItemValue from "./components/ItemValue";

function App() {
  const value = [
    {
      id: "e1",
      title: "pen",
      amount: 1.5,
    },
    {
      id: "e2",
      title: "pencil",
      amount: 2,
    },
    {
      id: "e3",
      title: "eraser",
      amount: 0.5,
    },
    {
      id: "e4",
      title: "notebook",
      amount: 10.5,
    },
    {
      id: "e5",
      title: "pancil case",
      amount: 4,
    },
    {
      id: "e6",
      title: "stickers",
      amount: 1.5,
    },
  ];
  return (
    <div className="App">
      <h1>Paper Store</h1>
      <ItemValue>
        title={value[0].title}
        amount={value[0].amount} 
      </ItemValue>
    </div>
  );
}

export default App;
