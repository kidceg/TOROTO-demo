$( window ).on( "load", function(){
 
//   waterfall('imgs');
//   var dataInt = {'data':[{'src':'1 (1).jpg'},{'src':'1 (2).jpg'},{'src':'1 (31).jpg'},{'src':'1 (4).jpg'},{'src':'1 (6).jpg'},{'src':'1 (7).jpg'},{'src':'1 (8).jpg'},{'src':'1 (9).jpg'},{'src':'1 (10).jpg'},{'src':'1 (11).jpg'},{'src':'1 (12).jpg'},{'src':'1 (13).jpg'},{'src':'1 (14).jpg'},{'src':'1 (15).jpg'},{'src':'1 (16).jpg'},{'src':'1 (17).jpg'},{'src':'1 (18).jpg'},{'src':'1 (19).jpg'},{'src':'1 (20).jpg'}]};

//   Window.onscroll = function() {
//   	if (checkScroll()) {
//   		$.each( dataInt.data,function(index, value) {
//   			var $obox = $('<div>').addClass('box').appendTo($('#imgs'));
//   			var $osmbox = $('<div>').addClass('smbox').appendTo($obox);
//   			$('<img>').attr('src','./images/' + $(value).attr('src')).appendTo($osmbox);
//   		});
//   		waterfall();
//   	}
//   } 


//  function waterfall(imgs) {
//  	var $boxs = $('#imgs').children();
//  	var $boxW = $boxs.eq(0).outerWidth();
//     var cols = Math.floor($("#imgs").width() / $boxW);
//     console.log(cols);
//  	var arrH = [];
//  	$boxs.each(function(index,value) {
//  		var boxH = $boxs.eq(index).outerHeight();
//  		if (index < cols) {
//           arrH.push(boxH);
//  		} else {		
//           var minH = Math.min.apply(null,arrH);
//           var minH_index = $.inArray(minH, arrH);
//           $boxs.eq(index).css({
//           	'position': 'abosulte',
//           	'top': minH,
//           	'left': minH_index * $boxW
//           });
//           arrH[minH_index] += $boxs.eq(index).outerHeight();
//      console.log($boxs.eq(index).offset().top);
//  		}
//  	});
//  } 


// function checkScroll() {
// 	var $boxs = $('#imgs').children();
// 	var lastBoxH = $boxs.last().offsetTop + $boxs.last().outerHeight()/2;
// 	var scrollTop = $(window).scrollTop();
// 	var documentH = $(document).width();
// 	return (lastBoxH < scrollTop + documentH) ?
// 	true : false;
// }
































});

