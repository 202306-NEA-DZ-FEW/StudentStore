import renderer from "react-test-renderer";
import AnimatedCounter from "../AnimatedCounter";

it("renders correctly", () => {
    const tree = renderer.create(<AnimatedCounter />).toJSON();
    expect(tree).toMatchSnapshot();
});
