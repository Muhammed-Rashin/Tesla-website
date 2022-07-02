$('#myCarousel').carousel({
    interval: 100
  });

// $(document).ready(function(){
//     $('#foo').scroll('mousewheel', function(e){
//         if(e.originalEvent.wheelDelta /120 > 0) {
//             console.log('scrolling up !');
//         }
//         else{
//             console.log('scrolling down !');
//         }
//     });
// });
$('#myCarousel').bind('slid', function() {

    // remove active class
    $('.carousel-linked-nav .active').removeClass('active');

    // get index of currently active item
    var idx = $('#myCarousel .item.active').index();

    // select currently active item and add active class
    $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');

});
