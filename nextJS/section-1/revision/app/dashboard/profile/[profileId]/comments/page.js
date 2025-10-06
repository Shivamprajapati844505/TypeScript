import React from 'react'


export default function comments({params}) {
    const {profileId , comments} = params;
  return (
    <div>
        <h1>
            ProfileId :{profileId} <br />
            comments: {comments} 
        </h1>
    </div>
  )
}
