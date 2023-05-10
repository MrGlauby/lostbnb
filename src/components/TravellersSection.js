import React from 'react';
import img1 from '../img/feedbackpicture1.jpg';
import img2 from '../img/feedbackpicture2.jpg';
import img3 from '../img/feedbackpicture3.jpg';

export default function TravellersSection() {
  return (
    <>
      <h2 id='travellers'>Satisfied Travellers around the world</h2>
      <div className='container'>
        <div className='card'>
          <h2>Peter Paramount</h2>
          <img className='traveller1' src={img1} alt='customer' />
          <p>
          "Fantastic platform! User-friendly interface, excellent search filters, and a vast selection of accommodations. Highly recommend for any travel needs."
          </p>
        </div>
        <div className='card'>
          <h2>Michelle Moon</h2>
          <img className='traveller1' src={img2} alt='customer' />

          <p>
          "Excellent platform! Easy to use, great selection of accommodations, and reliable customer service. Highly recommend!"
          </p>
        </div>
        <div className='card'>
          <h2>Jack Jackson</h2>
          <img className='traveller3' src={img3} alt='customer' />
          <p>
          "Amazing platform! Easy to use, great selection of accommodations, and excellent customer service. Highly recommend for all your travel needs!"
          </p>
        </div>
      </div>
    </>
  );
}