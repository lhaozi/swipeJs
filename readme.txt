插件的核心文件是：swipe.js,扩展为zepto.js的模块，可以解决上下左右切换。
#example:
$("#test").swipes({
	wipeLeft: function() {alert("左");}, //左侧滑动事件
	wipeRight: function() {alert("右");}, //右侧滑动事件
	wipeUp: function() { alert("上");}, //向上滑动事件
	wipeDown: function() { alert("下");}, //向下滑动事件
	preventDefaultEvents: true //阻止默认事件
});
demo见demo。
demo1.html,处理方式是通过margin-top实现位置的滑动。兼容向左向右滑动

预览方式：chorme的device 模式下观看