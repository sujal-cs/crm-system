import Link from "next/link";
import "../styles/utils.css";

export default function SignupPage() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already a User? <Link href="/login">Login here!</Link></p>
    </div>
  );
}
