import {fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";




test("Shoulg load Header with login link", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            </Provider>
        </BrowserRouter>    
    );
    const linkElement = screen.getByText(/Sign In/i);
    expect(linkElement).toBeInTheDocument();
});

test("Should render header components with online status when online", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            </Provider>
        </BrowserRouter>
    )
    const cartItems = screen.getByText("🟢");
    expect(cartItems).toBeInTheDocument();
})


test("Should render header components with login status 'Sign out' when loggedin alread ", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            </Provider>
        </BrowserRouter>
    )
    const SignInlinkElement = screen.getByText(/Sign In/i);
    fireEvent.click(SignInlinkElement);
    const SignOutlinkElement = screen.getByText(/Sign Out/i);
    expect(SignOutlinkElement).toBeInTheDocument();


})