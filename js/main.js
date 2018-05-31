//smooth scroll

$('#view-work').on('click', function() {
    const images = $('#images').position().top;
  
    $('html, body').animate(
      {
        scrollTop: images
      },
      900
    );
  });

//2nd button

  $('#view-contact').on('click', function() {
    const images = $('#contact').position().top;
  
    $('html, body').animate(
      {
        scrollTop: images
      },
      900
    );
  });

 
