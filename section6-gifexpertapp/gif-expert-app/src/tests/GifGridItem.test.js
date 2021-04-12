import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../components/GifGridItem";

describe("gifgriditem tests", () => {
  const testObj = {
    id: 1,
    title: "test",
    url: "https://media.giphy.com/media/d1E2IByItLUuONMc/giphy.gif",
    key: "https://media.giphy.com/media/d1E2IByItLUuONMc/giphy.gif",
  };

  const wrapper = shallow(
    <GifGridItem
      id={testObj.id}
      title={testObj.title}
      url={testObj.url}
      key={testObj.key}
    />
  );
  test("should show gifgriditem component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have a paragraph with title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(testObj.title);
  });

  test('should have img with given url', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(testObj.url);
  });

  test('should have animate__fadeIn', () => {
    const div = wrapper.find('.animate__fadeIn');
    expect(div.length).toBe(1);

    //solución fernando
    //const div = wrapper.find('div');
    //expect(div.props('className').includes('animate__fadeIn')).toBe(true);
  })
});
