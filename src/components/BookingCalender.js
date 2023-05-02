import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar'; 


export default function BookingCalender() {

    const [date, setDate] = useState(new Date())

  return (
    <>
    <h1>Choose when and how long you want to be lost</h1>
    <br/>
    <br/>
    <div className="react-calendar">
     <Calendar onChange={setDate} value={date} selectRange={true}/>
   </div>
   {date.length > 0 ? (
   <p>
     <span>Start:</span>{' '} {date[0].toDateString()}
     &nbsp; to &nbsp;
     <span>End:</span> {date[1].toDateString()}
   </p>
        ) : (
   <p>
     <span>Selected date:</span>{' '} {date.toDateString()}
   </p>
        )}
    </>
  )
}

