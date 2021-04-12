import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('tests on GifExpertApp', () => {
    test('should render GifExpertApp and match snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show a list of categories', () => {
        const categories = ['mr popo', 'shaquille'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});