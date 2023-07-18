"use client"
import { useEffect, useContext } from "react"
import { redirect } from "next/navigation"
import { AuthContext } from "@/context/AuthContext"

export default function CheckAuth() {

  const { user } = useContext(AuthContext)

  useEffect(() => {
    if(!user) {
      redirect("/login")
    }
  }, [user])

  return null

}

