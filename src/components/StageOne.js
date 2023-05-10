import React from "react";
import '../styles/StageOne.css';

import img2 from "../img/StageOne_2.jpg";


export default function StageOne() {
  return (
    <div>
      <div className="wrapper">
        <div className="left">
          <h2 className="dareto">
            Dare to live the life you've always wanted.
          </h2>
          <p className="smaltext">
            Life is short and the world is wide. So, better get started.
          </p>

          <div className="whenwehre">
            <div className="search">
              <label for="location">Location</label>
              <select name="land" id="land">
                <option empty="empty"> Wo willste hin?</option>
                <option woanders="woanders">Daheim</option>
                <option woanders="woanders">Nicht Daheim</option>
              </select>
            </div>

            <div className="date">
              <label for="date">Date</label>
              <select name="day" id="day">
                <option empty="empty"> Wann?</option>
                <option woanders="woanders">Datum...</option>
                <option woanders="woanders">Datum...</option>
              </select>
            </div>
          </div>
        </div>

       
          <div className="bigpic">
            <img className="bild2" src={img2} alt="bild1" />
          </div>
        
      </div>
    </div>
  );
}

