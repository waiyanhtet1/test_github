import "./videodetail.css";
import React from "react";

const VideoDetailComponent = ({ id, title, channel, description }) => {
  return (
    <div className="video-detail">
      <iframe
        className="video-detail--frame"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameborder="0"
      />
      <div className="video-detail--container">
        <h2 className="video-detail--title">{title}</h2>
        <h3 className="video-detail--subtitle">{channel}</h3>
        <p className="video-detail--description">{description}</p>
      </div>
    </div>
  );
};

export default VideoDetailComponent;
