
export const metadata = {
 title:"Blog",
}

export default  async function Blog({searchParams, params}){
    console.log();
    
  return (
    <div>
        <h1>All Blogs</h1>
        <p>Blog 1</p>
        <p>Blog 2</p>
        <p>Blog 3</p>
    </div>
  )
}
