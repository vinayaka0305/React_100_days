import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const storedFavProducts =
      JSON.parse(localStorage.getItem("favoriteProducts")) || [];
    setFavoriteProducts(storedFavProducts);
  }, []);

  const removeFavoritesProduct = (id) => {
    const updateFavProducts = favoriteProducts.filter((product)=>product.id !== id);
    setFavoriteProducts(updateFavProducts);
    localStorage.setItem('favoriteProducts',JSON.stringify(updateFavProducts))
  };

  return (
    <div className="fav-component">
      <h2>Favorites</h2>
      {favoriteProducts.length > 0 ?(favoriteProducts.map((product) => (
          <div key={product.id} className="fav-product">
            <img
              src={product.image}
              alt={product.title}
              className="fav-product-image"
            />
            <div className="fav-product-details">
              <h4>{product.title}</h4>
              <p>Price: &#8377;{product.price}</p>
              <button onClick={() => removeFavoritesProduct(product.id)}>
                Remove from Favorites
              </button>
            </div>
          </div>
        ))):(
          <p className="favorite-para"> No favorite product found</p>
        )
}
    </div>
  );
};

export default Favorites;
