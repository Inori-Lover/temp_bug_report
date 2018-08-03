'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: ''
    }, _this.components = {}, _this.mixins = [], _this.data = {
      name: 0,
      loading: true
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.loading = true;
      var that = this.$root.$wxpage;
      // console.log(options, that.__wxWebviewId__)
      setTimeout(function () {
        // console.log(options, that.__wxWebviewId__)
        that.setData({ loading: false, name: options.from }, function () {});
      }, 2000);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/pageBFix'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VCRml4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwibmFtZSIsImxvYWRpbmciLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJvcHRpb25zIiwidGhhdCIsIiRyb290IiwiJHd4cGFnZSIsInNldFRpbWVvdXQiLCJzZXREYXRhIiwiZnJvbSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsWUFBTSxDQUREO0FBRUxDLGVBQVM7QUFGSixLLFFBSVBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBR1ZDLE0sR0FBUyxFOzs7OzsyQkFHRkMsTyxFQUFTO0FBQ2QsV0FBS0osT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFJSyxPQUFPLEtBQUtDLEtBQUwsQ0FBV0MsT0FBdEI7QUFDQTtBQUNBQyxpQkFBVyxZQUFZO0FBQ3JCO0FBQ0FILGFBQUtJLE9BQUwsQ0FBYSxFQUFFVCxTQUFTLEtBQVgsRUFBa0JELE1BQU1LLFFBQVFNLElBQWhDLEVBQWIsRUFBcUQsWUFBVyxDQUFFLENBQWxFO0FBQ0QsT0FIRCxFQUdHLElBSEg7QUFJRDs7OztFQTdCZ0NDLGVBQUtDLEk7O2tCQUFuQm5CLEsiLCJmaWxlIjoicGFnZUJGaXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBuYW1lOiAwLFxuICAgICAgbG9hZGluZzogdHJ1ZVxuICAgIH1cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgdmFyIHRoYXQgPSB0aGlzLiRyb290LiR3eHBhZ2VcbiAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMsIHRoYXQuX193eFdlYnZpZXdJZF9fKVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMsIHRoYXQuX193eFdlYnZpZXdJZF9fKVxuICAgICAgICB0aGF0LnNldERhdGEoeyBsb2FkaW5nOiBmYWxzZSwgbmFtZTogb3B0aW9ucy5mcm9tIH0sIGZ1bmN0aW9uKCkge30pXG4gICAgICB9LCAyMDAwKVxuICAgIH1cbiAgfVxuIl19