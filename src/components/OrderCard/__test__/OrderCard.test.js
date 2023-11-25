import renderer from "react-test-renderer";

import OrderCard from "../OrderCard";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

it("renders correctly", () => {
    const tree = renderer.create(<OrderCard />).toJSON();
    expect(tree).toMatchSnapshot();
});
