import { totalPrice } from '../../units/total-price';
import Buttun from '../buttun/buttun'
import './cart.css'
export default function Cart(props) {
  const { cartItems, onCheckout } = props;  
  return (
    <div className="cart__container">
      <p>Umumiy narx :{totalPrice(cartItems).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}</p>
      <Buttun title={`${cartItems.length > 0 ? "Buyurtma" : "To'lov qilish"}`} disabled={cartItems.length === 0 ? true : false} type="checkout" onClick={onCheckout} />
    </div>
  );
}
