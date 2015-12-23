/*
 *	version swipes 1.0;
 *	date    2014.3.18;
 *	author  wanghao;
 *	#example:
 *	$("#test").swipes({
 *			wipeLeft: function() {$("#val").append("��");}, //��໬���¼�
 *			wipeRight: function() { $("#val").append("�ң�");}, //�Ҳ໬���¼�
 *			wipeUp: function() { $("#val").append("�ϣ�");}, //���ϻ����¼�
 *			wipeDown: function() { $("#val").append("�£�");}, //���»����¼�
 *			preventDefaultEvents: true //��ֹĬ���¼�
 *		});
 *
 */
;(function($, undefined){
	$.fn.swipes=function(options){
		var defaults = {
            swipeLeft:function(){},
            swipeRight:function(){},
			swipeTop:function(){},
            swipeDown:function(){},
			scrollDis:0,
			inits:function(){},
			preventDeault:true
        }
		if(options) var options = $.extend(defaults, options);
		/*************��ȡ��ǰ���ڻ����Ķ���**************/
		var $this=$(this);
		var $jsThis=$this.get(0);
		this.each(function(){
			/*************�����ڻ����Ķ���󶨺���**************/
			try{
			$jsThis.addEventListener("touchstart",startEve,false);
			$jsThis.addEventListener("touchend",endEve,false);
			}catch(e){}
			/**********���忪ʼ�ͽ�����x��y����**********/
			var startX,startY,endX=0,endY=0,Vtime,scrollHei,firstDisX,firstDisY,initTime,endTime,setTimes,isfirst=true,isvert=true;
			
			//���������յ㷵�ط��� 1�����ϣ�2�����£�3������4������,0��δ����
			function GetSlideDirection(startX, startY, endX, endY,isHorz) {
				var dy = startY - endY;
				var dx = endX - startX;
				if(isHorz){
					if(startX<endX) {
						result = 2;
					}else if(startX>endX){
						result = 1;
					}
					return result;
				}else{
					if(startY<endY) {
						result = 4;
					}else if(startY>endY){
						result = 3;
					}
					return result;
				}
			
			}
			var ishit=true;
			function startEve(e){
				if ( e.touches.length > 1){return;}
				var evt=e.touches[0];
				startX=(endX==0)?evt.clientX:endX;
				startY=(endY==0)?evt.clientY:endY;
				Vtime=setTimeout(function(){
					$jsThis.addEventListener("touchmove",movEve,false);
					$jsThis.addEventListener("touchend",endEve,false);
				},0);
			}
			
			var movEve=function(e){
				e.preventDefault();
				if ( e.touches.length > 1){ishit=false; return;}
				ishit=true;
				var evt=e.touches[0];
				
				if(isfirst){
					firstDisX=evt.clientX;
					firstDisY=evt.clientY;
					isfirst=false;
				}
				if(firstDisX!="undefined"&&firstDisX!=null&&firstDisY!="undefined"&&firstDisY!=null){
					if(Math.abs(firstDisX-startX)<=Math.abs(firstDisY-startY)){//��ֱ����
						endX=evt.clientX;
						endY=evt.clientY;
						isvert=true;
						var absMarW=Math.abs(endX-startX);
						var absMarH=Math.abs(endY-startY);
						var direct=GetSlideDirection(startX,startY,endX,endY,false);
						if(absMarH!=0){
							glb.isMove=false;
							switch(direct){
								case 3:options.swipeUp(absMarH,false);break;
								case 4:options.swipeDown(absMarH,false);break;
							};
						}else{
							e.preventDefault();
							glb.isMove=true;
							$jsThis.removeEventListener("touchmove",movEve,false);
							return;
						}
					}else{
						isvert=false;
						endX=evt.clientX;
						endY=evt.clientY;
						var absMarW=Math.abs(endX-startX);
						var absMarH=Math.abs(endY-startY);
						var direct=GetSlideDirection(startX,startY,endX,endY,true);
						if(absMarW!=0){
							switch(direct){
								case 1:options.swipeLeft(absMarW,false);break;
								case 2:options.swipeRight(absMarW,false);break;
							};
						}else{
							e.preventDefault();
							$jsThis.removeEventListener("touchmove",movEve,false);
							return;
						}
					}
				}
			}
			
			function endEve(ev){
				if (!ishit){return;}
				glb.isMove=true;
				if(isvert){
					clearTimeout(Vtime);
					$jsThis.removeEventListener("touchmove",movEve);
					var absMarW=Math.abs(endX-startX);
					var absMarH=Math.abs(endY-startY);
					var direct=GetSlideDirection(startX,startY,endX,endY,false);
					if(absMarH!=0){
						switch(direct){
							case 3:options.swipeUp(absMarH,true);break;
							case 4:options.swipeDown(absMarH,true);break;
						};
					}
				}else{
					clearTimeout(Vtime);
					$jsThis.removeEventListener("touchmove",movEve);
					var absMarW=Math.abs(endX-startX);
					var absMarH=Math.abs(endY-startY);
					var direct=GetSlideDirection(startX,startY,endX,endY,true);
					if(absMarW!=0){
						switch(direct){
							case 1:options.swipeLeft(absMarW,true);break;
							case 2:options.swipeRight(absMarW,true);break;
						};
					}
					
				}
					firstDisX=null;
					firstDisY=null;
					isfirst=true;
					clearTimeout(setTimes);
					setTimes=null;
					startX=0;
					startY=0;
					endX=0;
					endY=0;
					isvert=true;
				
			}
		});
	}
	
})(Zepto);
