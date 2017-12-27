'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

require('bootstrap/dist/css/bootstrap.min.css');

require('react-responsive-carousel/lib/styles/carousel.min.css');

require('./less/index.less');

var _itemData = require('./item-data');

var _itemData2 = _interopRequireDefault(_itemData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, { itemData: _itemData2.default }), document.getElementById('root'));