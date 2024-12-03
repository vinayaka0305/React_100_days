import React, { useState } from "react";

const Example = () => {
  const [categories, setCatgories] = useState([
    {
      name: "Friuts",
      items: ["orange", "kiwi", "dragon"],
    },
    {
      name: "Vegetables",
      items: ["patato", "tamato", "onion"],
    },
    {
      name: "Dairy",
      items: ["milk", "buttermiik", "cheese"],
    },
  ]);
  const [activeCategory, setActiveCategory] = useState("");
  const [newItem, setNewItem] = useState("");

  const handleAddTask = () => {
    setCatgories((prevCategory) =>
      prevCategory.map((cat) =>
        cat.name === activeCategory
          ? { ...cat, items: [...cat.items, newItem] }
          : cat
      )
    );
    setNewItem("");
  };

  return (
    <div id="main">
      <h2>Shopping list</h2>
      <div className="categories">
        {categories.map((cat) => (
          <div
            onClick={() => setActiveCategory(cat.name)}
            className={`category ${
              activeCategory === cat.name ? "active" : ""
            }`}
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
            type="text"
            className="input-field"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="add-btn" onClick={handleAddTask}>
            add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Example;
