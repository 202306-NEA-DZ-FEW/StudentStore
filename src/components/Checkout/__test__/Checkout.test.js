import renderer from "react-test-renderer";
import Checkout from "../Checkout";

it("renders correctly", () => {
    const tree = renderer.create(<Checkout />).toJSON();
    expect(tree).toMatchSnapshot();
});
