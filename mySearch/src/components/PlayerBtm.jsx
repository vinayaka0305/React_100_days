import React, { useEffect, useRef, useState } from "react";

const PlayerBtm = ({ data, isAlbum = false }) => {
  // console.log(isAlbum);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  // Handle Play/Pause Toggle
  const toggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Move to the previous track (if applicable)
  const handlePrev = () => {
    if (isAlbum && currentTrackIndex > 0) {
      setCurrentTrackIndex((prev) => prev - 1);
    }
  };

  // Move to the next track (if applicable)
  const handleNext = () => {
    if (isAlbum && data?.songs && currentTrackIndex < data.songs.length - 1) {
      setCurrentTrackIndex((prev) => prev + 1);
    }
  };

  // Update the audio source whenever the current track changes
  useEffect(() => {
    if (isAlbum) {
      if (data?.songs && data.songs[currentTrackIndex]?.audio_url) {
        audioRef.current.src = data.songs[currentTrackIndex]?.audio_url;
        if (isPlaying) audioRef.current.play();
      }
    }
  }, [currentTrackIndex, isAlbum, data?.songs, isPlaying]);

  return (
    <>
      <div className="btm-container">
        {/* Song/Album Details */}
        <div className="btm-details-cont">
          <img
            src={
              isAlbum
                ? data?.songs?.thumbnail || data?.image
                : data?.thumbnail || data?.image
            }
            alt={
              isAlbum
                ? data?.songs?.[currentTrackIndex]?.title || data?.title
                : data?.title
            }
          />
          <h3>
            {isAlbum
              ? data?.songs?.[currentTrackIndex]?.title || data?.title
              : data?.title}
          </h3>
        </div>

        {/* Playback Controls */}
        <div className="btns-container">
          <i
            className={`bi bi-skip-start fs-3 ${isAlbum ? "" : "disabled"}`}
            onClick={handlePrev}
          ></i>
          <i
            className={`bi fs-2 ${isPlaying ? `bi-pause` : `bi-play`} `}
            onClick={toggle}
          ></i>
          <i
            className={`bi bi-skip-end fs-3 ${isAlbum ? "" : "disabled"}`}
            onClick={handleNext}
          ></i>
        </div>
      </div>
      <audio ref={audioRef} src={isAlbum ? null : data?.audio_url} />
    </>
  );
};

export default PlayerBtm;
