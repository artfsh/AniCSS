var main = new Vue({
	el: '#main',
	data: {
		Canvas: {
			background: '#E5E5E5',
		},
		StyleE1: {
			position: 'absolute',
			height: '',
			width: '',
			top: '400',
			left: '500',
			background: '#333333',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#333333',
			boxShadow: '',
			
			transition: '',
			transitionDelay: '',
			transitionTimingFunction: '',
			transformOrigin: '',
		},
		StyleBefore: {
			position: 'absolute',
			height: '',
			width: '',
			top: '0',
			left: '0',
			background: '#333333',
			zIndex: '',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#333333',
			boxShadow: '',
			
			transition: '',
			transitionDelay: '',
			transitionTimingFunction: '',
			transformOrigin: '',
		},
		StyleAfter: {
			position: 'absolute',
			height: '',
			width: '',
			top: '0',
			left: '0',
			background: '#333333',
			zIndex: '',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#333333',
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
			moveRight: '0',
			moveDown: '0',
			background: '#333333',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#333333',
			boxShadow: '',
			transform: '',
		},
		StyleBeforeHover: {
			position: 'absolute',
			height: '',
			width: '',
			moveRight: '0',
			moveDown: '0',
			background: '#333333',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#333333',
			boxShadow: '',
			transform: '',
		},
		StyleAfterHover: {
			position: 'absolute',
			height: '',
			width: '',
			moveRight: '0',
			moveDown: '0',
			background: '#333333',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#333333',
			boxShadow: '',
			transform: '',
		},
		StyleActive: {
			position: 'absolute',
			height: '',
			width: '',
			moveRight: '0',
			moveDown: '0',
			background: '#333333',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#333333',
			boxShadow: '',
			transform: '',
		},
		StyleBeforeActive: {
			position: 'absolute',
			height: '',
			width: '',
			moveRight: '0',
			moveDown: '0',
			background: '#333333',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#333333',
			boxShadow: '',
			transform: '',
		},
		StyleAfterActive: {
			position: 'absolute',
			height: '',
			width: '',
			moveRight: '0',
			moveDown: '0',
			background: '#333333',
			opacity: '',
			borderRadius: '',
			border: '',
			borderColor: '#333333',
			boxShadow: '',
			transform: '',
		},
		Codes: {
			Main: '',
			Before: '',
			After: '',
			MainHover: '',
			BeforeHover: '',
			AfterHover: '',
			MainActive: '',
			BeforeActive: '',
			AfterActive: '',
		},
		state1: {
			position: 'absolute',
			left: '10px',
			height: '40px',
			width: '112px',
			borderRadius: '99px',
			backgroundColor: 'rgba(89, 128, 243, 1)',
			lineHeight: '40px',
			textAlign: 'center',
			color: '#ffffff',
			fontSize: '15px',
		},
		state2: {
			position: 'absolute',
			left: '124px',
			height: '40px',
			width: '112px',
			borderRadius: '99px',
			backgroundColor: 'rgba(89, 128, 243, 0)',
			lineHeight: '40px',
			textAlign: 'center',
			color: '#333333',
			fontSize: '15px',
		},
		state3: {
			position: 'absolute',
			left: '238px',
			height: '40px',
			width: '112px',
			borderRadius: '99px',
			backgroundColor: 'rgba(89, 128, 243, 0)',
			lineHeight: '40px',
			textAlign: 'center',
			color: '#333333',
			fontSize: '15px',
		}
	},
	methods: {
		turnNormal: function(){
			this.state1.color = "#ffffff";
			this.state1.backgroundColor = "rgba(89, 128, 243, 1)";
			this.state2.color = "#333333";
			this.state2.backgroundColor = "rgba(89, 128, 243, 0)";
			this.state3.color = "#333333";
			this.state3.backgroundColor = "rgba(89, 128, 243, 0)";
			document.getElementById('normal').style.display = "block";
			document.getElementById('hover').style.display = "none";
			document.getElementById('active').style.display = "none";
		},
		turnHover: function(){
			this.state2.color = "#ffffff";
			this.state2.backgroundColor = "rgba(89, 128, 243, 1)";
			this.state1.color = "#333333";
			this.state1.backgroundColor = "rgba(89, 128, 243, 0)";
			this.state3.color = "#333333";
			this.state3.backgroundColor = "rgba(89, 128, 243, 0)";
			document.getElementById('normal').style.display = "none";
			document.getElementById('hover').style.display = "block";
			document.getElementById('active').style.display = "none";
		},
		turnActive: function(){
			this.state3.color = "#ffffff";
			this.state3.backgroundColor = "rgba(89, 128, 243, 1)";
			this.state2.color = "#333333";
			this.state2.backgroundColor = "rgba(89, 128, 243, 0)";
			this.state1.color = "#333333";
			this.state1.backgroundColor = "rgba(89, 128, 243, 0)";
			document.getElementById('normal').style.display = "none";
			document.getElementById('hover').style.display = "none";
			document.getElementById('active').style.display = "block";
		},
		AddCSS: function(code){
			var style = document.createElement('style');
			style.type = 'text/css';
			style.rel = 'stylesheet';
			style.appendChild(document.createTextNode(code));
			var head = document.getElementsByTagName('head')[0];
			head.appendChild(style);
		},
		changeMain: function(){
			this.AddCSS('#E1{height:'+this.StyleE1.height+'px;width:'+this.StyleE1.width+'px;top:'+this.StyleE1.top+'px;left:'+this.StyleE1.left+'px;background:'+this.StyleE1.background+';opacity:'+this.StyleE1.opacity+';border-radius:'+this.StyleE1.borderRadius+'px;border:'+this.StyleE1.border+'px solid;border-color:'+this.StyleE1.borderColor+';box-shadow:'+this.StyleE1.boxShadow+';transform-origin:'+this.StyleE1.transformOrigin+';transition:'+this.StyleE1.transition+'s;transition-delay:'+this.StyleE1.transitionDelay+'s;transition-timing-function:cubic-bezier('+ this.StyleE1.transitionTimingFunction+');}');
			this.Codes.Main = '#E1{position:absolute;height:'+this.StyleE1.height+'px;width:'+this.StyleE1.width+'px;top:'+this.StyleE1.top+'px;left:'+this.StyleE1.left+'px;background:'+this.StyleE1.background+';opacity:'+this.StyleE1.opacity+';border-radius:'+this.StyleE1.borderRadius+'px;border:'+this.StyleE1.border+'px solid;border-color:'+this.StyleE1.borderColor+';box-shadow:'+this.StyleE1.boxShadow+';transform-origin:'+this.StyleE1.transformOrigin+';transition:'+this.StyleE1.transition+'s;transition-delay:'+this.StyleE1.transitionDelay+'s;transition-timing-function:cubic-bezier('+ this.StyleE1.transitionTimingFunction+');}';
			this.StyleHover.background = this.StyleE1.background;
			this.StyleActive.background = this.StyleE1.background;
		},
		changeBefore: function(){
			this.AddCSS('#E1:before{height:'+this.StyleBefore.height+'px;width:'+this.StyleBefore.width+'px;top:'+this.StyleBefore.top+'px;left:'+this.StyleBefore.left+'px;background:'+this.StyleBefore.background+';opacity:'+this.StyleBefore.opacity+';border-radius:'+this.StyleBefore.borderRadius+'px;border:'+this.StyleBefore.border+'px solid;border-color:'+this.StyleBefore.borderColor+';box-shadow:'+this.StyleBefore.boxShadow+';transform-origin:'+this.StyleBefore.transformOrigin+';transition:'+this.StyleBefore.transition+'s;transition-delay:'+this.StyleBefore.transitionDelay+'s;transition-timing-function:cubic-bezier('+ this.StyleBefore.transitionTimingFunction+');}');
			this.Codes.Before = '#E1:before{content:url();position:absolute;height:'+this.StyleBefore.height+'px;width:'+this.StyleBefore.width+'px;top:'+this.StyleBefore.top+'px;left:'+this.StyleBefore.left+'px;background:'+this.StyleBefore.background+';opacity:'+this.StyleBefore.opacity+';border-radius:'+this.StyleBefore.borderRadius+'px;border:'+this.StyleBefore.border+'px solid;border-color:'+this.StyleBefore.borderColor+';box-shadow:'+this.StyleBefore.boxShadow+';transform-origin:'+this.StyleBefore.transformOrigin+';transition:'+this.StyleBefore.transition+'s;transition-delay:'+this.StyleBefore.transitionDelay+'s;transition-timing-function:cubic-bezier('+ this.StyleBefore.transitionTimingFunction+');}';
			this.StyleBeforeHover.background = this.StyleBefore.background;
			this.StyleBeforeActive.background = this.StyleBefore.background;
		},
		changeAfter: function(){
			this.AddCSS('#E1:after{height:'+this.StyleAfter.height+'px;width:'+this.StyleAfter.width+'px;top:'+this.StyleAfter.top+'px;left:'+this.StyleAfter.left+'px;background:'+this.StyleAfter.background+';opacity:'+this.StyleAfter.opacity+';border-radius:'+this.StyleAfter.borderRadius+'px;border:'+this.StyleAfter.border+'px solid;border-color:'+this.StyleAfter.borderColor+';box-shadow:'+this.StyleAfter.boxShadow+';transform-origin:'+this.StyleAfter.transformOrigin+';transition:'+this.StyleAfter.transition+'s;transition-delay:'+this.StyleAfter.transitionDelay+'s;transition-timing-function:cubic-bezier('+ this.StyleAfter.transitionTimingFunction+');}');
			this.Codes.After = '#E1:after{content:url();position:absolute;height:'+this.StyleAfter.height+'px;width:'+this.StyleAfter.width+'px;top:'+this.StyleAfter.top+'px;left:'+this.StyleAfter.left+'px;background:'+this.StyleAfter.background+';opacity:'+this.StyleAfter.opacity+';border-radius:'+this.StyleAfter.borderRadius+'px;border:'+this.StyleAfter.border+'px solid;border-color:'+this.StyleAfter.borderColor+';box-shadow:'+this.StyleAfter.boxShadow+';transform-origin:'+this.StyleAfter.transformOrigin+';transition:'+this.StyleAfter.transition+'s;transition-delay:'+this.StyleAfter.transitionDelay+'s;transition-timing-function:cubic-bezier('+ this.StyleAfter.transitionTimingFunction+');}';
			this.StyleAfterHover.background = this.StyleAfter.background;
			this.StyleAfterActive.background = this.StyleAfter.background;
		},
		changeHover: function(){			
			this.AddCSS('#E1:hover{height:'+this.StyleHover.height+'px;width:'+this.StyleHover.width+'px;transform:translate('+this.StyleHover.moveRight+'px,'+this.StyleHover.moveDown+'px);background:'+this.StyleHover.background+';opacity:'+this.StyleHover.opacity+';border-radius:'+this.StyleHover.borderRadius+'px;border:'+this.StyleHover.border+'px solid;border-color:'+this.StyleHover.borderColor+';box-shadow:'+this.StyleHover.boxShadow+';transform:rotate('+this.StyleHover.transform+'deg);}');
			this.Codes.MainHover = '#E1:hover{height:'+this.StyleHover.height+'px;width:'+this.StyleHover.width+'px;transform:translate('+this.StyleHover.moveRight+'px,'+this.StyleHover.moveDown+'px);background:'+this.StyleHover.background+';opacity:'+this.StyleHover.opacity+';border-radius:'+this.StyleHover.borderRadius+'px;border:'+this.StyleHover.border+'px solid;border-color:'+this.StyleHover.borderColor+';box-shadow:'+this.StyleHover.boxShadow+';transform:rotate('+this.StyleHover.transform+'deg);}';
		},
		changeBeforeHover: function(){
			this.AddCSS('#E1:hover:before{height:'+this.StyleBeforeHover.height+'px;width:'+this.StyleBeforeHover.width+'px;transform:translate('+this.StyleBeforeHover.moveRight+'px,'+this.StyleBeforeHover.moveDown+'px);background:'+this.StyleBeforeHover.background+';opacity:'+this.StyleBeforeHover.opacity+';border-radius:'+this.StyleBeforeHover.borderRadius+'px;border:'+this.StyleBeforeHover.border+'px solid;border-color:'+this.StyleBeforeHover.borderColor+';box-shadow:'+this.StyleBeforeHover.boxShadow+';transform:rotate('+this.StyleBeforeHover.transform+'deg);}');
			this.Codes.BeforeHover = '#E1:hover:before{height:'+this.StyleBeforeHover.height+'px;width:'+this.StyleBeforeHover.width+'px;transform:translate('+this.StyleBeforeHover.moveRight+'px,'+this.StyleBeforeHover.moveDown+'px);background:'+this.StyleBeforeHover.background+';opacity:'+this.StyleBeforeHover.opacity+';border-radius:'+this.StyleBeforeHover.borderRadius+'px;border:'+this.StyleBeforeHover.border+'px solid;border-color:'+this.StyleBeforeHover.borderColor+';box-shadow:'+this.StyleBeforeHover.boxShadow+';transform:rotate('+this.StyleBeforeHover.transform+'deg);}';
		},
		changeAfterHover: function(){
			this.AddCSS('#E1:hover:after{height:'+this.StyleAfterHover.height+'px;width:'+this.StyleAfterHover.width+'px;transform:translate('+this.StyleAfterHover.moveRight+'px,'+this.StyleAfterHover.moveDown+'px);background:'+this.StyleAfterHover.background+';opacity:'+this.StyleAfterHover.opacity+';border-radius:'+this.StyleAfterHover.borderRadius+'px;border:'+this.StyleAfterHover.border+'px solid;border-color:'+this.StyleAfterHover.borderColor+';box-shadow:'+this.StyleAfterHover.boxShadow+';transform:rotate('+this.StyleAfterHover.transform+'deg);}');
			this.Codes.AfterHover = '#E1:hover:after{height:'+this.StyleAfterHover.height+'px;width:'+this.StyleAfterHover.width+'px;transform:translate('+this.StyleAfterHover.moveRight+'px,'+this.StyleAfterHover.moveDown+'px);background:'+this.StyleAfterHover.background+';opacity:'+this.StyleAfterHover.opacity+';border-radius:'+this.StyleAfterHover.borderRadius+'px;border:'+this.StyleAfterHover.border+'px solid;border-color:'+this.StyleAfterHover.borderColor+';box-shadow:'+this.StyleAfterHover.boxShadow+';transform:rotate('+this.StyleAfterHover.transform+'deg);}';
		},
		changeActive: function(){
			this.AddCSS('#E1:active{height:'+this.StyleActive.height+'px;width:'+this.StyleActive.width+'px;transform:translate('+this.StyleActive.moveRight+'px,'+this.StyleActive.moveDown+'px);background:'+this.StyleActive.background+';opacity:'+this.StyleActive.opacity+';border-radius:'+this.StyleActive.borderRadius+'px;border:'+this.StyleActive.border+'px solid;border-color:'+this.StyleActive.borderColor+';box-shadow:'+this.StyleActive.boxShadow+';transform:rotate('+this.StyleActive.transform+'deg);}');
			this.Codes.MainActive = '#E1:active{height:'+this.StyleActive.height+'px;width:'+this.StyleActive.width+'px;transform:translate('+this.StyleActive.moveRight+'px,'+this.StyleActive.moveDown+'px);background:'+this.StyleActive.background+';opacity:'+this.StyleActive.opacity+';border-radius:'+this.StyleActive.borderRadius+'px;border:'+this.StyleActive.border+'px solid;border-color:'+this.StyleActive.borderColor+';box-shadow:'+this.StyleActive.boxShadow+';transform:rotate('+this.StyleActive.transform+'deg);}';
		},
		changeBeforeActive: function(){
			this.AddCSS('#E1:active:before{height:'+this.StyleBeforeActive.height+'px;width:'+this.StyleBeforeActive.width+'px;transform:translate('+this.StyleBeforeActive.moveRight+'px,'+this.StyleBeforeActive.moveDown+'px);background:'+this.StyleBeforeActive.background+';opacity:'+this.StyleBeforeActive.opacity+';border-radius:'+this.StyleBeforeActive.borderRadius+'px;border:'+this.StyleBeforeActive.border+'px solid;border-color:'+this.StyleBeforeActive.borderColor+';box-shadow:'+this.StyleBeforeActive.boxShadow+';transform:rotate('+this.StyleBeforeActive.transform+'deg);}');
			this.Codes.BeforeActive = '#E1:active:before{height:'+this.StyleBeforeActive.height+'px;width:'+this.StyleBeforeActive.width+'px;transform:translate('+this.StyleBeforeActive.moveRight+'px,'+this.StyleBeforeActive.moveDown+'px);background:'+this.StyleBeforeActive.background+';opacity:'+this.StyleBeforeActive.opacity+';border-radius:'+this.StyleBeforeActive.borderRadius+'px;border:'+this.StyleBeforeActive.border+'px solid;border-color:'+this.StyleBeforeActive.borderColor+';box-shadow:'+this.StyleBeforeActive.boxShadow+';transform:rotate('+this.StyleBeforeActive.transform+'deg);}';
		},
		changeAfterActive: function(){
			this.AddCSS('#E1:active:after{height:'+this.StyleAfterActive.height+'px;width:'+this.StyleAfterActive.width+'px;transform:translate('+this.StyleAfterActive.moveRight+'px,'+this.StyleAfterActive.moveDown+'px);background:'+this.StyleAfterActive.background+';opacity:'+this.StyleAfterActive.opacity+';border-radius:'+this.StyleAfterActive.borderRadius+'px;border:'+this.StyleAfterActive.border+'px solid;border-color:'+this.StyleAfterActive.borderColor+';box-shadow:'+this.StyleAfterActive.boxShadow+';transform:rotate('+this.StyleAfterActive.transform+'deg);}');
			this.Codes.AfterActive = '#E1:active:after{height:'+this.StyleAfterActive.height+'px;width:'+this.StyleAfterActive.width+'px;transform:translate('+this.StyleAfterActive.moveRight+'px,'+this.StyleAfterActive.moveDown+'px);background:'+this.StyleAfterActive.background+';opacity:'+this.StyleAfterActive.opacity+';border-radius:'+this.StyleAfterActive.borderRadius+'px;border:'+this.StyleAfterActive.border+'px solid;border-color:'+this.StyleAfterActive.borderColor+';box-shadow:'+this.StyleAfterActive.boxShadow+';transform:rotate('+this.StyleAfterActive.transform+'deg);}';
		},
		canvas: function(){
			var obj = document.getElementById('color-place');
			if(window.getComputedStyle(obj).display == 'none'){
				document.getElementById('help-place').style.display = 'none';
				document.getElementById('codes-place').style.display = 'none';
				obj.style.display = 'block';
			}else{
				obj.style.display = 'none';
			}
		},
		help: function(){
			var help = document.getElementById('help-place');
			if(window.getComputedStyle(help).display == 'none'){
				document.getElementById('codes-place').style.display = 'none';
				document.getElementById('color-place').style.display = 'none';
				help.style.display = 'block';
			}else{
				help.style.display = 'none';
			}
		},
		codes: function(){
			var code = document.getElementById('codes-place');
			if(window.getComputedStyle(code).display == 'none'){
				document.getElementById('help-place').style.display = 'none';
				document.getElementById('color-place').style.display = 'none';
				code.style.display = 'block';
			}else{
				code.style.display = 'none';
			}
		},
		fastClose: function(){
			document.getElementById('codes-place').style.display = 'none';
			document.getElementById('color-place').style.display = 'none';
			document.getElementById('help-place').style.display = 'none';
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
	JSON.parse(localStorage.getItem('localone'));//从localstorage中取出这个对象
}


//命名规范：对象使用大驼峰AaaBbbCcc，方法使用小驼峰aaaBbbCcc