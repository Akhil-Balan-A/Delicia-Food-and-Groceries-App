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
                    <div key={member.id} className="team-member">
                        <img src={member.image} alt={member.name} />
                        <h3>Name: {member.name}</h3>
                        <p><strong>Role:</strong> {member.role}</p>
                        <p><strong>Experience:</strong> {member.experience}</p>
                        <p><strong>Skills:</strong> {member.skills.join(", ")}</p>
                        <p><strong>Phone:</strong> {member.contact.phone}</p>
                        <p><strong>Email:</strong> {member.contact.email}</p>
                    </div>
                ))}
            </Slider>    
            )}
            
        </div>
    );
}

export default Team;

