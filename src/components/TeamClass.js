import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shimmer from "./Shimmer/ShimmerAbout";
class TeamClass extends React.Component {
    constructor(props) {
        super(props);
        
        // ✅ initialize state here (like useState([]) in function component)

        this.state = {
            members:[]
        };
        console.log(this.props.details +"child constructor");
    }

    // ✅ lifecycle method → runs once after first render
  componentDidMount() {
      setTimeout(() => {
        this.fetchTeam();
      }, 2500);
      console.log(this.props.details+"child componentDidMount");
    }
      // ✅ custom method to fetch API data
    async fetchTeam() {
        try {
            const res = await fetch("https://raw.githubusercontent.com/Akhil-Balan-A/Swiggy-Restaurant-Data/refs/heads/main/RestaurantDatabase.json");
            const data = await res.json();
            // ✅ update state (like setMembers)
            this.setState({members:data?.team||[]});

            
        } catch (error) {
            console.log("Error fetching team members:", error);
        }
  }
  
  componentDidUpdate() {
    console.log(this.props.details+"Component did Update");
  }

  //componentWillUnmount called before this component is removed from the DOM
  componentWillUnmount() {
    console.log(this.props.details+"Component will Unmount");
  }

 

    render() {
        console.log(this.props.details+"child render");
        // ✅ destructure state
        const { members } = this.state;
       // ✅ slider settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
    };
    return (
      <div className="team-container">
        {members.length === 0 ? (
        
          <div className="aboutus-shimmer-container">
            <Shimmer />
          </div>
        ): (
          <Slider {...settings}>
          {members.map((member) => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>Name: {member.name}</h3>
              <p>
                <strong>Role:</strong> {member.role}
              </p>
              <p>
                <strong>Experience:</strong> {member.experience}
              </p>
              <p>
                <strong>Skills:</strong> {member.skills.join(", ")}
              </p>
              <p>
                <strong>Phone:</strong> {member.contact.phone}
              </p>
              <p>
                <strong>Email:</strong> {member.contact.email}
              </p>
            </div>
          ))}
        </Slider>  
        )}
        
      </div>
    );
  }
}


export default TeamClass;