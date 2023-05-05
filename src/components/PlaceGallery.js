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
          <div className="leftNav">
            <nav>
              <ul>
                <li>
                  <a href="#">Sterne</a>
                </li>
                <li>
                  <a href="#">Bewertungen</a>
                </li>
                <li>
                  <a href="#">Svenborg, Dänemark</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* <div className="rightNav">
            <nav>
              <ul>
                <li>
                  <a href="#">Teilen</a>
                </li>
                <li>
                  <a href="#">Speichern</a>
                </li>
              </ul>
            </nav>
          </div> */}
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

        {/* musste exportiren in die PLACEFACTS.js */}
        {/* <div>
                    <div>
                        <div>
                             <h2>Gesamte Unterkunft: Privatunterkunft Gastgeber ist Anne</h2>
                        </div>
                        <div>
                            <img className="dude" src={img6} alt="bild5" />
                        </div>
                    </div>

                    <div>
                        <h3>Anne ist ein Super Gastgeber!</h3>
                        <p>TSuperhosts sind erfahrene, herasuragende bewertete Gastgeber, die alles dafür geben, ihren Gästen großartigen Aufenthalte zu bieten</p>
                    </div>

                    <div>
                        <h3>Tolle Lage!</h3>
                        <p>100 % der letzten Gäste haben die Lage mit 5 Sternen bewertet.</p>
                    </div>
            </div> */}
      </div>
    </div>
  );
}
