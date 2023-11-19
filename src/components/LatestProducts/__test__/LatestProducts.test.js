import renderer from "react-test-renderer";
import LatestProducts from "../LatestProducts";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

it("renders correctly", () => {
    const tree = renderer.create(<LatestProducts />).toJSON();
    expect(tree).toMatchSnapshot();
});
