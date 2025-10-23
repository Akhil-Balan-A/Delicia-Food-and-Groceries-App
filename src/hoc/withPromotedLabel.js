import React from "react";

const withPromotedLable = (RestaurantCards) => {

    return (props) => {
        return (
            <div className="relative">
                <span className="absolute top-4 left-4 bg-yellow-400/70 text-black px-2 py-1 text-xs font-bold rounded z-10 ">🔥 Promoted </span>
                <RestaurantCards {...props} />{/*props comes from RestaurantCards*/}
            </div>
            
        )
    }
}

export default withPromotedLable; 