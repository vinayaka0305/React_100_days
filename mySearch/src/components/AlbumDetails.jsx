import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayerBtm from "./PlayerBtm";

const AlbumDetails = () => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    fetchAlbumResult();
  }, [id]);

  const fetchAlbumResult = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/music/album/${id}`,
        {
          headers: {
            projectId: "6marrwzascw6",
          },
        }
      );
      console.log(response.data.data);
      setAlbumData(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <>
      <div className="container-l">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={albumData?.image}
            className="card-img-top"
            alt={albumData?.title}
          />
          <div className="card-body">
            <h5 className="card-title">{albumData?.title}</h5>
            <p className="card-text">{albumData?.description}</p>
          </div>
        </div>
        <div className="list-container">
          <ul className="list-group list-group-flush">
            {albumData?.songs?.map((obj, index) => (
              <li
                key={index}
                className="list-group-item"
              >
                {obj.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PlayerBtm data={albumData} isAlbum={true} />
    </>
  );
};

export default AlbumDetails;
