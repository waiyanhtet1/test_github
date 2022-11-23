import "./home.css";
import React from "react";
import SearchBarComponent from "./components/searchBar/searchbar.component";
import VideoDetailComponent from "./components/videodetail/videodetail.component";

const HomePage = () => {
  return (
    <>
      <SearchBarComponent />
      <div className="home-wrapper">
        <VideoDetailComponent
          id="8Qn_spdM5Zg"
          title="Star Wars: The Rise of Skywalker | Final Trailer"
          description="The saga will end, the story lives forever. Watch the final trailer for #StarWars: #TheRiseOfSkywalker in theaters December 20."
          channel="Star Wars"
        />
        <VideoDetailComponent
          id="8Qn_spdM5Zg"
          title="Star Wars: The Rise of Skywalker | Final Trailer"
          description="The saga will end, the story lives forever. Watch the final trailer for #StarWars: #TheRiseOfSkywalker in theaters December 20."
          channel="Star Wars"
        />
      </div>
    </>
  );
};

export default HomePage;
