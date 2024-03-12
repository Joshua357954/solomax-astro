import React from 'react';

const YoutubeCard = ({ course }) => {
  return (
    <div className="yt-card">
      <div className="yt_video">
        <iframe
          width="100%"
          height="100%"
          src={course.ytLink}
          frameBorder="0"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
      <strong style={{ color: 'black' }}>{course.category}</strong>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  );
};

export default YoutubeCard;
