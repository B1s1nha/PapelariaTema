import "./ItemValue.css";

function ItemValue(props){

    return (
        <div>
            <h2>{props.title}</h2>
            <div>${props.amount}</div>
        </div>
    );
}

export default ItemValue;