import Link from "next/link";

export default async function Home({searchParams, params}) {
  console.log( await searchParams);
  console.log( await params);
  
  return (
    <>
      <h1>Welcome Technical Agency</h1>
      <Link href="/blogs">Blogs</Link>
      {" "}
      <Link href="/about">about</Link> 
      {" "}
      <Link href="/services">services</Link>
      {" "}
      <Link href="/files">files</Link>
    </>
  );
}
