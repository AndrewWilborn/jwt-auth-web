import Link from "next/link"
import CheckAuth from "./CheckAuth"
import PrivateStuff from "./PrivateStuff"
import Profile from "./Profile"

export default function Dashboard() {
  return(
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <h2 className="text-lg mb-4 font-semibold text-blue-200">Private (sorta) stuff (cheeto level security)</h2>
      <PrivateStuff />
      <h2 className="text-lg mb-4 font-semibold text-blue-200">Profile (truly private)</h2>
      <Profile />
      <Link href="/" className="text-indigo-400 mt-16">Home</Link>
      <CheckAuth />
    </main>
  )
}