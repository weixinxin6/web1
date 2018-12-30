function changeEventFunc()
{
	var money=document.getElementById('mymoney');
	var sel=document.getElementById('sel')
	money.innerHTML=sel.value;
}
window.onload=function(){
	var div = document.getElementById("mmm");
	window.onscroll=function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			div.style.position="fixed";
		}else{
			div.style.position="static";
		}
	}
	var t = setInterval(show, 20); 
}
function fun1(){
	var a=document.getElementById("a1");
	animate(a,{right:0});
}
function fun2(){
	var b=document.getElementById("a2");
	animate(b,{right:0});
}
function fun3(){
	var c=document.getElementById("gou");
	animate(c,{right:0});
}
function fun4(){
	var d=document.getElementById("app2");
	var e=document.getElementById("e");
	var x=document.getElementById("er");
	animate(d,{right:0});
	x.style.opacity=0;
	animate(e,{right:15});
	e.style.opacity=1;
}
function fun5(){
	var a=document.getElementById("a1");
	animate(a,{right:-80});
}
function fun6(){
	var b=document.getElementById("a2");
	animate(b,{right:-80});
}
function fun7(){
	var c=document.getElementById("gou");
	animate(c,{right:-80});
}
function fun8(){
	var d=document.getElementById("app2");
	var e=document.getElementById("e");
	var x=document.getElementById("er");
	animate(d,{right:-80});
	x.style.opacity=1;
	animate(e,{right:-65});
	e.style.opacity=0;
}
function show() {
	var ul = document.getElementById("ulll");
    var top = ul.offsetTop-1;
    ul.style.top = top + "px";
    if (-1*ul.offsetTop >= ul.offsetHeight/2) {
        ul.style.top = 0;
    }
}