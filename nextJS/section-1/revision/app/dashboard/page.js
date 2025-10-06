import React from 'react'
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
    <Link href = "/dashboard/profile">Profile</Link>{" "}
    <Link href = "/dashboard/service">Service</Link>
  </div>
  )
}
