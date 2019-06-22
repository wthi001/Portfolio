function hideNav () {
    $('.burger').on('click','.navButton',function(event) {
      $('.navButton').hide();
      $('.menuItems').show();
    });
  }
  
  $(hideNav);