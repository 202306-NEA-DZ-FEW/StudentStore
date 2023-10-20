import renderer from "react-test-renderer";
import FeaturedUniversities from "../FeaturedUniversities";

it("renders correctly", () => {
    const tree = renderer.create(<FeaturedUniversities />).toJSON();
    expect(tree).toMatchSnapshot();
});
