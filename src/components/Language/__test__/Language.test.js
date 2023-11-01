import React from "react";
import renderer from "react-test-renderer";
import Language from "../Language";

jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
        locale: "en",
    }),
}));

it("renders correctly", () => {
    const tree = renderer.create(<Language />).toJSON();
    expect(tree).toMatchSnapshot();
});
