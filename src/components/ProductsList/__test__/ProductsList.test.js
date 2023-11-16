import renderer from "react-test-renderer";
import ProductsList from "../ProductsList";

it("renders correctly", () => {
    const tree = renderer.create(<ProductsList />).toJSON();
    expect(tree).toMatchSnapshot();
});
