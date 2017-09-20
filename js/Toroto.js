$(document).ready(function () {

   // 让轮播图的高与宽有比例为0.6自适应
	var $s_pH = $(".s_pic div").width()*0.6;
	$(".s_pic div").height($s_pH);
   // 让轮播图小图标的高与宽有比例为0.6自适应
	var $b_pH = $(".b_pic").width()*0.6;
	$(".b_pic").height($b_pH);

// 每次窗口变小的时候重新加载宽高，固定窗口的设备可删除这段
$(window).resize(function(){
	var $s_pH = $(".s_pic div").width()*0.6;
	$(".s_pic div").height($s_pH);
	var $b_pH = $(".b_pic").width()*0.6;
	$(".b_pic").height($b_pH);
});



































});

