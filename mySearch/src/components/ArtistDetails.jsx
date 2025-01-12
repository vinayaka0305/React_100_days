import React, { useEffect, useState } from "react";
import PlayerBtm from "./PlayerBtm";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const ArtistDetails = () => {
  const location = useLocation();
  const{updatedArtistData} = location.state || {};
  const[artistSongs,setArtistSongs] = useState([]);

  // console.log(updatedArtistData);

  useEffect(()=>{
    if(updatedArtistData.songs){
      fetchArtistSongs();
    }
  },[updatedArtistData.songs])

  const fetchArtistSongs = async()=>{
    try {
      const songsList = updatedArtistData.songs.map((id)=>
        axios.get(`https://academics.newtonschool.co/api/v1/music/song/${id}`,{
          headers:{
            projectId: "6marrwzascw6",
          }
        })
      )
      const responseOFAllSongs = await axios.all(songsList);
      console.log(responseOFAllSongs);
      const songs = responseOFAllSongs.map((response)=>response.data);
      setArtistSongs(songs)
    } catch (error) {
      console.log(error.message)
    }
  }

  const updatedData = {...updatedArtistData,songs:artistSongs}
  console.log(updatedData);

  return (
    <>
      <div className="container-l">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={updatedArtistData?.image}
            className="card-img-top"
            alt={updatedArtistData?.name}
          />
          <div className="card-body">
            <h5 className="card-title">{updatedArtistData?.name}</h5>
            <p className="card-text">{updatedArtistData?.description}</p>
          </div>
        </div>
        <div className="list-container">
          <ul className="list-group list-group-flush">
            {artistSongs.map((obj, index) => (
              <li key={index} className="list-group-item">
                {obj.data.title}
              </li>
            ))}
          </ul>
        </div>
        <h1>hello</h1>
      </div>

      <PlayerBtm data={updatedData} isAlbum={true}/>
    </>
  );
};

export default ArtistDetails;
