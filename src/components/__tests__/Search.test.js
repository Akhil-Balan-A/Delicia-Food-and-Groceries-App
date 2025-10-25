import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import UserContext from "../../context/UserContext";
import Main from "../Main";
import Search from "../Search";

// ✅ Mock the custom hook to avoid real API calls
jest.mock("../../utils/useRestaurantCards", () => {
  return () => ({
    restaurants: [
      { id: 1, name: "Pisharody's Veg Restaurant", promoted: false },
      { id: 2, name: "Biriyani Palace", promoted: true },
      { id: 3, name: "SaravanBavan Veg Restaurant", promoted: false },
      { id: 4, name: "Akhil's Veg Restaurant", promoted: false },
      { id: 5, name: "Biriyani Manzil", promoted: true },
      { id: 6, name: "AnandaBhavan Veg Restaurant", promoted: false },
    ],
    dishes: [],
    setRestaurants: jest.fn(),
    error: null,
  });
});

// ✅ Mock useOutletContext to simulate what AppLayout normally passes
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useOutletContext: () => ({ searchTerm: "Pisharody" }),
}));

describe("Integration Test: Search + Main", () => {
  it("Should render Search component", () => {
    render(<Search />);
    const input = screen.getByPlaceholderText(
      "Search for Restaurants, food items"
    );
    expect(input).toBeInTheDocument();
  });

  it("Should render Main component filtered by search term", async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <UserContext.Provider
            value={{ loggedinUser: "Akhil", setUserName: jest.fn() }}
          >
            <Main />
          </UserContext.Provider>
        </BrowserRouter>
      </Provider>
    );

    // Check if restaurant with "Pisharody" appears (searchTerm is mocked)
    const restaurantCard = await screen.findByText(
      /Pisharody's Veg Restaurant/i
    );
    expect(restaurantCard).toBeInTheDocument();

    // And check that another restaurant ("Biriyani Palace") is not shown
    expect(screen.queryByText(/Biriyani Palace/i)).not.toBeInTheDocument();
  });
});
