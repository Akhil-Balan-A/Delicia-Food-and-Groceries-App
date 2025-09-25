import { useEffect } from 'react';
import '../styles/about.css';
import Team from './Team.js';
import TeamClass from './TeamClass.js';
const AboutUs = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("parent interval called");// Even you go to another page this interval will be called.
    }, 1000);
    
    return () => {
      clearInterval(interval);
      console.log("parent interval unmounted");//will be called when go to another link just like componentWillUnmount
    }
  })

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <p className="about-intro">
        Welcome to <strong>Delicia</strong> 🍔 – your one-stop destination for delicious meals delivered right at your doorstep.  
        We believe food is not just about taste, but about experience, convenience, and love in every bite.
      </p>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To bring people closer to their favorite meals by providing a fast, reliable, 
          and enjoyable food ordering experience.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Values</h2>
        <ul>
          <li>🍴 Quality food from trusted restaurants</li>
          <li>⚡ Fast and reliable delivery</li>
          <li>💙 Customer-first approach</li>
          <li>🌍 Supporting local businesses</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Meet the Team</h2>
        <p>
          We’re a group of food lovers, developers, and dreamers working together 
          to make food delivery simple and enjoyable for everyone.
        </p>
        <Team />
      </section>
    </div>
  );
};

export default AboutUs;
