import React, { useState } from 'react';
import '../assets/css/menu.css';

import espressoImg from '../assets/images/menu/espresso.jpg';
import cappuccinoImg from '../assets/images/menu/cappuccino.jpg';
import coldLatteImg from '../assets/images/menu/coldlatte.jpg';
import mochaImg from '../assets/images/menu/mocha.jpg';
import coldBrewImg from '../assets/images/menu/coldbrew.jpg';
import matchaImg from '../assets/images/menu/matcha.jpg';
import hotChocolateImg from '../assets/images/menu/hotchocolate.jpg';
import teaImg from '../assets/images/menu/tea.jpg';

function Menu() {
  const menuItems = [
    { name: "Espresso", price: "₹150", description: "Strong and bold shot of coffee.", image: espressoImg },
    { name: "Cappuccino", price: "₹200", description: "Espresso with steamed milk foam.", image: cappuccinoImg },
    { name: "Cold Latte", price: "₹220", description: "Smooth blend of espresso and milk.", image: coldLatteImg },
    { name: "Mocha", price: "₹250", description: "Chocolate-flavored espresso coffee.", image: mochaImg },
    { name: "Cold Brew", price: "₹180", description: "Chilled and smooth brewed coffee.", image: coldBrewImg },
    { name: "Matcha", price: "₹170", description: "Espresso diluted with hot water.", image: matchaImg },
    { name: "Hot Chocolate", price: "₹170", description: "Espresso diluted with hot water.", image: hotChocolateImg },
    { name: "Tea", price: "₹170", description: "Espresso diluted with hot water.", image: teaImg },
  ];
  
  const [quantities, setQuantities] = useState(Array(menuItems.length).fill(0));

  const increment = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  return (
    <div className="menu-page">
      <h1>Our Coffee Menu</h1>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="item-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
            <div className="item-price">{item.price}</div>

            <div className="quantity-selector">
              <button onClick={() => decrement(index)}>-</button>
              <span>{quantities[index]}</span>
              <button onClick={() => increment(index)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
