
import { notFound } from 'next/navigation';
export async function genetareatadata({ params }) {
  const { blogId } = await params;
  return {
    title: `Blog ${blogId}`,
  };
}

export default async function BlogId({ params }) {
  console.log(await params);
  const { blogId } = await params;
  
  if(!/^\d+$/.test(blogId)){
    notFound();
  }

  return <div>Blog {blogId}</div>;
}
