//Стиль body и отзывчивый дизайн
document.body.style.backgroundColor="cadetblue";
document.body.style.width="100%";
document.body.style.height="100%";
document.body.style.margin="auto 0px";
var style = document.createElement('style');
style.innerHTML = "@media screen and (max-width:800px){ul,p {font-size: 13px;}}@media screen and (max-width:500px) {ul,p {font-size: 10px;padding-left: 5px;list-style-type: none;}body {text-align: center;}@media screen and (max-width:450px) {ul,p {font-size: 7px;}}";
window.document.head.appendChild(style);
//Первый div
var div1 = document.createElement('div');
div1.id ="container";
//Стиль первого div
div1.style.width="1300px";
div1.style.height="800px";
div1.style.maxWidth="100%";
div1.style.position="absolute";
div1.style.top="50%";
div1.style.left="50%";
div1.style.transform="translate(-50%, -50%)";
//Конец
document.body.appendChild(div1);
var title = document.createElement('h1');
title.innerText="Resume";
title.style.textAlign="center";
div1.appendChild(title);
//Вставка заголовка в первый div
console.log(title);
var hr = document.createElement("hr")
div1.appendChild(hr);
//Создал второй div для размещения изображения и имя
var div2 = document.createElement('div');
//Стиль второго div
div2.style.width="23%";
div2.style.height="75%";
div2.style.margin="0px 20px"
div2.style.position="absolute";
div2.style.textAlign="center";
div2.style.float="left";
//Конец
var img = document.createElement("img");
img.src="dfg.jpg";
img.style.width="83.3%";
img.style.position="absolute";
img.style.left="50%";
img.style.top="50%";
img.style.transform="translate(-50%, -50%)";
img.style.borderRadius="20px";
div2.appendChild(img);
//Для хранения имен
var dname = document.createElement("div");
dname.innerText ="Чан Лэ";
dname.style.top="75%";
dname.style.height="10%";
dname.style.width="100%"
dname.style.position="absolute";
dname.style.textAlign="center";
dname.style.lineHeight="35px";
dname.style.fontSize="25px";
dname.style.transition="all 3s ease"
div2.appendChild(dname);
div1.appendChild(div2);
//Для хранения дополнительной информации
var div3 = document.createElement("div");
div3.id="box2";
div3.style.right="5%";
div3.style.height="100%";
div3.style.width="65.3%"
div3.style.position="absolute";
div1.appendChild(div3);
var subbox1 = document.createElement("div");
subbox1.innerHTML = "<p><b> &nbsp;ЛИЧНАЯ ИНФОРМАЦИЯ</b></p><ul><li><b>Гражданство:</b><br>Китайская Народная Республика</li><li><b>Место проживания:</b><br>Ростов-на-дону</li><li><b>Пол:</b><br>Мужской</li><li><b>Дата рождения:</b><br>23 мая 2000</li></ul>";
subbox1.style.width="47%"
subbox1.style.height="33%";
subbox1.style.backgroundColor="rgba(63, 63, 63, 0.45)";
subbox1.style.color="rgba(255, 255, 255, 0.85)";
subbox1.style.backdropFilter="blur(10px)";
subbox1.style.margin="auto";
subbox1.style.boxSizing="border-box";
subbox1.style.position="absolute";
subbox1.style.left="5%";
subbox1.style.marginTop="20px";
subbox1.style.borderRadius="20px";
div3.appendChild(subbox1);
var subbox2 = document.createElement("div");
subbox2.innerHTML = "<p><b>&nbsp; НАВЫК</b></p><ul><li>Веб-дизайн c HTML и CSS</li></ul>";
subbox2.style.width="47%"
subbox2.style.height="33%";
subbox2.style.backgroundColor="rgba(63, 63, 63, 0.45)";
subbox2.style.color="rgba(255, 255, 255, 0.85)";
subbox2.style.backdropFilter="blur(10px)";
subbox2.style.margin="auto";
subbox2.style.boxSizing="border-box";
subbox2.style.position="absolute";
subbox2.style.left="57%";
subbox2.style.marginTop="20px";
subbox2.style.borderRadius="20px";
div3.appendChild(subbox2);
var subbox3 = document.createElement("div");
subbox3.innerHTML = "<p><b>&nbsp; ОБРАЗАВАНИЕ</b></p><ul><li><b>Уровень:</b><br>Высшее</li><li><b>Учебное заведение:</b><br>Южный федеральный университет</li><li><b>Направление:</b><br>Прикладная Информатика</li><li><b>Квалификация:</b><br>Бакалавр</li></ul>";
subbox3.style.width="47%"
subbox3.style.height="33%";
subbox3.style.backgroundColor="rgba(63, 63, 63, 0.45)";
subbox3.style.color="rgba(255, 255, 255, 0.85)";
subbox3.style.backdropFilter="blur(10px)";
subbox3.style.margin="auto";
subbox3.style.boxSizing="border-box";
subbox3.style.position="absolute";
subbox3.style.left="5%";
subbox3.style.top="35%"
subbox3.style.marginTop="20px";
subbox3.style.borderRadius="20px";
div3.appendChild(subbox3);
var subbox4 = document.createElement("div");
subbox4.innerHTML = "<p><b> &nbsp;ЯЗЫКИ</b></p><ul><li>Китайский</li><li>Английский</li><li>Русский</li></ul>";
subbox4.style.width="47%"
subbox4.style.height="33%";
subbox4.style.backgroundColor="rgba(63, 63, 63, 0.45)";
subbox4.style.color="rgba(255, 255, 255, 0.85)";
subbox4.style.backdropFilter="blur(10px)";
subbox4.style.margin="auto";
subbox4.style.boxSizing="border-box";
subbox4.style.position="absolute";
subbox4.style.left="57%";
subbox4.style.top="35%"
subbox4.style.right="5%"
subbox4.style.marginTop="20px";
subbox4.style.borderRadius="20px";
div3.appendChild(subbox4);
var subbox5 = document.createElement("div");
subbox5.innerHTML ="<p><b>&nbsp;КОНТАКТЫ</b></p><ul><li><b>Телефон:</b><br>+7(909)422-28-86</li><li><b>E-mail:</b><br>sadfas@gmail.com</li><li><b>Адрес:</b><br>ул. Зорге, 21В, Ростов-на-Дону, Ростовская обл.</li></ul>";
subbox5.style.width="47%"
subbox5.style.height="33%";
subbox5.style.backgroundColor="rgba(63, 63, 63, 0.45)";
subbox5.style.color="rgba(255, 255, 255, 0.85)";
subbox5.style.backdropFilter="blur(10px)";
subbox5.style.margin="auto";
subbox5.style.boxSizing="border-box";
subbox5.style.position="absolute";
subbox5.style.left="5%";
subbox5.style.top="70%"
subbox5.style.height="29%"
subbox5.style.width="100%"
subbox5.style.marginTop="20px";
subbox5.style.borderRadius="20px";
div3.appendChild(subbox5);


var rotateTimes = 1;
dname.onclick = function(){
	dname.style.transform = 'rotateY('+180*rotateTimes+'deg)';
	rotateTimes++;
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

fadein(img);