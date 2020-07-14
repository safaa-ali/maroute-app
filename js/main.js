
 // WOW ANIMATION
 new WOW({ mobile: false }).init();


$(".navbar-light .navbar-nav .nav-link").click(function(){

  $(".navbar-light .navbar-nav .nav-link").removeClass("active")

  // $(this).addClass("activeLi")
  $(this).addClass("active")
  console.log("sssssssssssssssssssss")
})

$(".dropdown").click(function(){
  $(".dropdown-menu").slideToggle(500)
})



$(window).scroll(function(){
  var sc =  $(window).scrollTop()
   if(sc>0){
    $("nav").slideDown(600).addClass("navbarFixed")
    

   }  
   else {
            $("nav").removeClass("navbarFixed");
         }
 })

 // Porfolio isotope and filter
 $(window).on('load', function () {
  console.log("portofilo")

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item'
  });
  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });
});

// Testimonials carousel (uses the Owl Carousel library)
$(".testimonials-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  items: 1
});


 // Clients carousel (uses the Owl Carousel library)
 $(".clients-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
  }
});


// $(".fa-plus").click(function(){
//   console.log("minus")
//   $("a.collapsed").show(200)
//   // $(this).addClass("fa-minus")

//   // $(this).removeClass("fa-plus")

// })


      // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
    // console.log("counting")
  });
 