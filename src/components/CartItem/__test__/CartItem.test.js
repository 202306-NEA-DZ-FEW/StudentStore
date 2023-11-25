import renderer from "react-test-renderer";

import CartItem from "../CartItem";

const t = (key) => key;

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

it("renders correctly", () => {
    const tree = renderer.create(<CartItem t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
