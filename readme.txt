插件的核心文件是：swipe.js,扩展为zepto.js的模块，可以解决上下左右切换。
#example:
$("#test").swipes({
	wipeLeft: function() {$("#test").text("左");}, //左侧滑动事件
	wipeRight: function() {$("#test").text("右");}, //右侧滑动事件
	wipeUp: function() { $("#test").text("上");}, //向上滑动事件
	wipeDown: function() { $("#test").text("下");}, //向下滑动事件
	preventDefaultEvents: true //阻止默认事件
});

可以通过以上四种扩展方法分别向左右上下滑动，可以实现左右上下同时出现在页面上的功能，在页面加上一个
var glb={
	isMove:true
}
是为了处理其他滑动插件（比如说iscroll）之间的冲突，
扩展出来的这四种方法不仅实现简单的方向信息，还能给调用者传一个滑动距离和是否正在滑动？