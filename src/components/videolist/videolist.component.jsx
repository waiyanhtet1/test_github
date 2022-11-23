import "./videolist.css";
import React from "react";

const VideoListCardComponent = ({ title, image, onSelect }) => {
  return (
    <div className="video-list-card">
      <img src={image} alt="" className="video-list-card--image" />
      <p className="video-list-card--title">{title}</p>
    </div>
  );
};

export default VideoListCardComponent;
