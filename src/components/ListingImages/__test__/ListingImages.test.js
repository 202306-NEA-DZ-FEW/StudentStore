import renderer from "react-test-renderer";

import ListingImages from "../ListingImages";

it("renders correctly", () => {
    const imageFiles = ["/empty-image-container"];
    const tree = renderer
        .create(<ListingImages imageFiles={imageFiles} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
