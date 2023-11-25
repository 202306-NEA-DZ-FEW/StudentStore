import renderer from "react-test-renderer";
import OurMission from "../OurMission";

const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<OurMission t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
