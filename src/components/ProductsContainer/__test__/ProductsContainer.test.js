import renderer from "react-test-renderer";
import ProductsContainer from "../ProductsContainer";

it("renders correctly", () => {
    const tree = renderer.create(<ProductsContainer />).toJSON();
    expect(tree).toMatchSnapshot();
});
