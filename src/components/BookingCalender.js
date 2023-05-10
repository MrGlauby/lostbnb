import React from "react";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";

import { fetchContentTypeAll } from "../utils/contentfulApi";

export default function BookingCalender() {
  const [placeName, setPlaceName] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    fetchContentTypeAll("places").then((response) => {
      console.log("placefetch:", response);
      setPlaceName(response.items[0].fields.name);
    });
  }, []);

  return (
    <>
      <h1 className="bookingCalender-header">
        Choose when and how long you want to be lost in the {placeName}
      </h1>
      <br />
      <br />
      <div className="react-calendar">
        <Calendar onChange={setDate} value={date} selectRange={true} />
      </div>
      {date.length > 0 ? (
        <p>
          <span>Start:</span> {date[0].toDateString()}
          &nbsp; to &nbsp;
          <span>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p>
          <span>Selected date:</span> {date.toDateString()}
        </p>
      )}
    </>
  );
}
