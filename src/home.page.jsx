import "./home.css";
import React, { useState } from "react";
import SearchBarComponent from "./components/searchBar/searchbar.component";
import VideoDetailComponent from "./components/videodetail/videodetail.component";
import VideoListCardComponent from "./components/videolist/videolist.component";
import { getYoutubeVideo } from "./fetchdata";

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});

  const searchSubmitHandler = async (search) => {
    const data = await getYoutubeVideo(search);
    console.log(data);
    const videos = data.items.map((video) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      channel: video.snippet.channelTitle,
      image: video.snippet.thumbnails.medium.url,
    }));
    setVideos(videos);
    setSelectedVideo(videos[0]);
  };

  /*
  {
  "kind": "youtube#searchResult",
  "etag": "ltVQhHGMfZUocPbeHsx5UyR3wIQ",
  "id": {
    "kind": "youtube#video",
    "videoId": "8Qn_spdM5Zg"
  },
  "snippet": {
    "publishedAt": "2019-10-22T01:49:50Z",
    "channelId": "UCZGYJFUizSax-yElQaFDp5Q",
    "title": "Star Wars: The Rise of Skywalker | Final Trailer",
    "description": "The saga will end, the story lives forever. Watch the final trailer for #StarWars: #TheRiseOfSkywalker in theaters December 20.",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/8Qn_spdM5Zg/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/8Qn_spdM5Zg/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/8Qn_spdM5Zg/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "Star Wars",
    "liveBroadcastContent": "none",
    "publishTime": "2019-10-22T01:49:50Z"
  }
}
  */

  return (
    <>
      <SearchBarComponent onSubmit={searchSubmitHandler} />
      <div className="home-wrapper">
        <VideoDetailComponent {...selectedVideo} />
        <div className="video-list-container">
          {videos.map((video) => (
            <VideoListCardComponent {...video} onSelect={setSelectedVideo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
