'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DefaultTheme = require('./DefaultTheme');

var _DefaultTheme2 = _interopRequireDefault(_DefaultTheme);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BodyContainer = function (_PureComponent) {
  _inherits(BodyContainer, _PureComponent);

  function BodyContainer(props) {
    _classCallCheck(this, BodyContainer);

    var _this = _possibleConstructorReturn(this, (BodyContainer.__proto__ || Object.getPrototypeOf(BodyContainer)).call(this, props));

    _this.handleToggle = function () {
      return _this.setState({ open: !_this.state.open });
    };

    _this.state = { open: false };
    return _this;
  }

  _createClass(BodyContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          message = _props.message;


      return _react2.default.createElement(
        _DefaultTheme2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'BodyContainer' },
          _react2.default.createElement(
            _Body2.default,
            null,
            children
          ),
          _react2.default.createElement(_Message2.default, { message: message })
        )
      );
    }
  }]);

  return BodyContainer;
}(_react.PureComponent);

BodyContainer.propTypes = {
  children: _propTypes2.default.element, // todo : Implementar apra ser element ou string
  message: _propTypes2.default.any
};

BodyContainer.defaultProps = {
  children: null,
  message: null
};

exports.default = BodyContainer;