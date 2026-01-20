import React, { useEffect, useState } from "react";
import "./App.css";
import heroMan from "./images/hero-man.png";

function App() {
  const [orders, setOrders] = useState(23000);
  const [services, setServices] = useState(1100);
  const [clients, setClients] = useState(6500);

  useEffect(() => {
    const timer = setInterval(() => {
      setOrders((o) => o + Math.floor(Math.random() * 3));
      setServices((s) => s + (Math.random() < 0.5 ? 1 : 0));
      setClients((c) => c + (Math.random() < 0.5 ? 1 : 0));
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let start = 0;
    const fast = setInterval(() => {
      start++;
      setOrders((o) => o + 5);
      setServices((s) => s + 1);
      setClients((c) => c + 2);

      if (start > 25) clearInterval(fast);
    }, 40);

    return () => clearInterval(fast);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".order-box, .order-title").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app background-glow">
      <header className="header">
        <div className="brand">
  <div className="brand-mark">E</div>
  <div className="brand-text">
    <div className="brand-name">Elite</div>
    <div className="brand-sub">Elite Service X</div>
  </div>
</div>

        <nav>
          <a href="#contact">Contact</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>

          <a
            href="https://eliteservicex.com/panel/auth/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn small"
          >
            Sign Up
          </a>

          <a
            href="https://eliteservicex.com/panel/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            className="btn small"
            style={{ marginLeft: "10px" }}
          >
            Login
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Boost Your Social Media Presence</h1>
          <p>
            Elite Services helps your brand grow faster with real engagement,
            modern tools and premium digital solutions.
          </p>
          <button className="btn primary">Get Started</button>
        </div>

        <div className="hero-visual">
          <img src={heroMan} alt="Social Media Growth" className="hero-image" />
          <div className="floating insta">Instagram</div>
          <div className="floating tiktok">TikTok</div>
          <div className="floating facebook">Facebook</div>
          <div className="floating youtube">YouTube</div>
          <div className="floating twitch">Twitch</div>
          <div className="floating telegram">Telegram</div>
        </div>

        <div className="hero-cards">
          <div className="card-box">
            <h3>Instagram Real Followers</h3>
            <p>+3,200 today</p>
          </div>
          <div className="card-box">
            <h3>Live Growth</h3>
            <p>Orders in progress</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h2 className="count">{orders}</h2>
          <p>Orders Processed</p>
        </div>

        <div className="stat-card">
          <h2 className="count">{services}</h2>
          <p>Active Services</p>
        </div>

        <div className="stat-card">
          <h2 className="count">{clients}</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat-card">
          <h2>#1</h2>
          <p>Growth Platform</p>
        </div>
      </section>

      <div className="section-divider">
        <span>How to Order</span>
      </div>

      <section className="steps-section">
        <div className="steps-grid">
          <div className="step-box order-box">
            <div className="step-badge">
              1<br />
              STEP
            </div>
            <h3>Create account</h3>
            <p>
              Sign up on Elite Service for free. It takes only a few minutes and
              gives you full access to our panel.
            </p>
          </div>

          <div className="step-box order-box">
            <div className="step-badge">
              2<br />
              STEP
            </div>
            <h3>Top up balance</h3>
            <p>
              Use safe payment methods like PayPal, debit/credit cards, JazzCash,
              EasyPaisa or Gcash. Global payments supported.
            </p>
          </div>

          <div className="step-box order-box">
            <div className="step-badge">
              3<br />
              STEP
            </div>
            <h3>Select services</h3>
            <p>
              Browse our wide list of SMM services for Instagram, TikTok,
              YouTube, Facebook and more.
            </p>
          </div>

          <div className="step-box order-box">
            <div className="step-badge">
              4<br />
              STEP
            </div>
            <h3>Choose desired package</h3>
            <p>
              Choose the service you need. We offer the cheapest prices with full
              service details.
            </p>
          </div>

          <div className="step-box order-box">
            <div className="step-badge">
              5<br />
              STEP
            </div>
            <h3>Submit order</h3>
            <p>
              Enter the required information and submit your order. System works
              24/7.
            </p>
          </div>

          <div className="step-box order-box">
            <div className="step-badge">
              6<br />
              STEP
            </div>
            <h3>Quick results</h3>
            <p>
              Orders start quickly—most within minutes. Elite Service is trusted
              worldwide.
            </p>
          </div>
        </div>
      </section>

    <div className="section-divider">
  <span>F.A.Q</span>
</div>

<section className="faq-section" id="faq">
  <div className="faq-top-mini">
    <div className="mini-pill">Trusted by <b>6,500+</b> clients worldwide</div>
    <div className="mini-pill">Orders start in <b>minutes</b></div>
    <div className="mini-pill">Secure payments & <b>24/7</b> support</div>
  </div>

  <div className="faq-wrap">
    {/* LEFT */}
    <div className="faq-left">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-sub">
        Everything you need to know before ordering from Elite Service.
      </p>

      <details className="faq-item" open>
        <summary>
          <span>How fast do orders start?</span>
          <span className="faq-plus">+</span>
        </summary>
        <div className="faq-content">
          <p>Most services start within minutes after payment is completed.</p>
        </div>
      </details>

      <details className="faq-item">
        <summary>
          <span>Are the services safe to use?</span>
          <span className="faq-plus">+</span>
        </summary>
        <div className="faq-content">
          <p>Yes. We provide safe delivery methods and clear service descriptions.</p>
        </div>
      </details>

      <details className="faq-item">
        <summary>
          <span>What payment methods do you accept?</span>
          <span className="faq-plus">+</span>
        </summary>
        <div className="faq-content">
          <p>PayPal, credit/debit cards and multiple international methods are supported.</p>
        </div>
      </details>

      <details className="faq-item">
        <summary>
          <span>Do you need my password?</span>
          <span className="faq-plus">+</span>
        </summary>
        <div className="faq-content">
          <p>No. Never share passwords. We only need the required link/username.</p>
        </div>
      </details>
    </div>

    {/* RIGHT */}
    <div className="faq-right">
      <h2 className="faq-title">What People Say About Us</h2>

      <div className="review2-card verified">
        <div className="review2-top">
          <div className="review2-stars">★★★★★</div>
          <span className="review2-tag">Verified</span>
        </div>
        <p className="review2-text">
          “Super fast delivery and amazing support. My engagement increased the same day.”
        </p>
        <div className="review2-user">
          <div className="review2-avatar">DK</div>
          <div>
            <div className="review2-name">Daniel K.</div>
            <div className="review2-meta">Instagram Growth</div>
          </div>
        </div>
      </div>

      <div className="review2-card verified">
        <div className="review2-top">
          <div className="review2-stars">★★★★★</div>
          <span className="review2-tag">Verified</span>
        </div>
        <p className="review2-text">
          “Very professional panel. Easy to use and reliable services every time.”
        </p>
        <div className="review2-user">
          <div className="review2-avatar">ML</div>
          <div>
            <div className="review2-name">Maria L.</div>
            <div className="review2-meta">TikTok Boost</div>
          </div>
        </div>
      </div>

      <div className="review2-card verified">
        <div className="review2-top">
          <div className="review2-stars">★★★★★</div>
          <span className="review2-tag">Verified</span>
        </div>
        <p className="review2-text">
          “Best value for money. Orders are fast and the dashboard is super clean.”
        </p>
        <div className="review2-user">
          <div className="review2-avatar">ST</div>
          <div>
            <div className="review2-name">Sophia T.</div>
            <div className="review2-meta">YouTube Views</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="faq-cta">
        <div className="faq-cta-text">
          <h3>Ready to start?</h3>
          <p>Create your account now and access the panel in minutes.</p>
        </div>

        <a
          className="faq-cta-btn"
          href="https://eliteservicex.com/panel/auth/signup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create your account
        </a>
      </div>
    </div>
  </div>
</section>

<footer className="site-footer" id="footer">
  <div className="footer-inner">
    {/* Left */}
    <div className="footer-left">
      <div className="footer-brand">
        <div className="footer-logo">Elite</div>
        <div className="footer-name">Elite Service X</div>
      </div>

      <p className="footer-text">
        All user information is kept 100% private and will NOT be shared with anyone.
        Always remember: you are protected with our panel — trusted worldwide.
      </p>
    </div>

    {/* Right */}
    <div className="footer-right">
      <h3 className="footer-title">NEWSLETTER</h3>
      <p className="footer-sub">
        Get updates, offers and important service news — no spam.
      </p>

      <form
        className="footer-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks! We'll keep you updated.");
        }}
      >
        <input
          className="footer-input"
          type="email"
          placeholder="E-mail"
          required
        />
        <button className="footer-btn" type="submit">
          Subscribe now
        </button>
      </form>
    </div>
  </div>

  <div className="footer-bottom">
    <div className="footer-year">2026</div>

    <div className="footer-links">
      <a href="#services">Services</a>
      <a href="#faq">FAQs</a>
      <a href="#api">API</a>
      <a href="#blog">Blog</a>
      <a href="#terms">Terms & Conditions</a>
    </div>
  </div>
</footer>


    </div>
  );
}

export default App;

