import React from 'react';
import Tour from './Tour';

const Tours = ({tours,removeTour}) => {
const tourMap = tours.map((tour) =>{
  return(
    <Tour removeTour={removeTour} key={tour.id} {...tour} />
  )
})
  return(
    <section>
      <div className='title'>
        <h2>Our Tours</h2>  
        <div className='underline'></div>
      </div>
      <div>{tourMap}</div>
    </section>
  )
};

export default Tours;
