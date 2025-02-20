import { page_size } from "./Constants";
// import ProductCard from "./components/ProductCard.js";
// import Pagination from "./components/Pagination.js";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrpage] = useState(0);
  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=200`);
    const data = await response.json();
    setProducts(data.products);
  };

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / page_size);
  const start = currPage * page_size;
  const end = start + page_size;

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (n) => {
    setCurrpage(n);
  };

  const goToPrevPage = () => {
    setCurrpage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    setCurrpage((prev) => prev + 1);
  };

  return !products.length ? (
    <h2>No products found</h2>
  ) : (
    <div className="main">
       <h1>Pagination</h1>
      <div className="p-container">
        <div className="p1-container">
          {products.slice(start, end).map((p) => (
            <ProductCard key={p.id} thumbnail={p.thumbnail} title={p.title} />
          ))}
        </div>
        <Pagination
          goToPrevPage={goToPrevPage}
          goToNextPage={goToNextPage}
          handlePageChange={handlePageChange}
          currPage={currPage}
          noOfPages={noOfPages}
        />
      </div>
    </div>
  );
}
