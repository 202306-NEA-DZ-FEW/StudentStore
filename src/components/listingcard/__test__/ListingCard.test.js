import renderer from "react-test-renderer";

import ListingCard from "../ListingCard";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

it("renders correctly", () => {
    const tree = renderer.create(<ListingCard />).toJSON();
    expect(tree).toMatchSnapshot();
});
