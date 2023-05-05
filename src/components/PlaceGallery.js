import React from "react";
import "../styles/PlaceGallery.css";

import img1 from "../img/placeDetail/adam.jpg";
import img2 from "../img/placeDetail/alex.jpg";
import img3 from "../img/placeDetail/deric.png";
import img4 from "../img/placeDetail/karl.jpg";
import img5 from "../img/placeDetail/michael.jpg";

export default function PlaceGallery() {
  return (
    <div>
      <div className="warpGallery">
        <p>PlaceGallery</p>

        <input type="text" placeholder="Search.." />

        <h2>[Idylisches Haus am Meer]</h2>

          <div className="navigation">
              <ul className="leftNav">
                <li><a href="#">Sterne</a></li>
                <li><a href="#">Bewertungen</a></li>
                <li><a href="#">Svenborg, Dänemark</a></li>
              </ul>       

              <ul className="rightNav">
                <li><a href="#">Teilen</a></li>
                <li><a href="#">Speichern</a></li>
              </ul>         
        </div>

        {/* gallery */}
        <div className="gallery">
          <img className="mainPic" src={img1} alt="bild1" />

          <div className="smallPics">
            <div className="sideOver">
              <img className="" src={img2} alt="bild2" />
              <img className="" src={img3} alt="bild3" />
            </div>
            <div className="sideUnder">
              <img className="" src={img4} alt="bild4" />
              <img className="" src={img5} alt="bild5" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
