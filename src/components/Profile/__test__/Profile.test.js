import React from "react";
import renderer from "react-test-renderer";
import ProfileComponent from "../Profile";

// Mock the useAuth hook
jest.mock("../../../context/AuthContext", () => ({
    useAuth: jest.fn(() => ({ currentUser: { uid: "mockUserId" } })),
}));

// Mock the Firebase module
jest.mock("../../../util/firebase", () => ({
    initializeApp: jest.fn(),
}));

it("renders correctly", () => {
    const tree = renderer.create(<ProfileComponent />).toJSON();
    expect(tree).toMatchSnapshot();
});
