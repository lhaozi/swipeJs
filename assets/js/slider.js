function swipePro(obj,num,thirdObj,forObj){//对象分别为"slider",一排放的li个数,"ul","li"
		/******焦点图*********/
		var isTouch=true;
		obj.each(function(){
			var ul=$(this).find(thirdObj);
			var li=$(this).find(forObj);
			li.height($(window).height());
			var len=li.length;
			var numm=Math.ceil(len/num);
			var lWid=parseInt($(this).height());
			ul.height(lWid*numm);
		$("#totalPage").text(numm);
		
		var thats=$(this);
		$.scrollsH=0;
		var bol=true;
		var g = $("#cur_page");
		var p = null;
		
		/******************滑动焦点图事件******************/
		thats.swipes({
			istouch:true,
			inits:function(){				
				var ow=thats.height();
				var mW=ul.height();
				return((ul.css("margin-top")%ow==0)?ul.css("margin-top"):(parseInt(ul.css("margin-top")/ow))*ow);
				},
			scrollDis:this.inits,
			swipeLeft:function(dis,bol){
				return;
			},
			swipeRight:function(dis,bol){
				return;
			},
			swipeUp:function(dis,bol){
				var ow=thats.height();
				var that=this;
				if(!that.istouch) return false;
				that.istouch=false;
				var mw=ul.height();
				if(bol){
					if(dis>=20){
							if(Math.abs(parseInt(this.scrollDis))>=(mw-ow)){
								this.scrollDis=ow-mw;
								ul.animate({"margin-top":this.scrollDis},200,function(){
									that.scrollDis=ul.css("margin-top");
									$.scrollsH=ul.css("margin-top");
									that.istouch=true;
								});
							}else{
								this.scrollDis=$.scrollsH;
								ul.animate({"margin-top":parseInt(this.scrollDis)-parseInt(ow)},200,function(){
									that.scrollDis=ul.css("margin-top");
									$.scrollsH=ul.css("margin-top");
									var i=parseInt(Math.abs(parseInt(that.scrollDis))/ow);
									
									g.removeClass("ani");
									g.addClass("ani");
									p = null;
									p = setTimeout(function() {
										g.html(i + 1);
										g.removeClass("ani");
									},250);
									that.istouch=true;
								});
							}
						}else{
							this.scrollDis=$.scrollsH;
							ul.animate({"margin-top":this.scrollDis},200,function(){
								that.scrollDis=ul.css("margin-top");
								$.scrollsH=ul.css("margin-top");
								var i=parseInt(Math.abs(parseInt(that.scrollDis))/ow);
								g.removeClass("ani");
									g.addClass("ani");
									p = null;
									p = setTimeout(function() {
										g.html(i + 1);
										g.removeClass("ani");
									},250);
									that.istouch=true;
							});
						}
					
				
				}else{that.istouch=true;
					this.scrollDis=$.scrollsH;
					if(Math.abs(parseInt(this.scrollDis))>=(mw-ow)){
						ul.css("margin-top",parseInt(this.scrollDis)-dis/3);
					}else{
						ul.css("margin-top",parseInt(this.scrollDis)-dis);
					}
				}
				
			},
			swipeDown:function(dis,bol){
				var ow=thats.height();
				var that=this;
				if(!that.istouch) return false;
				that.istouch=false;
				var mw=ul.height();
				if(bol){
					if(dis>=20){
							if(parseInt(this.scrollDis)>=0){
								this.scrollDis=0;
								ul.animate({"margin-top":this.scrollDis},200,function(){
									that.scrollDis=ul.css("margin-top");
									$.scrollsH=ul.css("margin-top");
									that.istouch=true;
								});
							}else{
								this.scrollDis=$.scrollsH;
								ul.animate({"margin-top":parseInt(this.scrollDis)+parseInt(ow)},200,function(){
									that.scrollDis=ul.css("margin-top");
									$.scrollsH=ul.css("margin-top");
									var i=parseInt(Math.abs(parseInt(that.scrollDis))/ow);
									g.removeClass("ani");
									g.addClass("ani");
									p = null;
									p = setTimeout(function() {
										g.html(i + 1);
										g.removeClass("ani");
									},250);
									that.istouch=true;
								});
							}
						}else{
								this.scrollDis=$.scrollsH;
							ul.animate({"margin-top":this.scrollDis},200,function(){
								that.scrollDis=ul.css("margin-top");
								$.scrollsH=ul.css("margin-top");
								var i=parseInt(Math.abs(parseInt(that.scrollDis))/ow);
									g.removeClass("ani");
									g.addClass("ani");
									p = null;
									p = setTimeout(function() {
										g.html(i + 1);
										g.removeClass("ani");
									},250);
									that.istouch=true;
							});
						}
				}else{that.istouch=true;
					this.scrollDis=$.scrollsH;
					if(parseInt(this.scrollDis)>=0){
						ul.css("margin-top",parseInt(this.scrollDis)+dis/3);
					}else{
						ul.css("margin-top",parseInt(this.scrollDis)+dis);
					}
				}
			},
			preventDefaultEvents: true
		});
		
		});
		/******************滑动焦点图事件end******************/
	}
		/*************焦点图结束****************/