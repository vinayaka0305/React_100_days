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
  const [newItem, setNewItem] = useState("");

  const handleSubmit = () => {
    if (!activeCategory) {
      alert("please select a category first");
      return;
    }

    if (newItem.trim() === "") {
      alert("empty item are not add");
      return;
    }

    setCategories((prevCat) =>
      prevCat.map((cat) =>
        cat.name === activeCategory
          ? { ...cat, items: [...cat.items, newItem] }
          : cat
      )
    )
    setNewItem("")
  };

  return (
    <div id="main">
      <h1>Shopping List</h1>
      <div className="categories">
        {categories.map((cat) => (
          <div
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
        {categories
          .find((cat) => cat.name === activeCategory)
          ?.items.map((item) => (
            <div className="item">{item}</div>
          ))}
        <div className="add-item-div">
          <input
            className="input-field"
            type="text"
            placeholder="add new item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={handleSubmit} className="add-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingLIst;
