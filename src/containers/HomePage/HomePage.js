import React from "react";
import Taiwan from "../../assets/imgs/taiwan-yellow-map.jpg";
// import YouTube from "react-youtube";
import "./HomePage.css";
import MapCursors from "../MapCursors/MapCursors";


const homePage = () => {

  
  // const _onReady = event => {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // };

  return (
    <div className="Home">
      <div className="Banner">
        <img id="map" src={Taiwan} alt="Taiwan" />
        <div className="HalfScreen">
          <MapCursors/>
        </div>
        <div className="BannerTextContainer">
          <div className="CenterText">
            <div className="BannerText">Welcome to <br></br>Emily's Hometown</div>
            <div className="BannerText" id="Taiwan">Taiwan</div>
          </div>
        </div>
      </div>
      {/* 
        <div className="VideoPlayer">
          <YouTube
            videoId="iXDnFYu91vY"
            opts={{
              playerVars: {
                autoplay: 0
              }
            }}
            onReady={_onReady}
          />
        </div> 
      </div>
      */}

    </div>
  );
};

export default homePage;
