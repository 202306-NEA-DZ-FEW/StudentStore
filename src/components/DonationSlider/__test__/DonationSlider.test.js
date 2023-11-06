import renderer from "react-test-renderer";

import DonationSlider from "../DonationSlider";

it("renders correctly", () => {
    const tree = renderer.create(<DonationSlider />).toJSON();
    expect(tree).toMatchSnapshot();
});
