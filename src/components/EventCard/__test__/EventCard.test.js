import renderer from "react-test-renderer";

import EventCard from "../EventCard";

const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<EventCard t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
