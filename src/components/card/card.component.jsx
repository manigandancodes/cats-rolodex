import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      src={`https://robohash.org/${props.cat.id}?set=set4`}
      alt='cats'
      width='150'
      height='150'
    />
    <h2>{props.cat.name}</h2>
  </div>
);
