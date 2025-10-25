import RestaurantCards from "../RestaurantCards";
import  MOCK_DATA  from "./mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import withPromotedLable from "../../hoc/withPromotedLabel";

it("Should render RestaurantCard component with props Data", () => {
    render(
        <BrowserRouter>
            <RestaurantCards resData={MOCK_DATA.restaurants[1]} />
        </BrowserRouter>
    )
    const name = screen.getByText("Pisharody'S Veg Restaurant")
    expect(name).toBeInTheDocument();

})


it("Should render RestaurantCard component with promoted label", () => {
    //test with HOC as it uses it.
    const PromotedRestaurantCards = withPromotedLable(RestaurantCards);
    render(
        <BrowserRouter>
            <PromotedRestaurantCards resData={MOCK_DATA.restaurants.map((res) => res)} />
        </BrowserRouter>
    )
    const promotedLabel = screen.getByText(/Promoted/i)
    expect(promotedLabel).toBeInTheDocument();

}) 