import '../styles/contact.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <p className="contact-intro">
        We'd love to hear from you! Whether you have questions, feedback, or need help with your order,  
        our support team is here to assist you.
      </p>

      <section className="contact-section">
        <h2>📞 Customer Support</h2>
        <p>
          Call us at: <strong>+1 (800) 123-4567</strong><br />
          Available 24/7 for any inquiries or assistance.
        </p>
      </section>

      <section className="contact-section">
        <h2>📧 Email Us</h2>
        <p>
          For general inquiries: <a href="mailto:support@delicia.com">support@delicia.com</a><br />
          For partnership opportunities: <a href="mailto:partners@delicia.com">partners@delicia.com</a>
        </p>
      </section>

      <section className="contact-section">
        <h2>📍 Visit Our Office</h2>
        <p>
          Delicia HQ<br />
          123 Flavor Street, Foodie City, FC 56789<br />
        </p>
      </section>
    </div>
  );
};

export default ContactUs;
