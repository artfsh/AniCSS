//先把前端数据库给建立起来，然后图形、属性等与数据库关联，最后是导出等
var main = new Vue({
	el: '#main',
	data: {
		StyleE1: {
			position: 'absolute',
			height: '',
			width: '',
			top: '400px',
			left: '600px',
			background: '#CCCCCC',
			zIndex: '',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#CCCCCC',
			boxShadow: '',
			
			transition: '',
			transitionDelay: '',
			transitionTimingFunction: '',
			transformOrigin: '',
		},
		StyleHover: {
			position: 'absolute',
			height: '',
			width: '',
			moveRight: '0px',
			moveDown: '0px',
			background: '#CCCCCC',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#CCCCCC',
			boxShadow: '',
			transform: '',
		},
		StyleActive: {
			position: 'absolute',
			height: '',
			width: '',
			moveRight: '0px',
			moveDown: '0px',
			background: '#CCCCCC',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#CCCCCC',
			boxShadow: '',
			transform: '',
		},
		StyleBefore: {
			position: 'absolute',
			height: '',
			width: '',
			top: '0px',
			left: '0px',
			background: '#CCCCCC',
			zIndex: '',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#CCCCCC',
			boxShadow: '',
			
			transition: '',
			transitionDelay: '',
			transitionTimingFunction: '',
			transformOrigin: '',
		},
		StyleBeforeHover: {
			position: 'absolute',
			height: '',
			width: '',
			moveRight: '0px',
			moveDown: '0px',
			background: '#CCCCCC',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#CCCCCC',
			boxShadow: '',
			transform: '',
		},
		StyleBeforeActive: {
			position: 'absolute',
			height: '',
			width: '',
			moveRight: '0px',
			moveDown: '0px',
			background: '#CCCCCC',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#CCCCCC',
			boxShadow: '',
			transform: '',
		},
		mainElementAnime: {
			position: 'absolute',
			top: '30px',
			left: '380px',
			height: '400px',
			width: '380px',
			background: '#555555',
			boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
			zIndex: '9',
			
			visibility: 'hidden',
			opacity: '0',
			transition: '0.1s',
		},
		pseudoElementAnime: {
			position: 'absolute',
			top: '440px',
			left: '380px',
			height: '400px',
			width: '380px',
			background: '#555555',
			boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
			zIndex: '9',
			
			visibility: 'hidden',
			opacity: '0',
			transition: '0.1s',
		},
		Codes: {
			Main: '',
			MainHover: '',
			MainActive: '',
			Before: '',
			BeforeHover: '',
			BeforeActive: '',
		}
	},
	methods: {
		AddCSS: function(code){
			var style = document.createElement('style');
			style.type = 'text/css';
			style.rel = 'stylesheet';
			//for Chrome Firefox Opera Safari
			style.appendChild(document.createTextNode(code));
			//for IE
			//style.styleSheet.cssText = code;
			var head = document.getElementsByTagName('head')[0];
			head.appendChild(style);
		},
		changeMain: function(){
			this.AddCSS('#E1{height:'+this.StyleE1.height+';width:'+this.StyleE1.width+';top:'+this.StyleE1.top+';left:'+this.StyleE1.left+';background:'+this.StyleE1.background+';z-index:'+this.StyleE1.zIndex+';opacity:'+this.StyleE1.opacity+';border-radius:'+this.StyleE1.borderRadius+';border:'+this.StyleE1.border+';border-color:'+this.StyleE1.borderColor+';box-shadow:'+this.StyleE1.boxShadow+';transform-origin:'+this.StyleE1.transformOrigin+';}');
			this.Codes.Main = '#E1{position:absolute;height:'+this.StyleE1.height+';width:'+this.StyleE1.width+';top:'+this.StyleE1.top+';left:'+this.StyleE1.left+';background:'+this.StyleE1.background+';z-index:'+this.StyleE1.zIndex+';opacity:'+this.StyleE1.opacity+';border-radius:'+this.StyleE1.borderRadius+';border:'+this.StyleE1.border+';border-color:'+this.StyleE1.borderColor+';box-shadow:'+this.StyleE1.boxShadow+';transform-origin:'+this.StyleE1.transformOrigin+';transition:'+this.StyleE1.transition+';transition-delay:'+this.StyleE1.transitionDelay+';transition-timing-function:cubic-bezier('+ this.StyleE1.transitionTimingFunction+');}';
			this.StyleHover.background = this.StyleE1.background;
			this.StyleActive.background = this.StyleE1.background;
		},
		changeMainTransition: function(){
			this.AddCSS('#E1{transition:'+this.StyleE1.transition+';transition-delay:'+this.StyleE1.transitionDelay+';transition-timing-function:cubic-bezier('+ this.StyleE1.transitionTimingFunction+');}');
			this.Codes.Main = '#E1{position:absolute;height:'+this.StyleE1.height+';width:'+this.StyleE1.width+';top:'+this.StyleE1.top+';left:'+this.StyleE1.left+';background:'+this.StyleE1.background+';z-index:'+this.StyleE1.zIndex+';opacity:'+this.StyleE1.opacity+';border-radius:'+this.StyleE1.borderRadius+';border:'+this.StyleE1.border+';border-color:'+this.StyleE1.borderColor+';box-shadow:'+this.StyleE1.boxShadow+';transform-origin:'+this.StyleE1.transformOrigin+';transition:'+this.StyleE1.transition+';transition-delay:'+this.StyleE1.transitionDelay+';transition-timing-function:cubic-bezier('+ this.StyleE1.transitionTimingFunction+');}';
		},
		changeHover: function(){
			this.AddCSS('#E1:hover{height:'+this.StyleHover.height+';width:'+this.StyleHover.width+';transform:translate('+this.StyleHover.moveRight+','+this.StyleHover.moveDown+');background:'+this.StyleHover.background+';opacity:'+this.StyleHover.opacity+';border-radius:'+this.StyleHover.borderRadius+';border:'+this.StyleHover.border+';border-color:'+this.StyleHover.borderColor+';box-shadow:'+this.StyleHover.boxShadow+';transform:rotate('+this.StyleHover.transform+'deg);}');
			this.Codes.MainHover = '#E1:hover{height:'+this.StyleHover.height+';width:'+this.StyleHover.width+';transform:translate('+this.StyleHover.moveRight+','+this.StyleHover.moveDown+');background:'+this.StyleHover.background+';opacity:'+this.StyleHover.opacity+';border-radius:'+this.StyleHover.borderRadius+';border:'+this.StyleHover.border+';border-color:'+this.StyleHover.borderColor+';box-shadow:'+this.StyleHover.boxShadow+';transform:rotate('+this.StyleHover.transform+'deg);}';
		},
		changeActive: function(){
			this.AddCSS('#E1:active{height:'+this.StyleActive.height+';width:'+this.StyleActive.width+';transform:translate('+this.StyleActive.moveRight+','+this.StyleActive.moveDown+');background:'+this.StyleActive.background+';opacity:'+this.StyleActive.opacity+';border-radius:'+this.StyleActive.borderRadius+';border:'+this.StyleActive.border+';border-color:'+this.StyleActive.borderColor+';box-shadow:'+this.StyleActive.boxShadow+';transform:rotate('+this.StyleActive.transform+'deg);}');
			this.Codes.MainActive = '#E1:active{height:'+this.StyleActive.height+';width:'+this.StyleActive.width+';transform:translate('+this.StyleActive.moveRight+','+this.StyleActive.moveDown+');background:'+this.StyleActive.background+';opacity:'+this.StyleActive.opacity+';border-radius:'+this.StyleActive.borderRadius+';border:'+this.StyleActive.border+';border-color:'+this.StyleActive.borderColor+';box-shadow:'+this.StyleActive.boxShadow+';transform:rotate('+this.StyleActive.transform+'deg);}';
		},
		changeBefore: function(){
			this.AddCSS('#E1:before{height:'+this.StyleBefore.height+';width:'+this.StyleBefore.width+';top:'+this.StyleBefore.top+';left:'+this.StyleBefore.left+';background:'+this.StyleBefore.background+';z-index:'+this.StyleBefore.zIndex+';opacity:'+this.StyleBefore.opacity+';border-radius:'+this.StyleBefore.borderRadius+';border:'+this.StyleBefore.border+';border-color:'+this.StyleBefore.borderColor+';box-shadow:'+this.StyleBefore.boxShadow+';transform-origin:'+this.StyleBefore.transformOrigin+';}');
			this.Codes.Before = '#E1:before{content:url();position:absolute;height:'+this.StyleBefore.height+';width:'+this.StyleBefore.width+';top:'+this.StyleBefore.top+';left:'+this.StyleBefore.left+';background:'+this.StyleBefore.background+';z-index:'+this.StyleBefore.zIndex+';opacity:'+this.StyleBefore.opacity+';border-radius:'+this.StyleBefore.borderRadius+';border:'+this.StyleBefore.border+';border-color:'+this.StyleBefore.borderColor+';box-shadow:'+this.StyleBefore.boxShadow+';transform-origin:'+this.StyleBefore.transformOrigin+';transition:'+this.StyleBefore.transition+';transition-delay:'+this.StyleBefore.transitionDelay+';transition-timing-function:cubic-bezier('+ this.StyleBefore.transitionTimingFunction+');}';
			this.StyleBeforeHover.background = this.StyleBefore.background;
			this.StyleBeforeActive.background = this.StyleBefore.background;
		},
		changeBeforeTransition: function(){
			this.AddCSS('#E1:before{transition:'+this.StyleBefore.transition+';transition-delay:'+this.StyleBefore.transitionDelay+';transition-timing-function:cubic-bezier('+ this.StyleBefore.transitionTimingFunction+');}');
			this.Codes.Before = '#E1:before{content:url();position:absolute;height:'+this.StyleBefore.height+';width:'+this.StyleBefore.width+';top:'+this.StyleBefore.top+';left:'+this.StyleBefore.left+';background:'+this.StyleBefore.background+';z-index:'+this.StyleBefore.zIndex+';opacity:'+this.StyleBefore.opacity+';border-radius:'+this.StyleBefore.borderRadius+';border:'+this.StyleBefore.border+';border-color:'+this.StyleBefore.borderColor+';box-shadow:'+this.StyleBefore.boxShadow+';transform-origin:'+this.StyleBefore.transformOrigin+';transition:'+this.StyleBefore.transition+';transition-delay:'+this.StyleBefore.transitionDelay+';transition-timing-function:cubic-bezier('+ this.StyleBefore.transitionTimingFunction+');}';
		},
		changeBeforeHover: function(){
			this.AddCSS('#E1:hover:before{height:'+this.StyleBeforeHover.height+';width:'+this.StyleBeforeHover.width+';transform:translate('+this.StyleBeforeHover.moveRight+','+this.StyleBeforeHover.moveDown+');background:'+this.StyleBeforeHover.background+';opacity:'+this.StyleBeforeHover.opacity+';border-radius:'+this.StyleBeforeHover.borderRadius+';border:'+this.StyleBeforeHover.border+';border-color:'+this.StyleBeforeHover.borderColor+';box-shadow:'+this.StyleBeforeHover.boxShadow+';transform:rotate('+this.StyleBeforeHover.transform+'deg);}');
			this.Codes.BeforeHover = '#E1:hover:before{height:'+this.StyleBeforeHover.height+';width:'+this.StyleBeforeHover.width+';transform:translate('+this.StyleBeforeHover.moveRight+','+this.StyleBeforeHover.moveDown+');background:'+this.StyleBeforeHover.background+';opacity:'+this.StyleBeforeHover.opacity+';border-radius:'+this.StyleBeforeHover.borderRadius+';border:'+this.StyleBeforeHover.border+';border-color:'+this.StyleBeforeHover.borderColor+';box-shadow:'+this.StyleBeforeHover.boxShadow+';transform:rotate('+this.StyleBeforeHover.transform+'deg);}';
		},
		changeBeforeActive: function(){
			this.AddCSS('#E1:active:before{height:'+this.StyleBeforeActive.height+';width:'+this.StyleBeforeActive.width+';transform:translate('+this.StyleBeforeActive.moveRight+','+this.StyleBeforeActive.moveDown+');background:'+this.StyleBeforeActive.background+';opacity:'+this.StyleBeforeActive.opacity+';border-radius:'+this.StyleBeforeActive.borderRadius+';border:'+this.StyleBeforeActive.border+';border-color:'+this.StyleBeforeActive.borderColor+';box-shadow:'+this.StyleBeforeActive.boxShadow+';transform:rotate('+this.StyleBeforeActive.transform+'deg);}');
			this.Codes.BeforeActive = '#E1:active:before{height:'+this.StyleBeforeActive.height+';width:'+this.StyleBeforeActive.width+';transform:translate('+this.StyleBeforeActive.moveRight+','+this.StyleBeforeActive.moveDown+');background:'+this.StyleBeforeActive.background+';opacity:'+this.StyleBeforeActive.opacity+';border-radius:'+this.StyleBeforeActive.borderRadius+';border:'+this.StyleBeforeActive.border+';border-color:'+this.StyleBeforeActive.borderColor+';box-shadow:'+this.StyleBeforeActive.boxShadow+';transform:rotate('+this.StyleBeforeActive.transform+'deg);}';
		},
		mainAnimeShow: function(){
			var a1 = document.getElementById('anime1').style;//修改按钮样式
			if(this.mainElementAnime.opacity=='0'){
				a1.background = "#5980F3";
				a1.color = "#EEEEEE";
				this.mainElementAnime.visibility = 'visible';
				this.mainElementAnime.opacity = '1';
				this.mainElementAnime.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.4)';
			}else{
				a1.background = "#EEEEEE";
				a1.color = "#222222";
				this.mainElementAnime.opacity = '0';
				this.mainElementAnime.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0)';
				this.mainElementAnime.visibility = 'hidden';
				//display与transition冲突，此处visibility同样可以实现隐藏后不可点击，且不冲突。
			}
		},
		pseudoAnimeShow: function(){
			var a2 = document.getElementById('anime2').style;//修改按钮样式
			if(this.pseudoElementAnime.opacity=='0'){
				a2.background = "#5980F3";
				a2.color = "#EEEEEE";
				this.pseudoElementAnime.visibility = 'visible';
				this.pseudoElementAnime.opacity = '1';
				this.pseudoElementAnime.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.4)';
			}else{
				a2.background = "#EEEEEE";
				a2.color = "#222222";
				this.pseudoElementAnime.opacity = '0';
				this.pseudoElementAnime.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0)';
				this.pseudoElementAnime.visibility = 'hidden';
				//display与transition冲突，此处visibility同样可以实现隐藏后不可点击，且不冲突。
			}
		},
		fill: function(){
			this.StyleE1.width = 'px';this.StyleE1.height = 'px';this.StyleE1.borderRadius = 'px';
			this.StyleE1.border = 'px solid';this.StyleE1.boxShadow = 'px px px rgba(0,0,0,0.25)';this.StyleE1.transformOrigin = 'px px';
			this.StyleHover.width = 'px';this.StyleHover.height = 'px';this.StyleHover.borderRadius = 'px';
			this.StyleHover.border = 'px solid';this.StyleHover.boxShadow = 'px px px rgba(0,0,0,0.25)';
			this.StyleActive.width = 'px';this.StyleActive.height = 'px';this.StyleActive.borderRadius = 'px';
			this.StyleActive.border = 'px solid';this.StyleActive.boxShadow = 'px px px rgba(0,0,0,0.25)';
			this.StyleBefore.width = 'px';this.StyleBefore.height = 'px';this.StyleBefore.borderRadius = 'px';
			this.StyleBefore.border = 'px solid';this.StyleBefore.boxShadow = 'px px px rgba(0,0,0,0.25)';this.StyleBefore.transformOrigin = 'px px';
			this.StyleBeforeHover.width = 'px';this.StyleBeforeHover.height = 'px';this.StyleBeforeHover.borderRadius = 'px';
			this.StyleBeforeHover.border = 'px solid';this.StyleBeforeHover.boxShadow = 'px px px rgba(0,0,0,0.25)';
			this.StyleBeforeActive.width = 'px';this.StyleBeforeActive.height = 'px';this.StyleBeforeActive.borderRadius = 'px';
			this.StyleBeforeActive.border = 'px solid';this.StyleBeforeActive.boxShadow = 'px px px rgba(0,0,0,0.25)';
		},
		canvas: function(){
			var obj = document.getElementById('color');
			if(window.getComputedStyle(obj).display == 'none'){
				obj.style.display = 'block';
			}else{
				obj.style.display = 'none';
			}
		},
		changeCanvas: function(){
			var color = document.getElementById('color');
			document.getElementById('canvas').style.background = color.value;
			color.style.display = 'none';
		},
		help: function(){
			var help = document.getElementById('help-place');
			if(window.getComputedStyle(help).display == 'none'){
				document.getElementById('codes-place').style.display = 'none';
				help.style.display = 'block';
			}else{
				help.style.display = 'none';
			}
		},
		codes: function(){
			var code = document.getElementById('codes-place');
			if(window.getComputedStyle(code).display == 'none'){
				document.getElementById('help-place').style.display = 'none';
				code.style.display = 'block';
			}else{
				code.style.display = 'none';
			}
		}
	}
});







//储存对象到localstorage
var project = {
	projectname: '',
	element1: '',
};
window.localStorage.setItem('localone',JSON.stringify(project));

function locate(){
	JSON.parse(localStorage.getItem('localone'));//先从localstorage中取出这个对象
	//然后进行渲染
	
	// var project = document.createElement('project');
	// document.getElementById('project-area').appendChild(project);
}


//命名规范：对象使用大驼峰AaaBbbCcc，方法使用小驼峰aaaBbbCcc