import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="product-component">
      <h2>Single Product ID : {product?.id}</h2>
      {product ? (
        <div className="product">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />

          <div className="product-details">
            <h4>{product.title}</h4>
            <h4>{product.description}</h4>
            <p>Price: &#8377;{product.price}</p>
          </div>
        </div>
      ) : (
        <p>loading....</p>
      )}
    </div>
  );
};

export default SingleProduct;
