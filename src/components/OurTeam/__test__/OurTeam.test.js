import renderer from "react-test-renderer";
import OurTeam from "../OurTeam";

const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<OurTeam t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
