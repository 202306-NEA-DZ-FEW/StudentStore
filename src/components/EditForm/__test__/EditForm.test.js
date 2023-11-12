import renderer from "react-test-renderer";

import EditForm from "../EditForm";

it("renders correctly", () => {
    const tree = renderer.create(<EditForm />).toJSON();
    expect(tree).toMatchSnapshot();
});
