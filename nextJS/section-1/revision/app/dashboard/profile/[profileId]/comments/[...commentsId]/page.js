import React from 'react';

export default function comments({ params }) {
  const {profileId , commentsId} = params;

  return (
    <div>
      <h1>CommentsId:{profileId}</h1>
      <h1>CommentsId:{commentsId.join('/')}</h1>
    </div>
  );
}
