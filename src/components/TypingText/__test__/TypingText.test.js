import renderer from "react-test-renderer";

import TypingText from "../TypingText";

it("renders correctly", () => {
    const tree = renderer.create(<TypingText />).toJSON();
    expect(tree).toMatchSnapshot();
});
