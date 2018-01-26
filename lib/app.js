'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slider = require('./slider');

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var itemData = this.props.itemData;

      var data = itemData.CatalogEntryView[0];
      var title = data.title;
      var image = data.Images[0].PrimaryImage[0].image;
      var price = data.Offers[0].OfferPrice[0].formattedPriceValue;
      var priceQualifier = data.Offers[0].OfferPrice[0].priceQualifier;
      var purchasingChannelCode = data.purchasingChannelCode;
      var showAddToCart = purchasingChannelCode === '0' || purchasingChannelCode === '1';
      var pickupInStore = purchasingChannelCode === '0' || purchasingChannelCode === '2';
      var carouselImages = data.Images[0].AlternateImages;
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'my-retail col-xs-12' },
          _react2.default.createElement(
            'div',
            { className: 'my-retail-product col-xs-12 col-md-6' },
            _react2.default.createElement(
              'h1',
              { className: 'my-retail-title' },
              title
            ),
            _react2.default.createElement(
              'div',
              { className: 'my-retail-product-image-wrapper' },
              _react2.default.createElement('img', { className: 'my-retail-product-image', src: image, alt: 'product' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'my-retail-image-carousel' },
              _react2.default.createElement(_slider2.default, { images: carouselImages })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'my-retail-priceblock col-xs-12 col-md-6' },
            _react2.default.createElement(
              'div',
              { className: 'my-retail-price' },
              _react2.default.createElement(
                'span',
                { className: 'my-retail-offer-price' },
                price
              ),
              _react2.default.createElement(
                'span',
                { className: 'my-retail-price-qualifier' },
                priceQualifier
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'my-retail-promotions col-xs-12 col-md-6' },
              _react2.default.createElement(
                'p',
                null,
                'spend $50, ship free'
              ),
              _react2.default.createElement(
                'p',
                null,
                '$25 gift card with purchase of a select Ninja blender'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'my-retail-button-wrapper col-xs-12' },
              pickupInStore && _react2.default.createElement(
                'button',
                { className: 'btn btn-block btn-sm btn-primary btn-pickup' },
                'PICK UP IN STORE'
              ),
              showAddToCart && _react2.default.createElement(
                'button',
                { className: 'btn btn-block btn-sm btn-primary btn-add-to-cart' },
                'ADD TO CART'
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;