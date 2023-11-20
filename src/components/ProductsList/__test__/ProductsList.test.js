import renderer from "react-test-renderer";

import ProductsList from "../ProductsList";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});
it("renders correctly", () => {
    const tree = renderer.create(<ProductsList />).toJSON();
    expect(tree).toMatchSnapshot();
});
