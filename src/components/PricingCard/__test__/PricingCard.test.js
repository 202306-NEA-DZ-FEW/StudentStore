import renderer from "react-test-renderer";

import PricingCard from "../PricingCard";

const t = (key) => key;

test("PricingCard renders correctly", () => {
    const tree = renderer
        .create(<PricingCard title='Small help' amount='10' t={t} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
