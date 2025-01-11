import React, { useEffect, useState } from "react";
import PlayerBtm from "./PlayerBtm";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [songDetails, setSongDetails] = useState();
    console.log(id);


  useEffect(()=>{
    fetchDetails();
  },[id])

  const fetchDetails = async () => {
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/music/song/${id}`,
      {
        headers: {
          projectId: "6marrwzascw6",
        },
      }
    );
    setSongDetails(response.data.data);
  };
  return (
    <div>
      <PlayerBtm data={songDetails}/>
    </div>
  );
};

export default Details;
