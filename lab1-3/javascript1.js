var box = document.getElementsByClassName("bbox");
		var rotateTimes = 1;
		
		box.onclick = function(){
			
            box.style.transform = 'rotateY('+180*rotateTimes+'deg)';
			rotateTimes++;
		}
