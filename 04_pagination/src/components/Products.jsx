import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=200`);
      const data = await response.json();
      // console.log(data.products);
      setData(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const totalProducts = data.length;
  //   console.log(totalProducts);
  const page_size = 10;
  const numberOfPages = Math.ceil(totalProducts / page_size);
  const start = currPage * page_size;
  const end = start + page_size;

  const handlePageChange = (n) => {
    setCurrPage(n);
  };

  const handleNextPage = () => {
    setCurrPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrPage((prev) => prev - 1);
  };

  return !data.length ? (
    <h2>No Products</h2>
  ) : (
    <div>
      <h1>Pagination</h1>
      <div className="pagination-container">
        <button onClick={handlePrevPage} disabled={currPage === 0}>
          ⬅
        </button>

        {[...Array(numberOfPages).keys()].map((n) => (
          <button
            className={`page-number ${n===currPage?"activePage":""}`}
            key={n}
            onClick={() => handlePageChange(n)}
          >
            {n+1}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={currPage === numberOfPages - 1}
        >
          ➡
        </button>
      </div>
      <div className="product-container">
        <div className="productcard-container">
          {data.slice(start, end).map((product) => (
            <ProductCard
              key={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
