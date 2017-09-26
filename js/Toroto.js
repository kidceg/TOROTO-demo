$(document).ready(function () {
  // 图库瀑布流函数
  waterfall('imgs');
  // 使用json
  var dataInt = {'data':[{'src':'1 (1).jpg'},{'src':'1 (2).jpg'},{'src':'1 (31).jpg'},{'src':'1 (4).jpg'},{'src':'1 (6).jpg'},{'src':'1 (7).jpg'},{'src':'1 (8).jpg'},{'src':'1 (9).jpg'},{'src':'1 (10).jpg'},{'src':'1 (11).jpg'},{'src':'1 (12).jpg'},{'src':'1 (13).jpg'},{'src':'1 (14).jpg'},{'src':'1 (15).jpg'},{'src':'1 (16).jpg'},{'src':'1 (17).jpg'},{'src':'1 (18).jpg'},{'src':'1 (19).jpg'},{'src':'1 (20).jpg'},{'src':'1 (21).jpg'},{'src':'1 (22).jpg'},{'src':'1 (23).jpg'},{'src':'1 (24).jpg'},{'src':'1 (25).jpg'},{'src':'1 (26).jpg'},{'src':'1 (27).jpg'},{'src':'1 (28).jpg'},{'src':'1 (29).jpg'},{'src':'1 (30).jpg'},{'src':'1 (31).jpg'},{'src':'1 (32).jpg'},{'src':'1 (33).jpg'},{'src':'1 (34).jpg'},{'src':'1 (35).jpg'},{'src':'1 (36).jpg'},{'src':'1 (37).jpg'},{'src':'1 (38).jpg'},{'src':'1 (39).jpg'},{'src':'1 (40).jpg'},{'src':'1 (41).jpg'},{'src':'1 (42).jpg'},{'src':'1 (43).jpg'},{'src':'1 (44).jpg'},{'src':'1 (45).jpg'}]};
  // 当滚动条到下面图片可视高度有图片一半的时候继续加载图片
  window.onscroll = function() {
  	if (checkScroll()) {
  		$.each( dataInt.data,function(index, value) {
  			var $obox = $('<div>').addClass('box').appendTo($('#imgs'));
  			var $osmbox = $('<div>').addClass('smbox').appendTo($obox);
  			$('<img>').attr('src','images/' + $(value).attr('src')).appendTo($osmbox);
  		});
  		waterfall();
  	};
  } 

    // 点击导航“图标”按钮会跳转到对应位置
  $("#tu_biao").click(function () {
    $("body,html").animate({scrollTop:$(".line1").offset().top},200);
  });

    //点击“图库”下的标签跳转到对应内容
  $("#tu_ku").click(function () {
    $("body,html").animate({scrollTop:$(".line2").offset().top},200);
  });


});


// 图片瀑布流函数
 function waterfall(imgs) {
 	var $boxs = $('#imgs').children();
 	var $boxW = $boxs.eq(0).outerWidth();
    var cols = Math.floor($("#imgs").width() / $boxW);
    console.log(cols);
 	var arrH = [];
 	$boxs.each(function(index,val) {
 		var boxH = $(this).outerHeight();

 		if (index < cols) {
          arrH.push(boxH);
 		} else {		
          var minH = Math.min.apply(null,arrH);
          var minH_index = $.inArray(minH, arrH);
          $(this).css({
          	'position': 'absolute',
          	'top': minH,
          	'left': minH_index * $boxW
          });
          arrH[minH_index] += $(this).outerHeight();
 		}
 	});
 } 


// 鼠标滚动到可视图片高度一半的时候继续加载图片判断
function checkScroll(){
    var $boxs = $('#imgs').children();
    var lastBoxH = $boxs.last().get(0).offsetTop + Math.floor($boxs.last().height()/2);
    var scrollTop = $( window ).scrollTop()
    var documentH = $( document ).width();
    return (lastBoxH < scrollTop + documentH ) ? true : false;
}



































