import React, { useContext } from "react";
import { CartContext } from "../Components/CartComponent.jsx";
import "../assets/css/cart.css";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const sendWhatsAppOrder = () => {
    const message = cart
      .map((i) => `- ${i.quantity}x ${i.name} = ₹${i.price * i.quantity}`)
      .join("\n");

    const text = `Hello! I’d like to order:\n${message}\n\nTotal = ₹${total}`;
    window.open(`https://wa.me/917986779012?text=${encodeURIComponent(text)}`);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span className="item-name">{item.name}</span>
                <div className="item-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
                </div>
                <span className="item-total">₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <h2 className="cart-total">Total: ₹{total}</h2>
          <button onClick={sendWhatsAppOrder} className="checkout-btn">
            Checkout via WhatsApp
          </button>
          <button onClick={clearCart} className="clear-btn">
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
