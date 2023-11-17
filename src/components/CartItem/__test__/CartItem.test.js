import renderer from "react-test-renderer";

import CartItem from "../CartItem";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

it("renders correctly", () => {
    const tree = renderer.create(<CartItem />).toJSON();
    expect(tree).toMatchSnapshot();
});
