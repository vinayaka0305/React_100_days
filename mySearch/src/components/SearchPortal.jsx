import React, { useContext, useEffect, useState } from "react";
import Portal from "../portal/Portal";
import { MusicProvider } from "../context/MusicContext";
import axios from "axios";
import { Link, Links, useNavigate } from "react-router-dom";

const SearchPortal = () => {
  const [content, setContent] = useState("");
  const { searchValue, setShowSeachPortal } = useContext(MusicProvider);
  const [songData, setSongData] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const [artistData, setArtistData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updatedArtistData, setUpdatedArtistData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setContent("This is a search portal");
    if (searchValue) {
      fetchSearchResultOfSongs();
      fetchSearchResultOfAlbums();
      fetchSearchResultOfArtists();
    }
  }, [searchValue]);

  const fetchSearchResultOfSongs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/music/song?search={"title":"${searchValue}"}`,
        {
          headers: {
            projectId: "6marrwzascw6",
          },
        }
      );
      setSongData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchResultOfAlbums = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/music/album?search={"title":"${searchValue}"}`,
        {
          headers: {
            projectId: "6marrwzascw6",
          },
        }
      );
      setAlbumData(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchResultOfArtists = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/music/artist?search={"name":"${searchValue}"}`,
        {
          headers: {
            projectId: "6marrwzascw6",
          },
        }
      );
      setArtistData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSongClick = (id) => {
    // console.log(id);
    navigate(`/song/${id}`);
  };
  const handleAlbumClick = (id) => {
    // console.log(id);
    navigate(`/album/${id}`);
    setShowSeachPortal(false);
  };

  // function for selecting an artist
  const handlerArtistSelection = (obj) => {
    const updatedList = {
      key: obj._id,
      id: obj._id,
      thumbnail: obj.image,
      title: obj.title,
      artist:
        obj.artist && obj.artist[0] && obj.artist[0].name
          ? obj.artist[0].name
          : "",
      description:
        obj.artist && obj.artist[0] && obj.artist[0].description
          ? obj.artist[0].description
          : "",
      audio_url: obj.audio_url,
    };
    setUpdatedArtistData(updatedList); //update selected artist data
    // console.log(updatedList,"artist data")
    setShowSeachPortal(false);
  };

  return (
    <Portal>
      {/*songs data */}
      <div class="container">
        {!loading ? (
          songData.length > 0 ? (
            <div
              id="songCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <h2 id="results">songs results</h2>
              <div className="carousel-inner">
                {songData
                  .reduce((result, item, index) => {
                    const groupIndex = Math.floor(index / 6); // Group by 4 images
                    if (!result[groupIndex]) {
                      result[groupIndex] = [];
                    }
                    result[groupIndex].push(item);
                    return result;
                  }, [])
                  .map((group, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="d-flex justify-content-center">
                        {group.map((obj) => (
                          <div
                            className="p-2 "
                            key={obj.id}
                            style={{
                              width: "150px",
                              height: "150px",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={obj.thumbnail}
                              className="d-block w-100"
                              alt={obj.title}
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                                cursor: "pointer",
                              }}
                              onClick={() => handleSongClick(obj._id)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#songCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#songCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          ) : (
            <p>No results found for "{searchValue}"</p>
          )
        ) : (
          <p>Loading...</p>
        )}

        {/*ablums data */}
        {!loading ? (
          albumData.length > 0 ? (
            <div
              id="albumCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <h2 id="results">album results</h2>
              <div className="carousel-inner">
                {albumData
                  .reduce((result, item, index) => {
                    const groupIndex = Math.floor(index / 6); // Group by 4 images
                    if (!result[groupIndex]) {
                      result[groupIndex] = [];
                    }
                    result[groupIndex].push(item);
                    return result;
                  }, [])
                  .map((group, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="d-flex justify-content-center">
                        {group.map((obj) => (
                          <div
                            className="p-2 "
                            key={obj.id}
                            style={{
                              width: "150px",
                              height: "150px",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={obj.image}
                              className="d-block w-100"
                              alt={obj.title}
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                                cursor: "pointer",
                              }}
                              onClick={() => handleAlbumClick(obj._id)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#albumCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#albumCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          ) : (
            <p>No results found for "{searchValue}"</p>
          )
        ) : (
          <p>Loading...</p>
        )}

        {/*artists data */}
        {!loading ? (
          artistData.length > 0 ? (
            <div
              id="artistCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <h2 id="results">artist results</h2>
              <div className="carousel-inner">
                {artistData
                  .reduce((result, item, index) => {
                    const groupIndex = Math.floor(index / 6); // Group by 4 images
                    if (!result[groupIndex]) {
                      result[groupIndex] = [];
                    }
                    result[groupIndex].push(item);
                    return result;
                  }, [])
                  .map((group, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="d-flex justify-content-center">
                        {group.map((obj) => (
                          <Link
                            to={`artist/${obj._id}`}
                            state={{ updatedArtistData: obj }}
                          >
                            <div
                              className="p-2 "
                              key={obj.id}
                              style={{
                                width: "150px",
                                height: "150px",
                                overflow: "hidden",
                              }}
                              onClick={() => handlerArtistSelection(obj)}
                            >
                              <img
                                src={obj.image}
                                className="d-block w-100"
                                alt={obj.title}
                                style={{
                                  objectFit: "cover",
                                  width: "100%",
                                  height: "100%",
                                  cursor: "pointer",
                                }}
                              />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#artistCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#artistCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          ) : (
            <p>No results found for "{searchValue}"</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Portal>
  );
};

export default SearchPortal;
