import React, { useContext } from 'react';
import '../assets/css/menu.css';
import { CartContext } from "../Components/CartComponent.jsx";

import espressoImg from '../assets/images/menu/espresso.jpg';
import cappuccinoImg from '../assets/images/menu/cappuccino.jpg';
import coldLatteImg from '../assets/images/menu/coldlatte.jpg';
import mochaImg from '../assets/images/menu/mocha.jpg';
import coldBrewImg from '../assets/images/menu/coldbrew.jpg';
import matchaImg from '../assets/images/menu/matcha.jpg';
import hotChocolateImg from '../assets/images/menu/hotchocolate.jpg';
import teaImg from '../assets/images/menu/tea.jpg';

function MenuPage() {
  const { cart, addToCart, updateQuantity } = useContext(CartContext);

  const menuItems = [
    { id: 1, name: "Espresso", price: 150, description: "Strong and bold shot of coffee.", image: espressoImg },
    { id: 2, name: "Cappuccino", price: 200, description: "Espresso with steamed milk foam.", image: cappuccinoImg },
    { id: 3, name: "Cold Latte", price: 220, description: "Smooth blend of espresso and milk.", image: coldLatteImg },
    { id: 4, name: "Mocha", price: 250, description: "Chocolate-flavored espresso coffee.", image: mochaImg },
    { id: 5, name: "Cold Brew", price: 180, description: "Chilled and smooth brewed coffee.", image: coldBrewImg },
    { id: 6, name: "Matcha", price: 170, description: "Espresso diluted with hot water.", image: matchaImg },
    { id: 7, name: "Hot Chocolate", price: 170, description: "Espresso diluted with hot water.", image: hotChocolateImg },
    { id: 8, name: "Tea", price: 170, description: "Espresso diluted with hot water.", image: teaImg },
  ];

  // Helper to get quantity of an item from cart
  const getQuantity = (id) => {
    const item = cart.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="menu-page">
      <h1>Our Coffee Menu</h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="item-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
            <div className="item-price">₹{item.price}</div>

            <div className="quantity-selector">
              <button onClick={() => updateQuantity(item.id, getQuantity(item.id) - 1)}>-</button>
              <span>{getQuantity(item.id)}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
