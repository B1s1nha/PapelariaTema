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
      <ItemValue title={value[0].title} amount={value[0].amount}></ItemValue>
      <ItemValue title={value[1].title} amount={value[1].amount}></ItemValue>
      <ItemValue title={value[2].title} amount={value[2].amount}></ItemValue>
      <ItemValue title={value[3].title} amount={value[3].amount}></ItemValue>
      <ItemValue title={value[4].title} amount={value[4].amount}></ItemValue>
      <ItemValue title={value[5].title} amount={value[5].amount}></ItemValue>
    </div>
  );
}

export default App;
