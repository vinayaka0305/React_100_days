import React from "react";
import useFetch from "./useFetch";

const FetchHome = () => {
  const { data, loading, error } = useFetch(
    `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=1`
  );
 

  if (error) {
    return <div>Error:{error}</div>;
  }
  console.log(data);
  return (
    <>
    {loading && <p>loading....</p>}
      {!loading && (
        <div id="main">
          <h1>Products</h1>
          <ul>
            {data && data.map((obj) => <li key={obj.id}>{obj.title}</li>)}
          </ul>
        </div>
      )}
    </>
  );
};

export default FetchHome;
