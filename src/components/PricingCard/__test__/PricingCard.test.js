import renderer from "react-test-renderer";

import PricingCard from "../PricingCard";

it("renders correctly", () => {
    const tree = renderer.create(<PricingCard />).toJSON();
    expect(tree).toMatchSnapshot();
});
