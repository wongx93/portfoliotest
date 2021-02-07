function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

var slideIndex = 1;
function showSlides() {
	var slides = document.getElementsByClassName("mySlides");
	if (slideIndex > slides.length) {slideIndex = 1;}
	if (slideIndex < 1) {slideIndex = slides.length;}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
	var dots = document.getElementsByClassName("slide-dot");
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" slide-dot-active", "");
	}
	dots[slideIndex-1].className += " slide-dot-active";
 }
function plusSlides(n) {
	slideIndex += n;
	showSlides();
}
function currentSlide(n) {
	slideIndex = n;
	showSlides();
}
window.onload = showSlides;





$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
      e.preventDefault(); 
      var target = $(this).attr("href"); 

  
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 600, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });

      return false;
  });
});



$(document).ready(function() {
  $('.progress .progress-bar').css("width",
            function() {
                return $(this).attr("aria-valuenow") + "%";
            }
    )
});


$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Show/hide menu on scroll
  //if (scrollDistance >= 850) {
  //		$('nav').fadeIn("fast");
  //} else {
  //		$('nav').fadeOut("fast");
  //}

  // Assign active class to nav links while scolling
  $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.sidebar a.active').removeClass('active');
          $('.sidebar a').eq(i).addClass('active');
      }
  });
}).scroll();


$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
  

    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.sidebar2 a.active').removeClass('active');
            $('.sidebar2 a').eq(i).addClass('active');
        }
    });
  }).scroll();


  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
  

    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.sidebar3 a.active').removeClass('active');
            $('.sidebar3 a').eq(i).addClass('active');
        }
    });
  }).scroll();






jQuery(document).ready(function(e) {
  var WindowHeight = jQuery(window).height();

  var load_element = 0;

  //position of element
  var scroll_position = jQuery('#recommended').offset().top;

  var screen_height = jQuery(window).height();
  var activation_offset = 0;
  var max_scroll_height = jQuery('body').height() + screen_height;

  var scroll_activation_point = scroll_position - (screen_height * activation_offset);

  jQuery(window).on('scroll', function(e) {

      var y_scroll_pos = window.pageYOffset;
      var element_in_view = y_scroll_pos > scroll_activation_point;
      var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

      if (element_in_view || has_reached_bottom_of_page) {
          jQuery('#recommended').addClass("colorchange");
      } else {
          jQuery('#recommended').removeClass("colorchange");
      }

  });

});