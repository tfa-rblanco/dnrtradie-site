import React, { useState, useEffect } from "react";
import TawkMessenger from "./TawkMessenger";
import FreeQuoteBanner from "./component/FreeQuote";
import "./index.css";

const services = [
  "Brickwork for Houses",
  "Garages",
  "Extensions",
  "Garden Walls",
  "Patios",
  "Driveways",
];

const testimonials = [
  {
    quote: "DNR Tradie completely transformed our outdoor space. The brickwork on our new garden wall is flawless — strong, clean, and beautifully finished. Highly recommended!",
    author: "Sarah M., Coburg",
  },
  {
    quote: "Declan and the team turned our patchy backyard into a private paradise. The landscaping design, turf, and stonework are stunning.",
    author: "Jason & Mira T., Brunswick",
  },
  {
    quote: "The concreting work for our driveway was spot-on. Level, clean lines, and a perfect finish. It’s held up perfectly through weather and heavy use.",
    author: "Marcus D., Essendon",
  },
];


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFreeQuote, setShowFreeQuote] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000); // 10 seconds
  
    return () => clearInterval(interval);
  }, []);

  const handleServicesClick = () => {
    setShowFreeQuote(true);
    const target = document.getElementById("free-quote");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="header">
        <h1>DNR Tradie</h1>
      </header>

      <nav className="nav">
        <div className="nav-container">
          <div className="brand">
            <img src="/dnr-white.png" alt="DNR Tradie Logo" style={{ height: "40px" }} />
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>

          <div className={`burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </nav>

      <section
        className="hero"
        style={{
          backgroundImage: "url('/background-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2>Experts You Can Trust</h2>
        <div className="hero-content">
          <h4>About Us</h4>
          <p>
            DNR Tradie is a proudly Australian-owned company dedicated to delivering
            high-quality brickwork and construction solutions. Founded on decades
            of industry experience, our mission is to provide dependable, honest,
            and expert craftsmanship for residential and commercial projects alike.
          </p>

          <h4>Our Friendly Staff</h4>
          <strong>Declan Cullen – Tradesman & Brickwork Expert</strong>
          <p>
            Declan is a seasoned tradie with more than two decades of hands-on experience
            in bricklaying and structural masonry. Known for his precision and work ethic,
            Declan has built a reputation for quality brickwork that stands the test of time.
            His expertise spans everything from new builds and renovations to heritage
            restorations and feature brickwork.
          </p>

          <strong>Richard Blanco – Project Management Specialist</strong>
          <p>
            With over 20 years of experience in project management, Richard brings a
            wealth of knowledge in planning, logistics, and execution across a range
            of construction projects. His strong leadership, attention to detail, and
            commitment to client satisfaction ensure every project runs smoothly—from
            initial consultation to final handover.
          </p>

          <h4>Why Choose DNR Tradie?</h4>
          <ul>
            <li>40+ years of combined industry experience</li>
            <li>High standards of craftsmanship and project management</li>
            <li>Transparent communication and honest timelines</li>
            <li>Fully licensed, insured, and safety-compliant</li>
            <li>Serving homeowners, builders, and developers with tailored solutions</li>
          </ul>
        </div>
      </section>

      <section className="services" id="services">
        <h3>Our Services</h3>
        <div className="service-grid">
          {services.map((service, idx) => (
            <div className="service-item" key={idx}>
              <h4 onClick={handleServicesClick}>{service}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials" id="free-quote">
        {showFreeQuote && <FreeQuoteBanner />}
      </section>

      <section className="testimonials">
        <h3>What Our Clients Say</h3>
        <div className="testimonial-slide">
          <blockquote>“{testimonials[currentIndex].quote}”</blockquote>
          <p className="author">— {testimonials[currentIndex].author}</p>
        </div>
      </section>
      <section className="testimonials">
      <TawkMessenger />
      </section>
      <footer className="footer" id="contact">
        <p>&copy; 2025 DFC Brickwork. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
