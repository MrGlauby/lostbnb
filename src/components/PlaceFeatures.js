import React from 'react'
import icon from '../img/apron-icon.png';
export default function PlaceFeatures() {
  return (
    <>
    <h1 className="placeFeatures-heading">Dies bietet dir die Unterkunft:</h1>
    <br/>
    <br/>
    <br/>
    <div className="placeFeaturesgridContainer">
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Blick auf die Bucht</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Seeblick</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Privater Strandzugang - am Strand</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Küche</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>WLAN</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Kostenloser Parkplatz auf dem Grundstück</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>TV</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Waschmaschine</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Überwachungskameras auf dem Grundstück</div>
        <div class="placeFeatures-grid-item"><img src={icon} alt="icon"></img>Kohlenmonoxidmelder</div>
    </div>
    <br/>
    <br/>
    <br/>
    <div className="placeFeatures-btn-container">
    <button className ="placeFeatures-btn">Alle Ausstattungsmerkmale anzeigen</button>
    </div>
    </>
  )
}

