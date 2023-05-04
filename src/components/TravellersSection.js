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
            Maecenas euismod enim eu metus blandit, ut mollis metus ultricies.
            Donec bibendum ligula a ipsum venenatis, eu ultrices quam bibendum.
            Aliquam vestibulum neque eu diam volutpat facilisis.
          </p>
        </div>
        <div className='card'>
          <h2>Michelle Moon</h2>
          <img className='traveller1' src={img2} alt='customer' />

          <p>
            Maecenas euismod enim eu metus blandit, ut mollis metus ultricies.
            Donec bibendum ligula a ipsum venenatis, eu ultrices quam bibendum.
            Aliquam vestibulum neque eu diam volutpat facilisis.
          </p>
        </div>
        <div className='card'>
          <h2>Jack Jackson</h2>
          <img className='traveller3' src={img3} alt='customer' />
          <p>
            Maecenas euismod enim eu metus blandit, ut mollis metus ultricies.
            Donec bibendum ligula a ipsum venenatis, eu ultrices quam bibendum.
            Aliquam vestibulum neque eu diam volutpat facilisis.
          </p>
        </div>
      </div>
    </>
  );
}