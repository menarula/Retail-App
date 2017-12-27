import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new ReactSixteenAdapter() })
import App from './app';
import itemData from './item-data';
import changedData from './changed-data'

describe('App', () => {
	it('should render App', () => {
    const data = itemData
		const app = mount(<App itemData={ data } />)
		expect(app.debug()).toMatchSnapshot();
	});
	it('render a title', () => {
		const app = shallow(<App itemData={ itemData } />);
		expect(app.find('.my-retail-title').text()).toEqual('Ninja™ Professional Blender with Single Serve Blending Cups');
	});
	it('render an image', () => {
		const app = shallow(<App itemData={ itemData } />);
		expect(app.find('img').props().src).toEqual('http://target.scene7.com/is/image/Target/14263758');
	});
	it('should render image carousel', () => {
			const data = itemData
			const app = shallow(<App itemData={ data } />)
			expect(app.find('.my-retail-image-carousel').exists()).toBe(true);
		});
	it('render a price', () => {
		const app = shallow(<App itemData={ itemData } />);
		expect(app.find('.my-retail-offer-price').text()).toEqual('$139.99');
	});
	it('should render add to cart button when purchasingChannelCode equal to 0 or 1', () => {
			const data = itemData
			const app = shallow(<App itemData={ data } />)
			expect(app.find('.btn-add-to-cart').exists()).toBe(true);
		});
	it('should render pick up in store button when purchasingChannelCode equal to 0 or 2', () => {
			const data = itemData
			const app = shallow(<App itemData={ data } />)
			expect(app.find('.btn-pickup').exists()).toBe(true);
		});
		describe('Testing buttons with purchasingChannelCode not equal to 0 or 1', () => {
			it('should render all other elements except buttons', () => {
				const data = changedData
				const app = mount(<App itemData={ data } />)
				expect(app.debug()).toMatchSnapshot();
			});
			it('should not render pick up in store button', () => {
					const data = changedData
					const app = shallow(<App itemData={ data } />)
					expect(app.find('.btn-pickup').exists()).toBe(false);
				});
				it('should not render add to cart button', () => {
						const data = changedData
						const app = shallow(<App itemData={ data } />)
						expect(app.find('.btn-add-to-cart').exists()).toBe(false);
					});
			});
});
