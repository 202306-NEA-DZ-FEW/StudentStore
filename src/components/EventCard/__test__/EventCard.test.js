import renderer from "react-test-renderer";
import EventCard from "../EventCard";

it("renders correctly", () => {
    const tree = renderer.create(<EventCard />).toJSON();
    expect(tree).toMatchSnapshot();
});
