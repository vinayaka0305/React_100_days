import React, { useEffect, useRef, useState } from "react";

const PlayerBtm = ({ data, isAlbum = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  // Play/Pause Toggle
  const toggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Go to the previous track
  const handlePrev = () => {
    if (isAlbum && currentTrackIndex > 0) {
      setCurrentTrackIndex((prev) => prev - 1);
    }
  };

  // Go to the next track
  const handleNext = () => {
    if (isAlbum && data?.songs && currentTrackIndex < data.songs.length - 1) {
      setCurrentTrackIndex((prev) => prev + 1);
    }
  };

  // Update audio source when the track changes
  useEffect(() => {
    if (isAlbum && data?.songs) {
      const currentSong = data.songs[currentTrackIndex];
      const audioUrl =
        currentSong?.audio_url || currentSong?.data?.audio_url || "";

      if (audioRef.current && audioUrl) {
        audioRef.current.src = audioUrl;
        if (isPlaying) {
          audioRef.current.play().catch((error) => {
            console.error("Error playing audio:", error);
          });
        }
      }
    }
  }, [currentTrackIndex, isAlbum, data?.songs, isPlaying]);

  // Automatically pause when the component unmounts
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
        audio.src = "";
      }
    };
  }, []);

  return (
    <div className="btm-container">
      {/* Song/Album Details */}
      <div className="btm-details-cont">
        <img
          src={
            isAlbum
              ? data?.songs?.[currentTrackIndex]?.thumbnail ||
                data?.image
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
          onClick={isAlbum ? handlePrev : null}
        ></i>
        <i
          className={`bi fs-2 ${isPlaying ? `bi-pause` : `bi-play`} `}
          onClick={toggle}
        ></i>
        <i
          className={`bi bi-skip-end fs-3 ${isAlbum ? "" : "disabled"}`}
          onClick={isAlbum ? handleNext : null}
        ></i>
      </div>

      {/* Audio Player */}
      <audio ref={audioRef} src={isAlbum ? null : data?.audio_url} />
    </div>
  );
};

export default PlayerBtm;
