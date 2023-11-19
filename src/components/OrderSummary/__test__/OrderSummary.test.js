import renderer from "react-test-renderer";

import OrderSummary from "../OrderSummary";

it("renders correctly", () => {
    const tree = renderer.create(<OrderSummary />).toJSON();
    expect(tree).toMatchSnapshot();
});
