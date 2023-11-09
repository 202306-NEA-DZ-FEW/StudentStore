import renderer from "react-test-renderer";

import ProductDetails from "../ProductDetails";

it("renders correctly", () => {
    const tree = renderer.create(<ProductDetails />).toJSON();
    expect(tree).toMatchSnapshot();
});
