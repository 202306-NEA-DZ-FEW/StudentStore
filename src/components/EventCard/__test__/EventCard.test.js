import renderer from "react-test-renderer";

import EventCard from "../EventCard";

jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
        locale: "en",
    }),
}));

const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<EventCard t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
