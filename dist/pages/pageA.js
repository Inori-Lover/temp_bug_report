'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Web = function (_wepy$page) {
  _inherits(Web, _wepy$page);

  function Web() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Web);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Web.__proto__ || Object.getPrototypeOf(Web)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      v: '0.0.1'
    }, _this.methods = {
      PageB1: function PageB1() {
        this.$navigate('./pageB', { from: 1 });
      },
      PageB2: function PageB2() {
        this.$navigate('./pageB', { from: 2 });
      },
      PageBFix1: function PageBFix1() {
        this.$navigate('./pageBFix', { from: 1 });
      },
      PageBFix2: function PageBFix2() {
        this.$navigate('./pageBFix', { from: 2 });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Web;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Web , 'pages/pageA'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VBLmpzIl0sIm5hbWVzIjpbIldlYiIsImRhdGEiLCJ2IiwibWV0aG9kcyIsIlBhZ2VCMSIsIiRuYXZpZ2F0ZSIsImZyb20iLCJQYWdlQjIiLCJQYWdlQkZpeDEiLCJQYWdlQkZpeDIiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsSSxHQUFPO0FBQ0xDLFNBQUc7QUFERSxLLFFBR1BDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNFO0FBQ1IsYUFBS0MsU0FBTCxDQUFlLFNBQWYsRUFBMEIsRUFBQ0MsTUFBTSxDQUFQLEVBQTFCO0FBQ0QsT0FITztBQUlSQyxZQUpRLG9CQUlFO0FBQ1IsYUFBS0YsU0FBTCxDQUFlLFNBQWYsRUFBMEIsRUFBQ0MsTUFBTSxDQUFQLEVBQTFCO0FBQ0QsT0FOTztBQU9SRSxlQVBRLHVCQU9LO0FBQ1gsYUFBS0gsU0FBTCxDQUFlLFlBQWYsRUFBNkIsRUFBQ0MsTUFBTSxDQUFQLEVBQTdCO0FBQ0QsT0FUTztBQVVSRyxlQVZRLHVCQVVLO0FBQ1gsYUFBS0osU0FBTCxDQUFlLFlBQWYsRUFBNkIsRUFBQ0MsTUFBTSxDQUFQLEVBQTdCO0FBQ0Q7QUFaTyxLOzs7O0VBSnFCSSxlQUFLQyxJOztrQkFBakJYLEciLCJmaWxlIjoicGFnZUEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgdjogJzAuMC4xJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgUGFnZUIxICgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlKCcuL3BhZ2VCJywge2Zyb206IDF9KVxuICAgIH0sXG4gICAgUGFnZUIyICgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlKCcuL3BhZ2VCJywge2Zyb206IDJ9KVxuICAgIH0sXG4gICAgUGFnZUJGaXgxICgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlKCcuL3BhZ2VCRml4Jywge2Zyb206IDF9KVxuICAgIH0sXG4gICAgUGFnZUJGaXgyICgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlKCcuL3BhZ2VCRml4Jywge2Zyb206IDJ9KVxuICAgIH1cbiAgfVxufVxuIl19