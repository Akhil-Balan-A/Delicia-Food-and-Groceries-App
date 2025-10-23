import { useEffect } from "react";
import Team from "./Team.js";
import TeamClass from "./TeamClass.js";

const AboutUs = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("parent interval called");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("parent interval unmounted");
    };
  });

  return (
    <div className="px-6 py-12 flex flex-col items-center text-center">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
        About Us
      </h1>

      {/* Intro */}
      <p className="max-w-3xl text-gray-600 mb-10 leading-relaxed">
        Welcome to <strong className="text-gray-800">Delicia</strong> 🍔 – your
        one-stop destination for delicious meals delivered right at your
        doorstep. We believe food is not just about taste, but about experience,
        convenience, and love in every bite.
      </p>

      {/* Mission Section */}
      <section className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6 mb-8 text-left">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-600">
          To bring people closer to their favorite meals by providing a fast,
          reliable, and enjoyable food ordering experience.
        </p>
      </section>

      {/* Values Section */}
      <section className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6 mb-8 text-left">
        <h2 className="text-xl font-semibold mb-2">Our Values</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>🍴 Quality food from trusted restaurants</li>
          <li>⚡ Fast and reliable delivery</li>
          <li>💙 Customer-first approach</li>
          <li>🌍 Supporting local businesses</li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6 text-left">
        <h2 className="text-xl font-semibold mb-2">Meet the Team</h2>
        <p className="text-gray-600 mb-6">
          We’re a group of food lovers, developers, and dreamers working
          together to make food delivery simple and enjoyable for everyone.
        </p>
        <Team />
        {/* If TeamClass is also needed */}
        {/* <TeamClass /> */}
      </section>
    </div>
  );
};

export default AboutUs;
