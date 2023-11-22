import renderer from "react-test-renderer";

import ProductsList from "../ProductsList";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});
const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<ProductsList t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
