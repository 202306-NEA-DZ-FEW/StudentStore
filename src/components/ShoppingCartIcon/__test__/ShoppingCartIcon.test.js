import renderer from "react-test-renderer";

import ShoppingCartIcon from "../ShoppingCartIcon";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

it("renders correctly", () => {
    const tree = renderer.create(<ShoppingCartIcon />).toJSON();
    expect(tree).toMatchSnapshot();
});
