import renderer from "react-test-renderer";
import LatestProducts from "../LatestProducts";

it("renders correctly", () => {
    const tree = renderer.create(<LatestProducts />).toJSON();
    expect(tree).toMatchSnapshot();
});
