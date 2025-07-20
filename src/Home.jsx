import React, { useState } from 'react';
import hero from './images/hero-pickle.jpg'
import logo from './images/logo.png'
import product1 from './images/product1.jpeg'
import product2 from './images/product2.jpeg'

function SuryaPickles() {
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage("Thank you! We’ll get back to you soon.");
    e.target.reset();
  };

  return (
    <div>
      <header>
        <img src={logo} alt="Surya Pickles Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Welcome to Surya Pickles</h1>
          <p>Authentic Homemade Pickles Delivered Fresh</p>
          <a href="#products" className="btn">Explore Products</a>
        </div>
      </section>

      <section className="products" id="products">
        <h2>Our Pickles</h2>
        <div className="product-grid">
          <div className="product">
            <img src={product1} alt="Mango Pickle" />
            <h3>Mango Pickle</h3>
            <p>Spicy and tangy mango pickles made with traditional recipes.</p>
          </div>
          <div className="product">
            <img src={product2} alt="Lemon Pickle" />
            <h3>Lemon Pickle</h3>
            <p>Zesty lemon pickles with a burst of flavor in every bite.</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Us</h2>
        <p>Surya Pickles is a family-run business passionate about preserving age-old pickle recipes. Our pickles are made with natural ingredients, no preservatives, and lots of love.</p>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <p id="form-response">{formMessage}</p>
      </section>

      <footer>
        <p>&copy; 2025 Surya Pickles. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SuryaPickles;
