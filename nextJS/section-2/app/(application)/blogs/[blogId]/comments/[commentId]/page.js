
 export default async function Comment({params}){
    console.log(await params);
    const paramsObj = await params;
    const {commentId, blogId}  =  paramsObj;
     console.log(paramsObj);
     
  return (
    <div>Comments <b>{commentId} </b>Blog id: <b>{blogId}</b></div>
  )
}
