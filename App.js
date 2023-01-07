import ItemValue from "./components/ItemValue";

function App() {
  const value = [
    {
      id: "e1",
      title: "Pen",
      amount: 1.5,
      description: "Its a normal pen",
      img: "https://media.gazetadopovo.com.br/2021/07/13102924/bic-cristal-design-divulgacao-960x540.jpg",
    },
    {
      id: "e2",
      title: "Pencil",
      amount: 2,
      description: "Its a normal pencil",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06iym2PiLCMcIoY6H37vC6Mz8a3sd3HUhrA&usqp=CAU",
    },
    {
      id: "e3",
      title: "Eraser",
      amount: 0.5,
      description: "Its a normal eraser",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTty8YtJvtFZ7_7pK5Gkgldx0WbRPu8hdk02A&usqp=CAU",
    },
    {
      id: "e4",
      title: "Notebook",
      amount: 10.5,
      description: "Its a normal notebook",
      img: "https://rukminim1.flixcart.com/image/416/416/kjq1mkw0-0/diary-notebook/8/i/g/eco-friendly-set-of-6-colorful-hi-quality-spiral-notebook-set-original-imafz88aa3zhuegb.jpeg?q=70",
    },
    {
      id: "e5",
      title: "Pencil Case",
      amount: 4,
      description: "Its a normal pencil case",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNghzEMtwrDhKxXsmLBvnlKkWyD0qIkfzMQ&usqp=CAU",
    },
    {
      id: "e6",
      title: "Sticker",
      amount: 1.5,
      description: "Its a normal sticker",
      img: "https://cdn11.bigcommerce.com/s-miruu5f5ec/images/stencil/728x728/products/1219/8883/Line-Friends-in-the-Park-and-Flowery-Day-Themed-Stickers-Blind-Surprise-Pick-at-jellybeet.com-GS8701__99207.1654701121.jpg?c=2",
    },
  ];
  return (
    <div className="App">
      <h1>Paper Store</h1>
      <ItemValue title={value[0].title} amount={value[0].amount} description={value[0].description} img={value[0].img}></ItemValue>
      <ItemValue title={value[1].title} amount={value[1].amount} description={value[1].description} img={value[1].img}></ItemValue>
      <ItemValue title={value[2].title} amount={value[2].amount} description={value[2].description} img={value[2].img}></ItemValue>
      <ItemValue title={value[3].title} amount={value[3].amount} description={value[3].description} img={value[3].img}></ItemValue>
      <ItemValue title={value[4].title} amount={value[4].amount} description={value[4].description} img={value[4].img}></ItemValue>
      <ItemValue title={value[5].title} amount={value[5].amount} description={value[5].description} img={value[5].img}></ItemValue>
    </div>
  );
}

export default App;
