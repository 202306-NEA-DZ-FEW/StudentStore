import renderer from "react-test-renderer";

import ShoppingCartIcon from "../ShoppingCartIcon";

it("renders correctly", () => {
    const tree = renderer.create(<ShoppingCartIcon />).toJSON();
    expect(tree).toMatchSnapshot();
});
