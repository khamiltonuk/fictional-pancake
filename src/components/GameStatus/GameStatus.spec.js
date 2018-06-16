import React from "react";
import { shallow } from "enzyme";
import GameStatus from "./GameStatus";

describe("GameStatus", () => {
  test("should render nothing if given empty string", () => {
    const isGameOver = "";
    const wrapper = shallow(<GameStatus isGameOver={isGameOver} />);
    expect(wrapper.find("StatusBar").exists()).toEqual(false);
  });

  test("should contain isGameOver string value", () => {
    const isGameOver = "hello";
    const wrapper = shallow(<GameStatus isGameOver={isGameOver} />);
    expect(
      wrapper
        .find("StatusBar")
        .children()
        .text()
    ).toEqual("hello");
  });
});
