$(function() {
  $('#da-slider').cslider({
    autoplay	: true,
    bgincrement	: 450
  });

  $(document).ready(function(){
    $(".flexy-menu").flexymenu({
      speed: 400,type: "horizontal",align: "right"
    });
  });

  $(document).ready(function() {
    $("#owl-demo").owlCarousel({
      items : 1,
      lazyLoad : true,
      autoPlay : true,
      navigation : true,
      navigationText : ["",""],
      rewindNav :true,
      scrollPerPage :true,
      pagination : true,
      paginationNumbers: false,
    });
  });

  $(document).ready(function() {
    $("#owl-demo1").owlCarousel({
      items : 1,
      lazyLoad : true,
      autoPlay : true,
      navigation : true,
      navigationText : ["",""],
      rewindNav : true,
      scrollPerPage :true,
      pagination : false,
      paginationNumbers: false,
    });
  });

  $(document).ready(function() {
    $("#owl-demo2").owlCarousel({
      items : 1,
      lazyLoad : true,
      autoPlay : true,
      navigation : false,
      navigationText : ["",""],
      rewindNav : false,
      scrollPerPage :true,
      pagination : false,
      paginationNumbers: false,
    });
  });

  $(document).ready(function() {
    var defaults = {
      containerID: 'toTop', // fading element id
      containerHoverID: 'toTopHover', // fading element hover id
      scrollSpeed: 1200,
      easingType: 'linear'
    };
    $().UItoTop({ easingType: 'easeOutQuart' });
  });

  jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
    });
  });
  var chartcontent = $('.work-img');
  chartcontent.css('top','0');
});
