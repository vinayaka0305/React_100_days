import { useState } from "react";
import "./shopping.css";

const ShoppingLIst = () => {
  const [categories, setCategories] = useState([
    {
      name: "Fruits",
      items: ["Apple", "Banana", "Mango"],
    },
    {
      name: "Vegetables",
      items: ["Carrot", "Tomato", "Broccoli"],
    },
    {
      name: "Dairy",
      items: ["Milk", "Cheese", "Yogurt"],
    },
  ]);

  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div id="main">
      <h1>Shopping List</h1>
      <div className="categories">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`category ${
              activeCategory === cat.name ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat.name)}
          >
            {cat.name}
          </div>
        ))}
      </div>
      <div className="items">
        <div className="item">item name</div>
        <div className="add-item-div">
          <input
            className="input-field"
            type="text"
            placeholder="add new item"
          />
          <button className="add-btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingLIst;
