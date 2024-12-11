import React, { useEffect, useState } from "react";

const Favproduct = () => {
  const [product, setProduct] = useState([]);

  const products = JSON.parse(localStorage.getItem("favProducts"));

  useEffect(() => {
    setProduct(products);
  }, []);

  const removeFav = (id) => {
    const updateProducts = product.filter((item) => item.id !== id);
    setProduct(updateProducts);
    localStorage.setItem("favProducts", JSON.stringify(updateProducts));
  };

  return (
    <div>
      <h2>Favorite Products</h2>
      {product.length>0 ? (
        product.map((item, index) => (
          <div key={index}>
            <img src={item.image} />
            <div>
              <h2>{item.title}</h2>
              <p>Price: &#8377;{item.price}</p>
              <h3>{item.description}</h3>
              <button onClick={() => removeFav(item.id)}>
                Remove from favorite
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>no product found</p>
      )}
    </div>
  );
};

export default Favproduct;
