import React, { useEffect, useState } from "react";
import "./App.css";
import heroMan from './images/hero-man.png';

function App() {
const [orders, setOrders] = useState(23000);
const [services, setServices] = useState(1100);
const [clients, setClients] = useState(6500);
useEffect(() => {
  const timer = setInterval(() => {
    setOrders(o => o + Math.floor(Math.random() * 3));
    setServices(s => s + (Math.random() < 0.5 ? 1 : 0));
    setClients(c => c + (Math.random() < 0.5 ? 1 : 0));
  }, 1800); // langsam, aber sichtbar

  return () => clearInterval(timer);
}, []);
useEffect(() => {
  let start = 0;
  const fast = setInterval(() => {
    start++;
    setOrders(o => o + 5);
    setServices(s => s + 1);
    setClients(c => c + 2);

    if (start > 25) clearInterval(fast);
  }, 40);
}, []);

   useEffect(() => {
    const counters = document.querySelectorAll(".count");

    counters.forEach(counter => {
      const update = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = Math.ceil(target / 200);

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(update, 40);
        } else {
          counter.innerText = target;
        }
      };
      update();
    });
  }, []);

  useEffect(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // <-- WICHTIG: bleibt sichtbar
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".order-box, .order-title").forEach(el => {
    observer.observe(el);
  });
}, []);

useEffect(() => {
  const boxes = document.querySelectorAll(".order-box");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  boxes.forEach(box => observer.observe(box));
}, []);


  return (
    
    <div className="app background-glow">

      <header className="header">
        <div className="logo">Elite</div>
        <nav>
         <a href="#kontakt">Kontakt</a>
         <a href="#service">Service</a>
         <a href="#ueber">Über uns</a>
         <a href="#impressum">Impressum</a>
          <button className="btn small">Sign Up</button>
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
  <span>Bestellung</span>
</div>

<section className="steps-section">
  <h2 className="steps-title order-title">So bestellst du bei Elite Service</h2>
  

  <div className="steps-grid">

    <div className="step-box order-box">
      <div className="step-badge">01<br/>STEP</div>
      <h3> Create account</h3>
      <p>Sign up on Elite Service for free. It takes only a few minutes and gives you full access to our panel.</p>
    </div>

    <div className="step-box order-box">
      <div className="step-badge">2<br/>STEP</div>
      <h3>  Top up balance</h3>
      <p>Use safe payment methods like PayPal, debit/credit cards, JazzCash, EasyPaisa or Gcash. Global payments supported.</p>
    </div>

    <div className="step-box order-box">
      <div className="step-badge">3<br/>STEP</div>
      <h3>  Select services</h3>
      <p>Browse our wide list of SMM services for Instagram, TikTok, YouTube, Facebook and more.</p>
    </div>

    <div className="step-box order-box">
      <div className="step-badge">4<br/>STEP</div>
      <h3> Choose desired package</h3>
      <p>Choose the service you need. We offer the cheapest prices with full service details.</p>
    </div>

    <div className="step-box order-box">
      <div className="step-badge">5<br/>STEP</div>
      <h3>  Submit order</h3>
      <p>Enter the required information and submit your order. System works 24/7.</p>
    </div>

    <div className="step-box order-box">
      <div className="step-badge">6<br/>STEP</div>
      <h3> Quick results</h3>
      <p>Orders start quickly—most within minutes. Elite Service is trusted worldwide.</p>
    </div>

  </div>
</section>


<section className="divider-section">
  <div className="divider-line"></div>
  <div className="divider-title">Testimonials and Reviews </div>
  <div className="divider-line"></div>
</section>
  <div className="reviews-wrapper">
    <div className="review-box">
      <p>“Best SMM panel I’ve ever used. Support is very helpful.”</p>
      <div className="stars">★★★★★</div>
      <span>- Daniel K.</span>
    </div>

    <div className="review-box">
      <p>“Top quality and very cheap prices. 100% recommended.”</p>
      <div className="stars">★★★★★</div>
      <span>- Maria L.</span>
    </div>

    <div className="review-box">
      <p>“Fast delivery and clean results every time.”</p>
      <div className="stars">★★★★★</div>
      <span>- Kevin R.</span>
    </div>

<div className="review-box">
  <p>“Amazing results. My engagement doubled in one week.”</p>
  <div className="stars">★★★★★</div>
  <span>- Alex M.</span>
</div>

<div className="review-box">
  <p>“Fast, reliable and very professional service.”</p>
  <div className="stars">★★★★★</div>
  <span>- Sophia T.</span>
</div>


  </div>
    </div>
  );
}

export default App;

