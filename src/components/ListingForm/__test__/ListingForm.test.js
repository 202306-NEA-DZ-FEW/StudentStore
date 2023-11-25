import renderer from "react-test-renderer";

import ListingForm from "../ListingForm";

jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
        locale: "en",
    }),
}));

it("renders correctly", () => {
    const t = (key) => key;

    const tree = renderer.create(<ListingForm t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
