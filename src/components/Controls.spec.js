import React from "react";
import { shallow } from "enzyme";
import { Controls } from "./Controls";

describe("Controls", () => {
  test("should render 3 buttons if given 3 moves", () => {
    const props = ["rock", "paper", "cheese"];
    const wrapper = shallow(<Controls moves={props} />);
    expect(wrapper.find('[data-q*="make-move"]').length).toBe(3);
  });
});
