import renderer from "react-test-renderer";
import OurMission from "../OurMission";

it("renders correctly", () => {
    const tree = renderer.create(<OurMission />).toJSON();
    expect(tree).toMatchSnapshot();
});
