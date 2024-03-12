import React from 'react';

const PremiumCard = ({ course }) => {
  return (
    <div className="premium_card">
      <div className="premium_box1">
        <img
          src={course.imgURL}
          alt={course.title}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="premium_box2">
        <h2>{course.title}</h2>

        <p className="p_category">{course.category}</p>

        <strong className="p_price">{course.price}</strong>
        <button className="pbtn">
          <img className="li-img" src="/images/new_courses.svg" alt="Watch Demo" />
          Watch Demo
        </button>
        <button className="pbtn">Buy Now</button>
      </div>
    </div>
  );
};

export default PremiumCard;
