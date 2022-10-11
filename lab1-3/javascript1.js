
var box = document.getElementById("name");
console.log(box)
var rotateTimes = 1;

box.onclick = function(){
	
	box.style.transform = 'rotateY('+180*rotateTimes+'deg)';
	rotateTimes++;
}

function fadeIn(elemt, speed) { //淡入 0 ~ 1
	if(elemt.style.opacity == 0 && elemt.style.opacity != "") {
		var speed = speed || 16.6; //默认速度为16.6ms
		var num = 0; //累加器
		var timer = setInterval(function() {
			num++;
			elemt.style.opacity = num / 20;
			if(num >= 20) {
				clearInterval(timer);
			}
		}, speed);
	}
}

function fadeOut(elemt, speed) { //淡出 1 ~ 0
	if(elemt.style.opacity == 1 || elemt.style.opacity == "") {
		var speed = speed || 16.6; //默认速度为16.6ms
		var num = 20; //累剪器
		var timer = setInterval(function() {
			num--;
			elemt.style.opacity = num / 20;
			if(num == 0) {
				clearInterval(timer);
			}
		}, speed);
	}
}

function fadein(elemt)
{
	if(elemt.style.opacity == 0 || elemt.style.opacity != "")
	{
		var num = 0;
		var timer =setInterval(function()
		{
			num+=0.1;
			elemt.style.opacity = num;
			if(num >=1)
			{
				clearInterval(timer);
			}
		},100)
	}
}

window.onload = function() {
	var fadeInBtn = document.getElementById("fadeinbut");
	var fadeOutBtn = document.getElementById("fadeoutbut");
	console.log(fadeInBtn)
	var testBox = document.getElementById("testBox")
	console.log(testBox)
	fadeInBtn.onclick = function() {
		fadein(testBox);
	}
	fadeOutBtn.onclick = function() {
		fadeOut(testBox,10);
	}
	
}

fadein(testBox);


console.log(div);