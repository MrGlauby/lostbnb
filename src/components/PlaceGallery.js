import React from "react";
import "../styles/PlaceGallery.css";

import img0 from "../img/starfull.png";
import imgArrow from "../img/arrow.png";
import heart from "../img/heart.png";

import img1 from "../img/placeDetail/adam.jpg";
import img2 from "../img/placeDetail/alex.jpg";
import img3 from "../img/placeDetail/deric.png";
import img4 from "../img/placeDetail/karl.jpg";
import img5 from "../img/placeDetail/michael.jpg";

export default function PlaceGallery() {
  return (
    <div>
      <div className="warpGallery">

        <h2>[Idylisches Haus am Meer]</h2>

          <div className="navigation">
              <ul className="leftNav">
                <img className="sternchen" src={img0} alt="stern"/>
                <li className="interLeft"><a href="#">Sterne</a></li>
                <li className="interLeft"><a href="#">Bewertungen</a></li>
                <li className="interLeft"><a href="#">Svenborg, Dänemark</a></li>
              </ul>       

              <ul className="rightNav">
                <div>
                  <img className="arrow" src={imgArrow}/>
                </div>
                <li className="interRight"><a href="#">Teilen </a></li>
                <li className="interRight arrow"><a href="#">Speichern</a></li>
                <img className="heart" src={heart}/>
              </ul>         
          </div>

        {/* gallery */}
        <div className="gallery">
          <img className="mainPic" src={img1} alt="bild1" />

          <div className="smallPics">
            <div className="sideOver">
              <img className="makeHover" src={img2} alt="bild2" />
              <img className="makeHover" src={img3} alt="bild3" />
            </div>
            <div className="sideUnder">
              <img className="makeHover" src={img4} alt="bild4" />
              <img className="makeHover" src={img5} alt="bild5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
