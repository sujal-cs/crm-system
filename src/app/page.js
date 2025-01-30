import Link from "next/link";// Import Link tag
import "./styles/modern-normalize.css";
import "./globals.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/featured.css"
import "./styles/agents.css"
import "./styles/utils.css";


export default function LandingPage() {
  return (
    <>

      {/* header section  */}
      <header className="header container">
        <nav>
          <h2 id="header__logo">CRM.</h2>
          <ul className="header__menu">
            <li className="header_links"><a href="#agents">Agents</a></li>
            <li className="header_links"><a href="#featured">Features</a></li>
            <li className="header_links"><Link className="link" href="/signup"><button className="btn">Sign-Up</button></Link></li>
            <li className="header_links"><Link className="link" href="/login"><button className="btn">Log-In</button></Link></li>
          </ul>
        </nav>
      </header>


      <main>
        <div>  
          
          {/* hero section  */}
          <div className="hero container section">
            <h1 className="hero__heading">Your all Enterprise management <strong>solution</strong> in one place - <strong>CRM </strong>manage your teams with ease</h1>
            <span className="hero__tagline">Effective solution for modern teams!!</span>
          </div>


          {/* featured section  */}
          <div className="featured container section" id="featured">
            <h2 className="featured__heading">Why Choose CRM?</h2>
            <div className="featured__grid">
              <div className="feature__card">
                <h3 className="feature__title">Centralized Management</h3>
                <p className="feature__description">
                  Manage all your teams, clients, and business operations from one place with ease.
                </p>
              </div>

              <div className="feature__card">
                <h3 className="feature__title">Real-time Insights</h3>
                <p className="feature__description">
                  Get real-time analytics and reports to make data-driven decisions for your business.
                </p>
              </div>

              <div className="feature__card">
                <h3 className="feature__title">User Role Access</h3>
                <p className="feature__description">
                  Assign different roles like CEO, Admin, Employee, and Client for better management.
                </p>
              </div>

              <div className="feature__card">
                <h3 className="feature__title">Secure & Scalable</h3>
                <p className="feature__description">
                  Your data is encrypted and secured, ensuring seamless scalability as your business grows.
                </p>
              </div>
            </div>
          </div>

          {/* Agents section  */}

          <div className="agents container section" id="agents">
          <h2 className="agents__heading">Choose Your Role - various agents based CRM</h2>
          <div className="agents__grid">
            <div className="agent__card">
              <h3 className="agent__title">Client</h3>
              <p className="agent__description">
                Clients can view their profiles, request services, and interact with the business.
              </p>
            </div>

            <div className="agent__card">
              <h3 className="agent__title">CEO</h3>
              <p className="agent__description">
                The CEO has full access to business performance, manages agents, and makes strategic decisions.
              </p>
            </div>

            <div className="agent__card">
              <h3 className="agent__title">Admin</h3>
              <p className="agent__description">
                The Admin manages user roles, ensures security, and handles CRM technical aspects.
              </p>
            </div>

            <div className="agent__card">
              <h3 className="agent__title">Employee</h3>
              <p className="agent__description">
                Employees handle day-to-day operations and interact with clients based on their role.
              </p>
            </div>
          </div>
        </div>



        </div>
      </main >

    </>
  );
}