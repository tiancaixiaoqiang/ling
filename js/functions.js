var $window=$(window),gardenCtx,gardenCanvas,$garden,garden;

var clientWidth=$(window).width();  //获取窗口的宽度

	// console.log(clientWidth);
var clientHeight=$(window).height();//获取窗口的高度
	// console.log(clientHeight);

//一
$(function(){

	$loveHeart=$("#loveHeart");   //找到盒子的大小，然后往里面，画心

	var a=$loveHeart.width()/2;     //设置盒子的宽度的中心点

	var b=$loveHeart.height()/2-55; //设置盒子的高度的中心点

	$garden=$("#garden");   //找到canvas，然后画图         

	gardenCanvas=$garden[0];

	gardenCanvas.width=$("#loveHeart").width(); //获取宽度

	gardenCanvas.height=$("#loveHeart").height(); //获取高度

	gardenCtx=gardenCanvas.getContext("2d"); //用于绘制上下文，绘制平面用2d

	gardenCtx.globalCompositeOperation="lighter";//?

	garden=new Garden(gardenCtx,gardenCanvas); //引入garden

	$("#content").css("width",$loveHeart.width()+$("#code").width());

	$("#content").css("height",Math.max($loveHeart.height(),$("#code").height()));

	$("#content").css("margin-top",Math.max(($window.height()-$("#content").height())/2,10));

	$("#content").css("margin-left",Math.max(($window.width()-$("#content").width())/2,10));

	setInterval(function(){garden.render()},Garden.options.growSpeed)});

$(window).resize(function(){var b=$(window).width();

	var a=$(window).height();

	if(b!=clientWidth&&a!=clientHeight){location.replace(location)}});

function getHeartPoint(c){

	var b=c/Math.PI;
	var a=19.5*(16*Math.pow(Math.sin(b),3));
	var d=-20*(13*Math.cos(b)-5*Math.cos(2*b)-2*Math.cos(3*b)-Math.cos(4*b));
	return new Array(offsetX+a,offsetY+d)
}

	function startHeartAnimation(){var c=50;var d=10;var b=new Array();
		var a=setInterval(function(){var h=getHeartPoint(d);

			var e=true;for(var f=0;f<b.length;f++){
				var g=b[f];

				var j=Math.sqrt(Math.pow(g[0]-h[0],2)+Math.pow(g[1]-h[1],2));

				if(j<Garden.options.bloomRadius.max*1.3){e=false;break}}

				if(e){b.push(h);garden.createRandomBloom(h[0],h[1])}

				if(d>=30){clearInterval(a);showMessages()}else{d+=0.2}},c)
	}

		(function(a){
			a.fn.typewriter=function(){this.each(function(){var d=a(this),c=d.html(),b=0;d.html("");
	var e=setInterval(function(){var f=c.substr(b,1);

		if(f=="<"){b=c.indexOf(">",b)+1}else{b++}d.html(c.substring(0,b)+(b&1?"_":""));
	
	if(b>=c.length){clearInterval(e)}},75)});return this}})(jQuery);

function timeElapse(c){var e=Date();var f=(Date.parse(e)-Date.parse(c))/1000;

	var g=Math.floor(f/(3600*24));

	f=f%(3600*24);
	var b=Math.floor(f/3600);if(b<10){b="0"+b}f=f%3600;

var d=Math.floor(f/60);if(d<10){d="0"+d}f=f%60;if(f<10){f="0"+f}

var a='<span class="digit">'+g+'</span> days <span class="digit">'+b+'</span> hours <span class="digit">'+b+'</span> minutes <span class="digit">'+f+"</span> seconds";
$("#elapseClock").html(a)}
function showMessages(){$("#messages").fadeIn(5000,function(){showLoveU()})}function adjustWordsPosition(){$("#words").css("position","absolute");$("#words").css("top",$("#garden").position().top+195);$("#words").css("left",$("#garden").position().left+70)}
function adjustCodePosition(){$("#code").css("margin-top",($("#garden").height()-$("#code").height())/2)}
 function showLoveU(){$("#loveu").fadeIn(3000)};