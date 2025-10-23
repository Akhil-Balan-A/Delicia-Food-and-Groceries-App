const ContactUs = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 text-center">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
        Contact Us
      </h1>

      {/* Intro Text */}
      <p className="max-w-2xl text-gray-600 mb-10 leading-relaxed">
        We'd love to hear from you! Whether you have questions, feedback, or
        need help with your order, our support team is here to assist you.
      </p>

      {/* Customer Support Section */}
      <section className="w-full max-w-xl bg-white shadow-md rounded-xl p-6 mb-8 text-left">
        <h2 className="text-xl font-semibold mb-2">📞 Customer Support</h2>
        <p className="text-gray-600">
          Call us at: <strong className="text-gray-800">+1 (800) 123-4567</strong>
          <br />
          Available 24/7 for any inquiries or assistance.
        </p>
      </section>

      {/* Email Section */}
      <section className="w-full max-w-xl bg-white shadow-md rounded-xl p-6 mb-8 text-left">
        <h2 className="text-xl font-semibold mb-2">📧 Email Us</h2>
        <p className="text-gray-600">
          For general inquiries:{" "}
          <a
            href="mailto:support@delicia.com"
            className="text-orange-600 hover:underline"
          >
            support@delicia.com
          </a>
          <br />
          For partnership opportunities:{" "}
          <a
            href="mailto:partners@delicia.com"
            className="text-orange-600 hover:underline"
          >
            partners@delicia.com
          </a>
        </p>
      </section>

      {/* Office Section */}
      <section className="w-full max-w-xl bg-white shadow-md rounded-xl p-6 text-left">
        <h2 className="text-xl font-semibold mb-2">📍 Visit Our Office</h2>
        <p className="text-gray-600">
          Delicia HQ
          <br />
          123 Flavor Street, Foodie City, FC 56789
          <br />
        </p>
        <button>click</button>
      </section>
    </div>
    
  );
};

export default ContactUs;
