import React from 'react';
import icon from '../img/danger.png';

export default function PlaceFeatures({ place }) {

  return (
    <>
    <div className="placeFeatures-heading" >
      <h1>Description</h1>
      <br />
      <h2 className="placeDescription">{place?.description}</h2>
    </div>
    <br />
    <br />
    <h1 className="placeFeatures-heading">{place?.name} offers you the following:</h1>
    <br/>
    <br/>
    <br/>
    <div className="placeFeaturesgridContainer">
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Abandoned Site</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Forgotten</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Decay</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Eerie atmosphere</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Historical significance</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Remote location</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Potential danger</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Graffiti or other signs of vandalism</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Unsafe Environment</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Unpredictable</div>
    </div>
    <br/>
    <br/>
    <br/>
    <div className="placeFeatures-btn-container">
    <button className ="placeFeatures-btn">Show all characteristics</button>
    </div>
    </>
  )
}

