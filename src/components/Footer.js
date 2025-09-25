import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer">
    <div className="company">
        <h4>© 2025 Delicia. All rights reserved.</h4>
        <ul>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/corporate">Delicia Corporate</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/instant-delivery">Delicia Instant Delivery</Link>
          </li>
        </ul>
      </div>

      <div className="contact-us">
        <h4>Contact Us</h4>
        <ul>
          <li>
            <Link to="/help-support">Help &amp; Support</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/address">Address</Link>
          </li>
        </ul>
      </div>

      <div className="For-Restaurants">
        <h4>For Restaurants</h4>
        <ul>
          <li>
            <Link to="/partner-with-us">Partner with us</Link>
          </li>
          <li>
            <Link to="/apps-for-restaurants">Apps for Restaurants</Link>
          </li>
          <li>
            <Link to="/add-your-restaurant">Add your Restaurant</Link>
          </li>
          <li>
            <Link to="/restaurant-support">Support for Restaurants</Link>
          </li>
        </ul>
      </div>

      <div className="Legal">
        <h4>Legal</h4>
        <ul>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </li>
          <li>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </li>
          <li>
            <Link to="/dispute-resolution">Dispute Resolution</Link>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <h4>Social Links</h4>
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" target="_blank">
              YouTube
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com" target="_blank">
              Pinterest
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt="google play"
                width={128}
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt="apple store"
                width={128}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Footer;