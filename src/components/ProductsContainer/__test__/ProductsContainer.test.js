import renderer from "react-test-renderer";

import ProductsContainer from "../ProductsContainer";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});
it("renders correctly", () => {
    const tree = renderer.create(<ProductsContainer />).toJSON();
    expect(tree).toMatchSnapshot();
});
