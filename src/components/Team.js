import { useEffect,useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shimmer from "./Shimmer/ShimmerAbout";
const Team = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            fetchTeam();
        },2500);
    }, []);
    
    const fetchTeam = async () => {
        try {
            const res = await fetch("https://raw.githubusercontent.com/Akhil-Balan-A/Swiggy-Restaurant-Data/refs/heads/main/RestaurantDatabase.json");
            const data = await res.json();
            setMembers(data?.team)
        } catch (error) {
            console.log("Error fetching team members:", error);
        }
    }


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ]
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
                    <div key={member.id} className="team-member border h-[480px] p-3 text-center rounded" >
                         <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full object-cover mb-4 m-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-1">
                <strong>Role:</strong> {member.role}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Experience:</strong> {member.experience}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Skills:</strong> {member.skills.join(", ")}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Phone:</strong> {member.contact.phone}
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> {member.contact.email}
              </p>
                    </div>
                ))}
            </Slider>    
            )}
            
        </div>
    );
}

export default Team;

