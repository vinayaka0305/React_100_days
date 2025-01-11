import React, { useContext, useEffect } from "react";
import { MusicProvider } from "../context/MusicContext";
import axois from "axios";

const Search = () => {
  const { searchValue } = useContext(MusicProvider);

  useEffect(() => {
    if (searchValue) {
      fetchSearchResult();
    }
  }, [searchValue]);

  const fetchSearchResult = async () => {
    try {
      const response = await axois.get(
        `https://academics.newtonschool.co/api/v1/music/song?search={"title":"${searchValue}"}`,
        {
          headers: {
            projectId: "6marrwzascw6",
          },
        }
      );
      console.log(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return <div>Hi</div>;
};

export default Search;
