import TeamClass from "./TeamClass.js";
import React from "react";
import UserContext from "../context/UserContext.js";


class AboutUsClass extends React.Component {
    constructor(props) {
        super(props);
     
        console.log("parent constructor");
        
    }

    componentDidMount() {
      console.log("parent componentDidMount");
      this. interval = setInterval(() => {
        console.log("parent interval called");// Even you go to another page this interval will be called.
      }, 1000);
    }

  componentDidUpdate() {
    console.log("parent componentDidUpdate"); //componentDidUpdate never gets called, it only run aftre render when the component is updated due to changes in the state or props.
  }
  
  componentWillUnmount() {
    console.log("parent componentWillUnmount");//will be called when go to another link.
    clearInterval(this.interval);
  }

    render() {
      console.log("parent render");
    // debugger;
    return (
      <div className="px-6 py-12 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">About Us</h1>

        <p className="max-w-3xl text-gray-600 mb-10 leading-relaxed">
          Welcome to <strong className="text-gray-800">Delicia</strong> 🍔 – your one-stop destination for
          delicious meals delivered right at your doorstep. We believe food is
          not just about taste, but about experience, convenience, and love in
          every bite.
        </p>

        <section className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6 mb-8 text-left ">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To bring people closer to their favorite meals by providing a fast,
            reliable, and enjoyable food ordering experience.
          </p>
        </section>
        {/* Values Section */}
        <section className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6 mb-8 text-left">
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc list-inside">
            <li>🍴 Quality food from trusted restaurants</li>
            <li>⚡ Fast and reliable delivery</li>
            <li>💙 Customer-first approach</li>
            <li>🌍 Supporting local businesses</li>
          </ul>
        </section>

        {/* Team Section */ }
        <section className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6 mb-8 text-left">
          <h2 className="text-xl font-semibold">Meet the Team</h2>
          <p className="text-gray-600">
            We’re a group of food lovers, developers, and dreamers working
            together to make food delivery simple and enjoyable for everyone.
          </p>
          <TeamClass details={"Team1"} />
          <TeamClass details={"Team2"} />
          <div className="p-4 mt-5">
            {/*since class based component don't support hooks we have to use consumer directly*/}
              <UserContext.Consumer>
                {({ loggedinUser }) => (
                  <span className="text-gray-600 text-2xl">Logged in User:{loggedinUser}</span>
                )}
              </UserContext.Consumer>
          </div>
        </section>
      </div>
    );
  }
}


export default AboutUsClass;
