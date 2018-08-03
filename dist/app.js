'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: [
      // 排列第一的会显示
      'pages/pageA', 'pages/pageBFix', 'pages/pageB'
      // 'pages/typelist',
      // 'pages/index',
      // 'pages/login',
      // 'pages/shop_car',
      // 'pages/order_detail',
      // 'pages/person_index',
      // 'pages/shop_detail'
      ],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
        // tabBar: {
        //   // list长度为2~5
        //   list: [{
        //     pagePath: 'pages/index',
        //     text: '首页',
        //     iconPath: 'res/home.png',
        //     selectedIconPath: 'res/home2.png'
        //   }, {
        //     pagePath: 'pages/typelist',
        //     text: '分类',
        //     iconPath: 'res/book.png',
        //     selectedIconPath: 'res/book2.png'
        //   }, {
        //     pagePath: 'pages/shop_car',
        //     text: '购物车',
        //     iconPath: 'res/shopcar.png',
        //     selectedIconPath: 'res/shopcar2.png'
        //   }, {
        //     pagePath: 'pages/person_index',
        //     text: '会员中心',
        //     iconPath: 'res/person.png',
        //     selectedIconPath: 'res/person2.png'
        //   }]
        // }
      } };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  /**
   * @desc 生命周期 首次打开小程序
   */


  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch(options) {
      // this.testAsync()
      this.getUserInfo();
      // console.log('onLaunch')
    }
    /**
     * @desc 初始化完成或后台进入前台
     */

  }, {
    key: 'onShow',
    value: function onShow(options) {}
    // console.log('onShow')

    /**
     * @desc 前台进入后台
     */

  }, {
    key: 'onHide',
    value: function onHide() {
      console.log('onHide');
    }
    /**
     * @desc 程序监听到未处理的Error
     */

  }, {
    key: 'onError',
    value: function onError() {
      console.log('onError');
    }
    /**
     * @desc 404处理
     */

  }, {
    key: 'onPageNotFound',
    value: function onPageNotFound(options) {
      console.log('onPageNotFound');
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJvcHRpb25zIiwiZ2V0VXNlckluZm8iLCJjb25zb2xlIiwibG9nIiwiY2IiLCJ0aGF0Iiwid2VweSIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBcURFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUFsRGZBLE1Ba0RlLEdBbEROO0FBQ1BDLGFBQU87QUFDTDtBQUNBLG1CQUZLLEVBR0wsZ0JBSEssRUFJTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEssT0FEQTtBQWNQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdCUSxPQWRELEVBa0RNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZhO0FBR2Q7O0FBRUQ7Ozs7Ozs7NkJBR1VDLE8sRUFBUztBQUNqQjtBQUNBLFdBQUtDLFdBQUw7QUFDQTtBQUNEO0FBQ0Q7Ozs7OzsyQkFHUUQsTyxFQUFTLENBRWhCO0FBREM7O0FBRUY7Ozs7Ozs2QkFHVTtBQUNSRSxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEO0FBQ0Q7Ozs7Ozs4QkFHVztBQUNURCxjQUFRQyxHQUFSLENBQVksU0FBWjtBQUNEO0FBQ0Q7Ozs7OzttQ0FHZ0JILE8sRUFBUztBQUN2QkUsY0FBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0Q7OztnQ0FFV0MsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0FDLHFCQUFLTCxXQUFMLENBQWlCO0FBQ2ZNLGVBRGUsbUJBQ05DLEdBRE0sRUFDRDtBQUNaSCxlQUFLUixVQUFMLENBQWdCQyxRQUFoQixHQUEyQlUsSUFBSVYsUUFBL0I7QUFDQU0sZ0JBQU1BLEdBQUdJLElBQUlWLFFBQVAsQ0FBTjtBQUNELFNBSmM7QUFLZlcsWUFMZSxnQkFLVEMsR0FMUyxFQUtKO0FBQ1RSLGtCQUFRQyxHQUFSLENBQVlPLEdBQVo7QUFDRDtBQVBjLE9BQWpCO0FBU0Q7Ozs7RUFwRzBCSixlQUFLSyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gICAgY29uZmlnID0ge1xuICAgICAgcGFnZXM6IFtcbiAgICAgICAgLy8g5o6S5YiX56ys5LiA55qE5Lya5pi+56S6XG4gICAgICAgICdwYWdlcy9wYWdlQScsXG4gICAgICAgICdwYWdlcy9wYWdlQkZpeCcsXG4gICAgICAgICdwYWdlcy9wYWdlQidcbiAgICAgICAgLy8gJ3BhZ2VzL3R5cGVsaXN0JyxcbiAgICAgICAgLy8gJ3BhZ2VzL2luZGV4JyxcbiAgICAgICAgLy8gJ3BhZ2VzL2xvZ2luJyxcbiAgICAgICAgLy8gJ3BhZ2VzL3Nob3BfY2FyJyxcbiAgICAgICAgLy8gJ3BhZ2VzL29yZGVyX2RldGFpbCcsXG4gICAgICAgIC8vICdwYWdlcy9wZXJzb25faW5kZXgnLFxuICAgICAgICAvLyAncGFnZXMvc2hvcF9kZXRhaWwnXG4gICAgICBdLFxuICAgICAgd2luZG93OiB7XG4gICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICAgIH1cbiAgICAgIC8vIHRhYkJhcjoge1xuICAgICAgLy8gICAvLyBsaXN06ZW/5bqm5Li6Mn41XG4gICAgICAvLyAgIGxpc3Q6IFt7XG4gICAgICAvLyAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXG4gICAgICAvLyAgICAgdGV4dDogJ+mmlumhtScsXG4gICAgICAvLyAgICAgaWNvblBhdGg6ICdyZXMvaG9tZS5wbmcnLFxuICAgICAgLy8gICAgIHNlbGVjdGVkSWNvblBhdGg6ICdyZXMvaG9tZTIucG5nJ1xuICAgICAgLy8gICB9LCB7XG4gICAgICAvLyAgICAgcGFnZVBhdGg6ICdwYWdlcy90eXBlbGlzdCcsXG4gICAgICAvLyAgICAgdGV4dDogJ+WIhuexuycsXG4gICAgICAvLyAgICAgaWNvblBhdGg6ICdyZXMvYm9vay5wbmcnLFxuICAgICAgLy8gICAgIHNlbGVjdGVkSWNvblBhdGg6ICdyZXMvYm9vazIucG5nJ1xuICAgICAgLy8gICB9LCB7XG4gICAgICAvLyAgICAgcGFnZVBhdGg6ICdwYWdlcy9zaG9wX2NhcicsXG4gICAgICAvLyAgICAgdGV4dDogJ+i0reeJqei9picsXG4gICAgICAvLyAgICAgaWNvblBhdGg6ICdyZXMvc2hvcGNhci5wbmcnLFxuICAgICAgLy8gICAgIHNlbGVjdGVkSWNvblBhdGg6ICdyZXMvc2hvcGNhcjIucG5nJ1xuICAgICAgLy8gICB9LCB7XG4gICAgICAvLyAgICAgcGFnZVBhdGg6ICdwYWdlcy9wZXJzb25faW5kZXgnLFxuICAgICAgLy8gICAgIHRleHQ6ICfkvJrlkZjkuK3lv4MnLFxuICAgICAgLy8gICAgIGljb25QYXRoOiAncmVzL3BlcnNvbi5wbmcnLFxuICAgICAgLy8gICAgIHNlbGVjdGVkSWNvblBhdGg6ICdyZXMvcGVyc29uMi5wbmcnXG4gICAgICAvLyAgIH1dXG4gICAgICAvLyB9XG4gICAgfVxuXG4gICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiBudWxsXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgc3VwZXIoKVxuICAgICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXNjIOeUn+WRveWRqOacnyDpppbmrKHmiZPlvIDlsI/nqIvluo9cbiAgICAgKi9cbiAgICBvbkxhdW5jaCAob3B0aW9ucykge1xuICAgICAgLy8gdGhpcy50ZXN0QXN5bmMoKVxuICAgICAgdGhpcy5nZXRVc2VySW5mbygpXG4gICAgICAvLyBjb25zb2xlLmxvZygnb25MYXVuY2gnKVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVzYyDliJ3lp4vljJblrozmiJDmiJblkI7lj7Dov5vlhaXliY3lj7BcbiAgICAgKi9cbiAgICBvblNob3cgKG9wdGlvbnMpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvblNob3cnKVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVzYyDliY3lj7Dov5vlhaXlkI7lj7BcbiAgICAgKi9cbiAgICBvbkhpZGUgKCkge1xuICAgICAgY29uc29sZS5sb2coJ29uSGlkZScpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXNjIOeoi+W6j+ebkeWQrOWIsOacquWkhOeQhueahEVycm9yXG4gICAgICovXG4gICAgb25FcnJvciAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25FcnJvcicpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXNjIDQwNOWkhOeQhlxuICAgICAqL1xuICAgIG9uUGFnZU5vdEZvdW5kIChvcHRpb25zKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25QYWdlTm90Rm91bmQnKVxuICAgIH1cblxuICAgIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19