"use client"

import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

export function AuthProvider({ childern }){
  const [user, setUser] = useState()
  const [token, setToken] = useState()

  useEffect(() => {
    if(!user) {
      const _user = sessionStorage.getItem("user")
      const _token = sessionStorage.getItem("token")
      if(_user) setUser(JSON.parse(_user))
      if(_token) setToken(JSON.parse(_token))
    }
  }, [])

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