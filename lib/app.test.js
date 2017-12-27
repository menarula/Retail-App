'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _itemData = require('./item-data');

var _itemData2 = _interopRequireDefault(_itemData);

var _changedData = require('./changed-data');

var _changedData2 = _interopRequireDefault(_changedData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });


describe('App', function () {
	it('should render App', function () {
		var data = _itemData2.default;
		var app = (0, _enzyme.mount)(_react2.default.createElement(_app2.default, { itemData: data }));
		expect(app.debug()).toMatchSnapshot();
	});
	it('render a title', function () {
		var app = (0, _enzyme.shallow)(_react2.default.createElement(_app2.default, { itemData: _itemData2.default }));
		expect(app.find('.my-retail-title').text()).toEqual('Ninja™ Professional Blender with Single Serve Blending Cups');
	});
	it('render an image', function () {
		var app = (0, _enzyme.shallow)(_react2.default.createElement(_app2.default, { itemData: _itemData2.default }));
		expect(app.find('img').props().src).toEqual('http://target.scene7.com/is/image/Target/14263758');
	});
	it('should render image carousel', function () {
		var data = _itemData2.default;
		var app = (0, _enzyme.shallow)(_react2.default.createElement(_app2.default, { itemData: data }));
		expect(app.find('.my-retail-image-carousel').exists()).toBe(true);
	});
	it('render a price', function () {
		var app = (0, _enzyme.shallow)(_react2.default.createElement(_app2.default, { itemData: _itemData2.default }));
		expect(app.find('.my-retail-offer-price').text()).toEqual('$139.99');
	});
	it('should render add to cart button when purchasingChannelCode equal to 0 or 1', function () {
		var data = _itemData2.default;
		var app = (0, _enzyme.shallow)(_react2.default.createElement(_app2.default, { itemData: data }));
		expect(app.find('.btn-add-to-cart').exists()).toBe(true);
	});
	it('should render pick up in store button when purchasingChannelCode equal to 0 or 2', function () {
		var data = _itemData2.default;
		var app = (0, _enzyme.shallow)(_react2.default.createElement(_app2.default, { itemData: data }));
		expect(app.find('.btn-pickup').exists()).toBe(true);
	});
	describe('Testing buttons with purchasingChannelCode not equal to 0 or 1', function () {
		it('should render all other elements except buttons', function () {
			var data = _changedData2.default;
			var app = (0, _enzyme.mount)(_react2.default.createElement(_app2.default, { itemData: data }));
			expect(app.debug()).toMatchSnapshot();
		});
		it('should not render pick up in store button', function () {
			var data = _changedData2.default;
			var app = (0, _enzyme.shallow)(_react2.default.createElement(_app2.default, { itemData: data }));
			expect(app.find('.btn-pickup').exists()).toBe(false);
		});
		it('should not render add to cart button', function () {
			var data = _changedData2.default;
			var app = (0, _enzyme.shallow)(_react2.default.createElement(_app2.default, { itemData: data }));
			expect(app.find('.btn-add-to-cart').exists()).toBe(false);
		});
	});
});