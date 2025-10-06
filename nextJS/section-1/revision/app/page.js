import Link from "next/Link";

export default function Home() {
  return (
    <div>
      <h1>Main page </h1>
       <Link href="about">About</Link> {" "} 
        <Link href="listing">Listing</Link>{" "}
        <Link href="product">Product</Link>{" "}
       <Link href="dashboard">Dashboard</Link>
</div>
  );
}
