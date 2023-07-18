"use client"

import { createContext, useState } from "react"

export const AuthContext = createContext()

export function AuthProvider({ childern }){
  const [user, setUser] = useState()
  const [token, setToken] = useState()

  const handleLogin = (data) => {
    setUser(data.user)
    setToken(data.token)
    sessionStorage.setItem("user", JSON.stringify(data.user))
    sessionStorage.setItem("token", JSON.stringify(data.token))
  }

  const handleLogout = () => {
    setUser()
    setToken()
    sessionStorage.clear()
  }

  return 
  <AuthContext.Provider value={{ user, token, handleLogin, handleLogout }}>
    {childern}
  </AuthContext.Provider>

}