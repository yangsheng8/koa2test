'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
	//类的构造方法
	function PraiseButton(num, element) {
		_classCallCheck(this, PraiseButton);

		//这个就是使用传入的实际参数，去初始化属性。
		this.num = num;
		this.element = element;
		this.lock = null;
	}
	//添加点击事件


	_createClass(PraiseButton, [{
		key: 'clickAction',
		value: function clickAction() {
			var _this = this;

			this.element.click(function () {
				//箭头函数简化回调函数
				if (_this.lock) {
					clearTimeout(_this.lock);
					_this.lock = null;
				}
				_this.lock = setTimeout(function () {
					if (_this.num < 10) {
						_this.element.css('-webkit-filter', 'grayscale(0)'); //致亮处理
						$('#animation').addClass('num'); //添加动画效果，+1
						_this.num = add(_this.num); //add方法的处理，要进行全局的add添加，进行单元测试。
						setTimeout(function () {
							$('#animation').removeClass('num');
						}, 1000);
					} else {
						_this.element.css('-webkit-filter', 'grayscale(1)'); //致灰处理
						_this.num = 0;
					}
					//axios  更新数据库数据
					axios.get('/api/users/updateUser').then(function (response) {
						$(".numCount").html(response.data.num);
					}).catch(function (error) {
						console.log(error);
					});
					//axios 获取数据
					axios.get('/api/users/getUser').then(function (response) {
						$(".numCount").html(response.data.num);
					}).catch(function (error) {
						console.log(error);
					});
					console.log(this.num);
				}, 300);
			});
		}
	}]);

	return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	//子类Thumb继承父类PraiseButton
	function Thumb(num, element) {
		_classCallCheck(this, Thumb);

		//构造
		return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, element)); //继承
	}

	return Thumb;
}(PraiseButton);
//new出子类，实现子类的点赞功能：
/*let f = new Thumb(0, $('#thumb'));
f.clickAction();*/
//这里需要模块化处理，不要new出来，而是export出去。
//es6中使用import和export来代替require和module.exports

exports.default = {
	Thumb: Thumb
};
