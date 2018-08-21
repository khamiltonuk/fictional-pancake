import React from "react";
import { shallow, simulate } from "enzyme";
import Settings from "./Settings";
import toJson from "enzyme-to-json";
import { EHOSTUNREACH } from "constants";

describe("Settings", () => {
  test("should match the snapshot", () => {
    const wrapper = shallow(<Settings />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  describe("GameLength", () => {
    test("should call setGameLength function when best-of-3 button is pressed", () => {
      const props = {
        setGameLength: jest.fn()
      };
      const wrapper = shallow(<Settings {...props} />);
      const button = wrapper.find("#best-of-3");
      button.simulate("change", { target: { value: "3" } });
      expect(props.setGameLength).toHaveBeenCalledWith("3");
    });

    test("should have correct GameLength radio input if 3 selected", () => {
      const props = {
        gameLength: "3"
      };
      const wrapper = shallow(<Settings {...props} />);
      const bestOfThreeInput = wrapper.find("#best-of-3");
      const bestOfFiveInput = wrapper.find("#best-of-5");
      const nonStopInput = wrapper.find("#non-stop");
      expect(bestOfThreeInput.props().checked).toEqual(true);
      expect(bestOfFiveInput.props().checked).toEqual(false);
      expect(nonStopInput.props().checked).toEqual(false);
    });

    test("should have correct GameLength radio input if 5 selected", () => {
      const props = {
        gameLength: "5"
      };
      const wrapper = shallow(<Settings {...props} />);
      const bestOfThreeInput = wrapper.find("#best-of-3");
      const bestOfFiveInput = wrapper.find("#best-of-5");
      const nonStopInput = wrapper.find("#non-stop");
      expect(bestOfThreeInput.props().checked).toEqual(false);
      expect(bestOfFiveInput.props().checked).toEqual(true);
      expect(nonStopInput.props().checked).toEqual(false);
    });
  });

  describe("GameMode", () => {
    test("should call setGameMode function when rps button is pressed", () => {
      const props = {
        setGameMode: jest.fn()
      };
      const wrapper = shallow(<Settings {...props} />);
      const button = wrapper.find("#rps");
      button.simulate("change", { target: { value: "rps" } });
      expect(props.setGameMode).toHaveBeenCalledWith("rps");
    });

    test("should have correct GameMode radio input if rpsls selected", () => {
      const props = {
        gameMode: "rpsls"
      };
      const wrapper = shallow(<Settings {...props} />);
      const rpslsInput = wrapper.find("#rpsls");
      const rpsInput = wrapper.find("#rps");
      expect(rpslsInput.props().checked).toEqual(true);
      expect(rpsInput.props().checked).toEqual(false);
    });

    test("should have correct GameMode radio input if rps selected", () => {
      const props = {
        gameMode: "rps"
      };
      const wrapper = shallow(<Settings {...props} />);
      const rpslsInput = wrapper.find("#rpsls");
      const rpsInput = wrapper.find("#rps");
      expect(rpslsInput.props().checked).toEqual(false);
      expect(rpsInput.props().checked).toEqual(true);
    });
  });

  test("onSubmit expect to hide Settings panel", () => {
    const props = {
      hideSettings: jest.fn()
    };
    const wrapper = shallow(<Settings {...props} />);
    wrapper.find("form").simulate("submit", { preventDefault: jest.fn() });
    expect(props.hideSettings).toHaveBeenCalled();
  });
});
