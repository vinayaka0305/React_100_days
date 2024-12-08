import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const[loading,setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setLoading(true)
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // console.log(response);
        setProducts(response.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleFavorite = (id) => {
    const favoriteProducts =
      JSON.parse(localStorage.getItem("favoriteProducts")) || [];
    const product = products.find((product) => product.id === id);

    if (!favoriteProducts.find((favProduct) => favProduct.id === id)) {
      favoriteProducts.push(product);
      localStorage.setItem(
        "favoriteProducts",
        JSON.stringify(favoriteProducts)
      );
    }
  };
  return (
    <div className="product-component">
      <h2>Products</h2>
      {!loading && products.map((product) => (
        <div key={product.id} className="product">
          <Link to={`/products/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
          </Link>

          <div className="product-details">
            <h4>{product.title}</h4>
            <p>Price: &#8377;{product.price}</p>
            <button onClick={() => handleFavorite(product.id)}>
              Add to Favorite
            </button>
          </div>
        </div>
      ))}
      {loading && <p>loading....</p>}
    </div>
  );
};

export default Products;
