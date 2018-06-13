import React from "react";
import { shallow } from "enzyme";
import Rules from "./Rules";
import toJson from "enzyme-to-json";

describe("Rules", () => {
  test("should match the snapshot", () => {
    const wrapper = shallow(<Rules />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
