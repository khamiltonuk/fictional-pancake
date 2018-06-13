import React from "react";
import { shallow } from "enzyme";
import Results from "./Results";
import toJson from "enzyme-to-json";

describe("Results", () => {
  test("should match the snapshot", () => {
    const props = {
      win: 0,
      draw: 0,
      lose: 0
    };
    const wrapper = shallow(<Results {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
