import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 10 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FontAwesomeIcon icon={faStar} key={`full-${i}`} className="filled-star" />
      ))}
      {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="half-star" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon icon={faStar} key={`empty-${i}`} className="empty-star" />
      ))}
    </>
  );
};

export default StarRating;
