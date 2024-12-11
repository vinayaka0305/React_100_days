import React, { useEffect, useState } from "react";

const Products = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addToFav = (id) => {
    const favProducts = JSON.parse(localStorage.getItem("favProducts")) || [];
    const product = products.find((product) => product.id === id);

    if (!favProducts.find((product) => product.id === id)) {
      favProducts.push(product);
      localStorage.setItem("favProducts", JSON.stringify(favProducts));
    }
  };

  return (
    <div>
      <h2>products</h2>
      {!loading &&
        products.length > 0 &&
        products.map((product, index) => (
          <div key={index}>
            <img src={product.image} />
            <div>
              <h3>{product.title}</h3>
              <p>Price : &#8377;{product.price}</p>
              <button onClick={() => addToFav(product.id)}>
                Add to favorite
              </button>
            </div>
          </div>
        ))}
      {loading && <p>loading...</p>}
    </div>
  );
};

export default Products;
