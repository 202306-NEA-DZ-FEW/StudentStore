import renderer from "react-test-renderer";

import OrderSummary from "../OrderSummary";

const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<OrderSummary t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
