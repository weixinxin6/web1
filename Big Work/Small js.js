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
}
function funn1(){
	var a=document.getElementById("rong1");
	var b=document.getElementById("rong");
	var c=document.getElementById("ml");
	b.style.display="none";
	a.style.display="block";
	c.innerHTML="\"200ml\"";
}
function funn2(){
	var a=document.getElementById("rong1");
	var b=document.getElementById("rong");
	var c=document.getElementById("ml");
	b.style.display="block";
	a.style.display="none";
	c.innerHTML="\"150ml\"";
}
function add(){
	var a=document.getElementById("ku");
	var b=document.getElementById("jia");
	var c=document.getElementById("jian");
	if(a.value>=5){
		b.style.cursor="not-allowed";
	}
	else{
		a.value++;
		if(a.value==5){
			b.style.cursor="not-allowed";
		}
		c.style.cursor="pointer";
	}
}
function jian(){
	var a=document.getElementById("ku");
	var b=document.getElementById("jian");
	var c=document.getElementById("jia");
	if(a.value<=1){
		b.style.cursor="not-allowed";
		c.style.cursor="pointer";
	}
	else{
		b.style.cursor="pointer";
		a.value--;
		c.style.cursor="pointer";
		if(a.value==1){
			b.style.cursor="not-allowed";
		}
	}
}
function fun3(){
	var b=document.getElementById("meng");
	var c=document.getElementById("wh");
	b.style.display="block";
	b.style.opacity=0.5; 
	c.style.display="block";
}
function fun4(){
	var b=document.getElementById("meng");
	var c=document.getElementById("wh");
	b.style.display="none"; 
	c.style.display="none";
}
function fun5(){
	var a=document.getElementById("sp0");
	var b=document.getElementById("sp1");
	var c=document.getElementById("ppp2");
	var d=document.getElementById("ppp1");
	if(a.style.borderStyle=="none"){
		a.style.border="#ff9003 2px solid";
		b.style.borderStyle="none";
		c.style.display="none";
		d.style.display="block";
	}
	else{
		a.style.borderStyle="none";
	}
}
function fun6(){
	var a=document.getElementById("sp0");
	var b=document.getElementById("sp1");
	var c=document.getElementById("ppp2");
	var d=document.getElementById("ppp1");
	if(b.style.borderStyle=="none"){
		b.style.border="#ff9003 2px solid";
		a.style.borderStyle="none";
		c.style.display="block";
		d.style.display="none";
	}
	else{
		b.style.borderStyle="none";
	}
}