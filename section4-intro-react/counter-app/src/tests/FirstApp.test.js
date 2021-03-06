import React from "react";
import { shallow } from "enzyme";
const { render } = require("@testing-library/react");
const { default: FirstApp } = require("../FirstApp");

// describe('tests on <FirstApp />', () => {
//     test('should show "Hola Mundo, Diego"', () => {
//         const msg = 'Diego';
//         const {getByText} = render(<FirstApp msg={msg}/>);

//         expect(getByText(`Hola mundo, ${msg}`)).toBeInTheDocument();
//     });
// });

describe("test on <FirstApp />", () => {
  test("should show FirstApp", () => {
    const msg = "Diego";
    const wrapper = shallow(<FirstApp msg={msg} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should show msg and subtitle", () => {
    const msg = "Diego";
    const subtitle = "this is a subtitle";

    const wrapper = shallow(<FirstApp msg={msg} subtitle={subtitle} />);

    const pText = wrapper.find('p').text();
    console.log(pText);
  });
});
