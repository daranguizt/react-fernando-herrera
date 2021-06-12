import AddCategory from "../components/AddCategory";
import "@testing-library/jest-dom";

const { shallow } = require("enzyme");

describe("tests on <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change text box", () => {
    const input = wrapper.find("input");
    const value = "Hello world";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("should not post info on submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clear input', () => {
    //1. simulate inputChange
    //2. simulate submit
    //3. setCategories to have been called
    //4. input value should be empty
    const inputValue = 'wee'
    const input = wrapper.find('input');
    input.simulate('change', {target: {value: inputValue }});

    const form = wrapper.find('form');
    form.simulate('submit', {preventDefault: () => {}});

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));    

    expect(input.text()).toBe('');
    //solución de fernando
    //expect(wrapper.find('input').prop('value').toBe(''))

  })
  
});
