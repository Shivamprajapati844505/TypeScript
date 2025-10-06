import Link  from "next/link";

export const metadata = {
 title:"Services",
}

export default function Services() {
  return (
    <div>
      <h1>Services</h1>

      <p>
        <Link href="/services/web-dev">Web    Devlopment</Link>
      </p>
      
      
      <p>
        {" "}
        <Link href="/services/analist">Data Analist</Link>
      </p>
       <p>
        {" "}
        <Link href="/services/seo">SEO</Link>
      </p>
      {/*
      <p>
        {" "}
        <Link href="/"> Seo</Link>
      </p> */}
    </div>
  );
}

//  Services
