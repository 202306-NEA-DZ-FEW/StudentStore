import renderer from "react-test-renderer";

import ProductDetails from "../ProductDetails";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

it("renders correctly", () => {
    const tree = renderer.create(<ProductDetails />).toJSON();
    expect(tree).toMatchSnapshot();
});
