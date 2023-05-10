import React from "react";
import "../styles/PlaceGallery.css";

import img0 from "../img/starfull.png";
import imgArrow from "../img/arrow.png";
import heart from "../img/heart.png";

// import img1 from "../img/placeDetail/adam.jpg";
// import img2 from "../img/placeDetail/alex.jpg";
import img3 from "../img/placeDetail/deric.png";
import img4 from "../img/placeDetail/karl.jpg";
import img5 from "../img/placeDetail/michael.jpg";

export default function PlaceGallery({place}) {
  const img1 = place?.pictures[0]
  const img2 = place?.pictures[1]
  const img3 = place?.pictures[2]
  const img4 = place?.pictures[3]
  const img5 = place?.pictures[4]
  console.log("review length: ", place?.reviews?.length)
  console.log("rating: ", place?.rating)
  return (
    <div>
      <div className="warpGallery">

        <h2>{place?.name}</h2>

          <div className="navigation">
              <ul className="leftNav">
                <img className="sternchen" src={img0} alt="stern"/>
                <li className="interLeft"><a href="#">{place?.rating ? place.rating : "no reviews"} | </a></li>
                <li className="interLeft"><a href="#">{place?.reviews.length} Reviews</a></li>
                <li className="interLeft"><a href="#">{place?.location.city}, {place?.location.country}</a></li>
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
