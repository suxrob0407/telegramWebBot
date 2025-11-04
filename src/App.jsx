import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/card";
import Cart from "./components/cart/cart";
import { getData } from "./constants/getData";
const getDataTitel = getData();

const tg = window.Telegram.WebApp;

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
   tg.ready();
  }, []);
  const onAddItem = item => {
		const existItem = cartItems.find(c => c.id == item.id);

		if (existItem) {
			const newData = cartItems.map(c =>
				c.id == item.id
					? { ...existItem, quantity: existItem.quantity + 1 }
					: c
			);
			setCartItems(newData);
		} else {
			const newData = [...cartItems, { ...item, quantity: 1 }];
			setCartItems(newData);
		}
	};
  const onRemoveItem = item => {
		const existItem = cartItems.find(c => c.id == item.id);

		if (existItem?.quantity === 1) {
			const newData = cartItems.filter(c => c.id !== existItem.id);
			setCartItems(newData);
		} else {
			const newData = cartItems.map(c =>
				c.id === existItem.id
					? { ...existItem, quantity: existItem.quantity - 1 }
					: c
			);
			setCartItems(newData);
		}
	};
  const onCheckout = () => {
    tg.MainButton.text("Sotib olish :");
    tg.MainButton.show();
  }
  return (
    <>
      <h1 className="heading">Telgram Bot</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className="cards__container">
        {getDataTitel.map((item) => (
          <Card
            key={item.id}
            item={item}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </>
  );
}
