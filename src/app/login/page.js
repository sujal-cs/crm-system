'use client'

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import "../styles/modern-normalize.css";
import "../globals.css";
import "./auth.css"
import "../styles/utils.css";

export default function LoginPage() {
  return (
    <div className="register"> 
      <LoginLink className="btn">Log In</LoginLink>
    </div>
  )
}