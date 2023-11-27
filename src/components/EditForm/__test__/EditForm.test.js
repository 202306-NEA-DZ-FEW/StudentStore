import renderer from "react-test-renderer";

import EditForm from "../EditForm";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
        locale: "en",
    }),
}));
const t = (key) => key;

it("renders correctly", () => {
    const tree = renderer.create(<EditForm t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
