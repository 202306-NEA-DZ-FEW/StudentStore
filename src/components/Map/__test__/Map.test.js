import React from "react";
import renderer from "react-test-renderer";
import dynamic from "next/dynamic";

// Mock the dynamic import
jest.mock("next/dynamic", () => () => {
    const DynamicComponent = () => {
        return <div>MapComponent</div>; // Mocked component content
    };
    return DynamicComponent;
});

// Import the component using dynamic import
const MapComponent = dynamic(() => import("../Map"), {
    ssr: false,
});

it("renders correctly", () => {
    const tree = renderer.create(<MapComponent />).toJSON();
    expect(tree).toMatchSnapshot();
});
