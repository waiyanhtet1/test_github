import "./videolist.css";
import React from "react";

const VideoListCardComponent = ({
  id,
  title,
  channel,
  description,
  image,
  onSelect,
}) => {
  return (
    <div
      className="video-list-card"
      onClick={() => onSelect({ id, title, channel, description })}
    >
      <img src={image} alt="" className="video-list-card--image" />
      <p className="video-list-card--title">{title}</p>
    </div>
  );
};

export default VideoListCardComponent;
