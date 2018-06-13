import React from "react";
import { shallow } from "enzyme";
import Hands from "./Hands";
import toJson from "enzyme-to-json";

describe("Hands", () => {
  test("should match the snapshot", () => {
    const wrapper = shallow(<Hands />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
