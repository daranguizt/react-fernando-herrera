import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import "@testing-library/jest-dom";
import { beforeEach, expect } from "@jest/globals";

describe("tests on CounterApp", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("should show CounterApp", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should contain counter", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counter = wrapper.find("h2").text();
    expect(typeof counter).toBe("string");
  });

  test("should increase counter", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("11");
  });

  test("should decrease counter", () => {
    wrapper.find("button").at(2).simulate("click");
    const counter = wrapper.find("h2").text().trim();
    expect(counter).toBe("9");
  });

  test("should reset to default counter value", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    wrapper.find("button").at(1).simulate("click");
    const resetText = wrapper.find("h2").text().trim();
    expect(resetText).toBe("100");
  });
});
