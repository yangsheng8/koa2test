class PraiseButton {
	//类的构造方法
	constructor(num, element) {
			//这个就是使用传入的实际参数，去初始化属性。
			this.num = num;
			this.element = element;
			this.lock =null;  //稀释的锁
		}
		//添加点击事件
	clickAction() {
		this.element.click(() => { //箭头函数简化回调函数
				if(this.lock){
				clearTimeout(this.lock);
				this.lock = null;
				}
				 this.lock = setTimeout(function(){
					if (this.num < 10) {
						this.element.css('-webkit-filter', 'grayscale(0)'); //致亮处理
						$('#animation').addClass('num'); //添加动画效果，+1
						this.num = add(this.num); //add方法的处理，要进行全局的add添加，进行单元测试。
						setTimeout(function() {
							$('#animation').removeClass('num');
						}, 1000);
					} else {
						this.element.css('-webkit-filter', 'grayscale(1)'); //致灰处理
						this.num = 0;
					}
				//axios  更新数据库数据
			axios.get('/api/users/updateUser')
			.then(function (response) {
			  $(".numCount").html(response.data.num);
			})
			.catch(function (error) {
				console.log(error);
			});
				//axios 获取数据
			axios.get('/api/users/getUser')
			.then(function (response) {
			  $(".numCount").html(response.data.num);
			})
			.catch(function (error) {
				console.log(error);
			});
			console.log(this.num);
			  },300)
		})
	}
}
class Thumb extends PraiseButton { //子类Thumb继承父类PraiseButton
	constructor(num, element) { //构造
		super(num, element); //继承
	}
}
//new出子类，实现子类的点赞功能：
/*let f = new Thumb(0, $('#thumb'));
f.clickAction();*/
//这里需要模块化处理，不要new出来，而是export出去。
//es6中使用import和export来代替require和module.exports

export
default {
	Thumb
}