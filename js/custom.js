$( document ).ready(function() {

	
	
var dYear = new Date();
var nYear = dYear.getFullYear();
		$('.getYear').html(nYear);
	$('.employer .hidden-content').hide();
	$('.accordion .tab').on('click', function() {
  	$(this).find('.employer > .hidden-content').slideToggle();
	});
		
	
	$('.pie_progress').asPieProgress({
		'namespace': 'pie_progress',
		min: 0, 
		max: 100,
		goal: 100, // 100%
		size: 80, // in px
		speed: 40, // speed of 1/100
		barcolor: '#ef1e25',
		barsize: '2',
		trackcolor: '#f2f2f2',
		fillcolor: 'none',
		easing: 'ease'
	});

		
	$(".service_item").hover(function(){
		$(this).children('.pie_progress').asPieProgress('start');
	});

});

var myVar;

$("#loading").hide();
$('.simple-ajax-popup').on('click', function(e){
  $('#ajax-content').html("");
	e.preventDefault();
	var htmlStringLink=$(this).attr('href');
  var catTopPosition = jQuery('#ajax-anchor').offset().top;
	jQuery('html, body').animate({scrollTop:catTopPosition}, '1000');
  $("#loading").slideDown();
  $(".sliphover-container").hide();
  myVar=setTimeout(function(){
	$('#ajax-content').load(htmlStringLink, function(result) {
		$(".sliphover-container").hide();
    $(this).hide();
    $(this).fadeIn();
    $("#loading").hide();
		// initiate responsive slideshow
    jQuery('.flexslider').flexslider({
		//	smoothHeight: true,
		animation: "slide"
		});
		// close ajax content
		
		$('.close-ajax').on('click', function() {
			jQuery('html, body').animate({scrollTop:catTopPosition}, '1000');
			$('#ajax-content').html("");
		});
    
 
	});
    
  }, 1000);

});

 $(document).ajaxComplete(function(e, xhr, options) {
 if (options.type != 'POST') { 
   $('#ajax-content').trigger('contentchanged');
  myVar=setTimeout(function(){
    $("#loading").fadeOut();
    }, 500);
  }
 });


$('#ajax-content').bind('contentchanged', function() {
	$("#loading").fadeIn();
	
    $('.prev-ajax').on('click', function() {
      var prevHtmlString = $(this).attr('href');
      console.log(prevHtmlString);
      $('#ajax-content').load(prevHtmlString, function(result) {
      var catTopPosition = jQuery('#ajax-anchor').offset().top;
	    jQuery('html, body').animate({scrollTop:catTopPosition}, '1000');
        $(this).hide();
        $(this).fadeIn();
        $("#loading").fadeOut();
        jQuery('.flexslider').flexslider({
        //	smoothHeight: true,
        animation: "slide"
        });
        $('.close-ajax').on('click', function() {
          jQuery('html, body').animate({scrollTop:catTopPosition}, '1000');
          $('#ajax-content').html("");
        });
        
      });
    });
    
    $('.next-ajax').on('click', function() {
      var nextHtmlString = $(this).attr('href');
      $('#ajax-content').load(nextHtmlString, function(result) {
      var catTopPosition = jQuery('#ajax-anchor').offset().top;
	    jQuery('html, body').animate({scrollTop:catTopPosition}, '1000');
        $(this).hide();
        $(this).fadeIn();
        $("#loading").fadeOut();
        jQuery('.flexslider').flexslider({
        //	smoothHeight: true,
        animation: "slide"
        });
        $('.close-ajax').on('click', function() {
          jQuery('html, body').animate({scrollTop:catTopPosition}, '1000');
          $('#ajax-content').html("");
        });
        
      });
    });

window.clearTimeout(myVar);



});


