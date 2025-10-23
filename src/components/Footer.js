import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[rgb(200,50,50)] flex justify-around flex-wrap py-10 px-5">
      
      <div className="m-2.5">
        <h4 className="text-[17px] font-[700] mb-3 text-[rgb(27,25,25)]">
          © 2025 Delicia. All rights reserved.
        </h4>
        <ul className="list-none">
          <li className="mb-2"><Link to="/about-us" className="no-underline text-[rgb(83,79,79)] hover:text-black">About Us</Link></li>
          <li className="mb-2"><Link to="/corporate" className="no-underline text-[rgb(83,79,79)] hover:text-black">Delicia Corporate</Link></li>
          <li className="mb-2"><Link to="/careers" className="no-underline text-[rgb(83,79,79)] hover:text-black">Careers</Link></li>
          <li className="mb-2"><Link to="/team" className="no-underline text-[rgb(83,79,79)] hover:text-black">Team</Link></li>
          <li className="mb-2"><Link to="/blog" className="no-underline text-[rgb(83,79,79)] hover:text-black">Blog</Link></li>
          <li className="mb-2"><Link to="/instant-delivery" className="no-underline text-[rgb(83,79,79)] hover:text-black">Delicia Instant Delivery</Link></li>
        </ul>
      </div>

      <div className="m-2.5">
        <h4 className="text-[17px] font-[700] mb-3 text-[rgb(27,25,25)]">Contact Us</h4>
        <ul className="list-none">
          <li className="mb-2"><Link to="/help-support" className="no-underline text-[rgb(83,79,79)] hover:text-black">Help &amp; Support</Link></li>
          <li className="mb-2"><Link to="/contact-us" className="no-underline text-[rgb(83,79,79)] hover:text-black">Contact Us</Link></li>
          <li className="mb-2"><Link to="/address" className="no-underline text-[rgb(83,79,79)] hover:text-black">Address</Link></li>
        </ul>
      </div>

      <div className="m-2.5">
        <h4 className="text-[17px] font-[700] mb-3 text-[rgb(27,25,25)]">For Restaurants</h4>
        <ul className="list-none">
          <li className="mb-2"><Link to="/partner-with-us" className="no-underline text-[rgb(83,79,79)] hover:text-black">Partner with us</Link></li>
          <li className="mb-2"><Link to="/apps-for-restaurants" className="no-underline text-[rgb(83,79,79)] hover:text-black">Apps for Restaurants</Link></li>
          <li className="mb-2"><Link to="/add-your-restaurant" className="no-underline text-[rgb(83,79,79)] hover:text-black">Add your Restaurant</Link></li>
          <li className="mb-2"><Link to="/restaurant-support" className="no-underline text-[rgb(83,79,79)] hover:text-black">Support for Restaurants</Link></li>
        </ul>
      </div>

      <div className="m-2.5">
        <h4 className="text-[17px] font-[700] mb-3 text-[rgb(27,25,25)] shadow-b-sm  ">Legal</h4>
        <ul className="list-none">
          <li className="mb-2"><Link to="/privacy-policy" className="no-underline text-[rgb(83,79,79)] hover:text-black">Privacy Policy</Link></li>
          <li className="mb-2"><Link to="/terms-and-conditions" className="no-underline text-[rgb(83,79,79)] hover:text-black">Terms &amp; Conditions</Link></li>
          <li className="mb-2"><Link to="/cookie-policy" className="no-underline text-[rgb(83,79,79)] hover:text-black">Cookie Policy</Link></li>
          <li className="mb-2"><Link to="/dispute-resolution" className="no-underline text-[rgb(83,79,79)] hover:text-black">Dispute Resolution</Link></li>
        </ul>
      </div>

      <div className="m-2.5">
        <h4 className="text-[17px] font-[700] mb-3 text-[rgb(27,25,25)]">Social Links</h4>
        <ul className="list-none">
          <li className="mb-2"><a href="https://www.facebook.com" target="_blank" className="no-underline text-[rgb(83,79,79)] hover:text-black">Facebook</a></li>
          <li className="mb-2"><a href="https://www.instagram.com" target="_blank" className="no-underline text-[rgb(83,79,79)] hover:text-black">Instagram</a></li>
          <li className="mb-2"><a href="https://www.twitter.com" target="_blank" className="no-underline text-[rgb(83,79,79)] hover:text-black">Twitter</a></li>
          <li className="mb-2"><a href="https://www.youtube.com" target="_blank" className="no-underline text-[rgb(83,79,79)] hover:text-black">YouTube</a></li>
          <li className="mb-2"><a href="https://www.linkedin.com" target="_blank" className="no-underline text-[rgb(83,79,79)] hover:text-black">LinkedIn</a></li>
          <li className="mb-2"><a href="https://www.pinterest.com" target="_blank" className="no-underline text-[rgb(83,79,79)] hover:text-black">Pinterest</a></li>
          <li className="mb-2"><a href="#" target="_blank"><img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="google play" width={128} /></a></li>
          <li className="mb-2"><a href="#" target="_blank"><img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="apple store" width={128} /></a></li>
        </ul>
      </div>

    </div>
  );
};

export default Footer;
