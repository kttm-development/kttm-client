import React from 'react';

export default function PostItem({
  image,
  title,
  description,
}) {
  return (
    <div className="posts-container row">
      <div className="instrument-details">
        <div className="pic-info col-4">
          <img src={image} alt="instrument for sale" className="post-image" />
        </div>
        <div className="instrument-about col-8">
          <label className="info-label">Title:</label>
          <label className="instrument-label">{title}</label>
          <label className="info-label">Description:</label>
          <label className="instrument-label">{description}</label>
        </div>
      </div>
    </div>
  );
}
