����ĺ����ļ��ǣ�swipe.js,��չΪzepto.js��ģ�飬���Խ�����������л���
#example:
$("#test").swipes({
	wipeLeft: function() {$("#test").text("��");}, //��໬���¼�
	wipeRight: function() {$("#test").text("��");}, //�Ҳ໬���¼�
	wipeUp: function() { $("#test").text("��");}, //���ϻ����¼�
	wipeDown: function() { $("#test").text("��");}, //���»����¼�
	preventDefaultEvents: true //��ֹĬ���¼�
});

����ͨ������������չ�����ֱ����������»���������ʵ����������ͬʱ������ҳ���ϵĹ��ܣ���ҳ�����һ��
var glb={
	isMove:true
}
��Ϊ�˴��������������������˵iscroll��֮��ĳ�ͻ��
��չ�����������ַ�������ʵ�ּ򵥵ķ�����Ϣ�����ܸ������ߴ�һ������������Ƿ����ڻ�����