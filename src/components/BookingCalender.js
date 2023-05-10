import React from "react";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";

export default function BookingCalender( {}) {
  const [date, setDate] = useState(new Date());
  const {  } = useParams();


  return (
    <>
    <h1 className="bookingCalender-header">
        Choose when and how long you want to be lost:
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
