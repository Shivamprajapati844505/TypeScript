
 export default async function Comments({params}){
    console.log(await params);
    const paramsObj = await params;
    const {blogId}  =  paramsObj;
     console.log(paramsObj);
     
  return (
    <div>Comments <b>{blogId}</b></div>
  )
}
