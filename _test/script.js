$(function(){
    $("#navigation").load("navigation.html"); 
  });



  $(function(){
    $("#footer").load("footer.html"); 
  });




  $(function(){
    $("#new").load("new.html"); 
  });



  $(function(){
    $("#earring").load("earrings.html"); 
  });

  $(function(){
    $("#classic").load("classics.html"); 
  });
  
  $(function(){
    $("#pendants").load("pendants.html"); 
  });

    
  $(function(){
    $("#planter").load("planters.html"); 
  });

  $(function(){
    $("#minis").load("minis.html"); 
  });
  

  $(function(){
    $("#single").load("singles.html"); 
  });
  


    $(function(){
    $("#wares").load("wares.html"); 
  });

  $(function(){
    $("#trinkets").load("trinkets.html"); 
  });


  $(function(){
    $("#art").load("art.html"); 
  });

  $(function(){
    $("#search").load("search.html"); 
  });


  $(function(){
    $("#homepageproduct1").load("products/homepageproduct1.html"); 
  });

  $(function(){
    $("#homepageproduct2").load("products/homepageproduct2.html"); 
  });



  $(function(){
    $("#homepageproduct3").load("products/homepageproduct3.html"); 
  });


  $(document).ready(function() {
     
    $(".fa-search").click(function() {
       $(".search-box").toggle();
       $("input[type='text']").focus();
     });

 });



$(function() {

    // your current click function
    $('.scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, 1000, 'swing');
    });

    // *only* if we have anchor on the url
    if(window.location.hash) {

        // smooth scroll to the anchor id
        $('html, body').animate({
            scrollTop: `${$(window.location.hash).offset().top + 250}px`
        }, 1000, 'swing');
    }

});
 