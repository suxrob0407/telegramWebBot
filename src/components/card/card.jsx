import { useState } from "react";
import Buttun from "../buttun/buttun";
import "./card.css";
export default function Card(props) {
  const { item, onAddItem,onRemoveItem } = props;
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(prev => prev + 1);
    onAddItem(item);
  }
  
  const handleDecrement = () => {
    if(count > 0) {
      setCount(prev => prev - 1);
    }
    onRemoveItem(item);
  }
  return (
    <div className="card">
      <span className={`${count !== 0 ? "card__badge" : "card__badge-hidden"}`}>{count}</span>
      <div className="image__container">
        <img
          src={item.Image}
          alt={item.title}
          width={"100%"}
          height={"230px"}
        />
      </div>
      <div className="card__body">
        <h2 className="card__title">{item.title}</h2>
        <div className="card__price">
          {item.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>
      <div className="hr"></div>
      <div className="btn__container">
        <Buttun title={"+"} type="add" onClick={handleIncrement} />
        <Buttun title={"-"} type="remove" onClick={handleDecrement} />
      </div>
    </div>
  );
}
