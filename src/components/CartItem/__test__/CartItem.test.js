import renderer from "react-test-renderer";

import CartItem from "../CartItem";

it("renders correctly", () => {
    const tree = renderer.create(<CartItem />).toJSON();
    expect(tree).toMatchSnapshot();
});
