// Star Dust - Background with twinkle stars
// This script and many more from :
// http://rainbow.arch.scriptmania.com

// Insert these lines just after the <BODY> tag .

//----   Choice of variables   ----\\
var widt=screen.width-25
var heig=930
var numb=200
//---------The description---------\\
/*
widt - the variable indicates the width of your page (you can change it as you like). 
heig - you can choose a height, e.g. 1000 px., whatever you like. 
numb - stars number (we have 200).
*/
//-----------  DO  NOT  Change  Below  this line -----------\\

//
//The script works both with Internet Explorer (4-6) and with Netscape (4,6).

var ns=document.layers?1:0
var ie4=document.all?1:0
var ns6=document.getElementById&&!document.all?1:0

var NN=(document.layers ? true:false)
colo=new Array(numb)
j=0
tx=""
if(ns)
{
	tx=tx+"<layer  left="+(widt-35)+" top="+(heig-35)+" ></layer>"
}
else
{
	document.write(".")
}
for (i=0; i <numb ; i++)
{
	x=Math.floor(Math.random()*widt)
	y=Math.floor(Math.random()*heig)
	wi=Math.random()*1.8+1
	col="#ffee99"
	n=0
	if (wi<1.2){col="#eeeeff";n=4}
	if (wi>2.6){col="#ffaa88";n=8}
	if (Math.random()>.7){nam="r"+j; colo[j]=n;j=j+1}
	else{nam=""}
wi=Math.floor(wi)
	he=wi
	if (ns)
	{
		tx=tx+"<layer z-Index=0 "+((nam)?"name="+nam:"")+" left="+x+" top="+y+" width="+wi+" height="+he+" bgColor="+col+"></layer>"
	}
	else
	{
		document.write("<div "+((nam)?"id="+nam:"")+"  style='z-index:0; position:absolute; left:"+x+";top:"+y+";width:"+wi+";height:"+he+";background:"+col+"'><img  width=1 height=1></div>")
	}
if(ns){document.write (tx);tx=""}

}

function recolor()
{
for (i=0; i<j; i++)
	{
		if (colo[i]==0){co=cols[Math.floor(Math.random()*4)]}
		if (colo[i]==4){co=cols[4+Math.floor(Math.random()*4)]}
		if (colo[i]==8){co=cols[8+Math.floor(Math.random()*4)]}
		
		if (ns) {document.layers["r"+i].bgColor=co}
		if (ie4){document.all["r"+i].style.background=co}
		if (ns6){document.getElementById("r"+i).style.background=co}
	}
}
cols=new Array("#ffee99","#eedd88","#ffffff","#ddcc77","#ccbb66","#eeeeff","#ddddee","#ccccdd","#bbbbcc","#ffffff","#ffaa88","#ee9977","#dd8866","#cc7755","#000000")
tim=window.setInterval("recolor()",250)