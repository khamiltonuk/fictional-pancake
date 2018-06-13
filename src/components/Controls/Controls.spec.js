import React from "react";
import { shallow } from "enzyme";
import Controls from "./Controls";
import toJson from "enzyme-to-json";

describe("Controls", () => {
  test("should match the snapshot", () => {
    const props = ["rock", "paper", "cheese"];
    const wrapper = shallow(<Controls moves={props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("should render 3 buttons if given 3 moves", () => {
    const props = ["rock", "paper", "cheese"];
    const wrapper = shallow(<Controls moves={props} />);
    expect(wrapper.find('[data-q*="make-move"]').length).toBe(3);
  });
});
