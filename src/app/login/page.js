import Link from "next/link";
import "../styles/utils.css";

export default function LoginPage() {
  return (
    <div className="auth-container">
      <h2>Log In</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
        <p>New here?<Link href="/signup">Register, Now!</Link></p>
      </form>
    </div>
  );
}

