import renderer from "react-test-renderer";

import ListingImages from "../ListingImages";

it("renders correctly", () => {
    const tree = renderer.create(<ListingImages />).toJSON();
    expect(tree).toMatchSnapshot();
});
