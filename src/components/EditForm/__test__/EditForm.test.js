import renderer from "react-test-renderer";

import EditForm from "../EditForm";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

it("renders correctly", () => {
    const tree = renderer.create(<EditForm />).toJSON();
    expect(tree).toMatchSnapshot();
});
