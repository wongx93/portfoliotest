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
    $("#wares").load("wares.html"); 
  });

  $(function(){
    $("#art").load("art.html"); 
  });

  $(function(){
    $("#testproduct1").load("products/testproduct1.html"); 
  });

  $(function(){
    $("#testproduct2").load("products/testproduct2.html"); 
  });



  $(function(){
    $("#testproduct3").load("products/testproduct3.html"); 
  });








         


   $('#new').click(function() {
    location.reload();
});




         

   
  

             $(document).ready(function() {
   
   
   
   });
   


document.addEventListener('DOMContentLoaded', function() {
  const ele = document.getElementById('container');
  ele.style.cursor = 'grab';

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function(e) {
      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';

      pos = {
          left: ele.scrollLeft,
          top: ele.scrollTop,
          // Get the current mouse position
          x: e.clientX,
          y: e.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = function(e) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function() {
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
  };

  // Attach the handler
  ele.addEventListener('mousedown', mouseDownHandler);
});

