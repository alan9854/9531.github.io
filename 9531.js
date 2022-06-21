
 $("#mktea").click(function(){
	 
	 
	 $( ".mkt_steps_2" ).hide("fast",function(){
		$( this ).hide( ".mkt_steps_2" );
	});
	 
	
	$( ".mkt_steps" ).first().show( 800, function showNext() {
	$('html,body').animate({scrollTop:$(".mkt_steps").offset().top}, 800);	
	
    $( this ).next( ".mkt_steps" ).show( 800, showNext );
	
	         
            

	
	});
    
	});
	
	
	
	
 $("#mktea_1").click(function(){
	
	
	$( ".mkt_steps" ).hide("fast",function(){
		$( this ).hide( ".mkt_steps" );
	});	
	
	$( ".mkt_steps_2" ).first().show( 800, function showNext() {
	
    $( this ).next( ".mkt_steps_2" ).show( 800, showNext );
	
	});
	
    
	});
	
	
/*bltea*/	
$("#blt_pro").mouseenter(function(){
	$("#blkp_img").attr('src','./black tea collection/png/ICON-08.png');	
});

$("#blt_pro").mouseleave(function(){
	$("#blkp_img").attr('src','./black tea collection/png/ICON-06.png');	
});

$("#blt_pro_1").mouseenter(function(){
	$("#blkp_img_1").attr('src','./black tea collection/png/ICON-08.png');	
});

$("#blt_pro_1").mouseleave(function(){
	$("#blkp_img_1").attr('src','./black tea collection/png/ICON-06.png');
	
});


$("#blt_pro_2").mouseenter(function(){
	$("#blkp_img_2").attr('src','./black tea collection/png/ICON-09.png');
});

$("#blt_pro_2").mouseleave(function(){
	$("#blkp_img_2").attr('src','./black tea collection/png/ICON-07.png');
});






/*oolong*/

$("#olt_pro").mouseenter(function(){
	$("#olkp_img").attr('src','./black tea collection/png/ICON-08.png');
});

$("#olt_pro").mouseleave(function(){
	$("#olkp_img").attr('src','./black tea collection/png/ICON-06.png');
});


$("#olt_pro_1").mouseenter(function(){
	$("#olkp_img_1").attr('src','./black tea collection/png/ICON-08.png');
});

$("#olt_pro_1").mouseleave(function(){
	$("#olkp_img_1").attr('src','./black tea collection/png/ICON-06.png');
});

$("#olt_pro_2").mouseenter(function(){
	$("#olkp_img_2").attr('src','./black tea collection/png/ICON-08.png');
});

$("#olt_pro_2").mouseleave(function(){
	$("#olkp_img_2").attr('src','./black tea collection/png/ICON-06.png');
});


$("#olt_pro_3").mouseenter(function(){
	$("#olkp_img_3").attr('src','./black tea collection/png/ICON-08.png');
});

$("#olt_pro_3").mouseleave(function(){
	$("#olkp_img_3").attr('src','./black tea collection/png/ICON-06.png');
});




$("#olt_pro_4").mouseenter(function(){
	$("#olkp_img_4").attr('src','./black tea collection/png/ICON-08.png');
});

$("#olt_pro_4").mouseleave(function(){
	$("#olkp_img_4").attr('src','./black tea collection/png/ICON-06.png');
});












