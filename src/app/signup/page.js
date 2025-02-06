'use client'

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs"
import "../styles/modern-normalize.css";
import "../globals.css";
import "./auth.css"
import "../styles/utils.css";

export default function LoginPage() {
  return (
    <div className="register"> 
      <RegisterLink className="btn">Register, Here!!</RegisterLink>
    </div>
  )
}