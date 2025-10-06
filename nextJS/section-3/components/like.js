"use client"
import { useState } from 'react';

export default function Like() {
    // if(typeof localStorage !== "undefined"){
    //   console.log(localStorage);  
    // }
    // console.log("Like component");
    const [likeCount, setLikeCount] = useState(0);

  return (
    
    <div onClick={()=>{setLikeCount((prev) => prev + 1)}}>{likeCount}likes {console.log("running confirm....")}</div>
  )
}


//Server components execute only on the server
ettsxd
//Client components execute on the server as well as on the client