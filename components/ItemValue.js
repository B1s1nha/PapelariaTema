import "./ItemValue.css";

function ItemValue(props) {
  return (
    <div className="item-value">
      <div className="item-value__description">
        <h2>
          {props.title}
          <br></br>
          <div className="item-value__ds">{props.description}</div>
          <div>
          <br></br>
          <img src={props.img} alt = "" height="320" width="420"></img>
        </div>
        </h2>
        
        <div className="item-value__price">${props.amount}<div><br></br>BUY NOW</div></div>
      </div>
    </div>
  );
}

export default ItemValue;
