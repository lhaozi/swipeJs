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