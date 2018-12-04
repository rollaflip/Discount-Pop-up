$(function() {
  const dealTime = () => {
    let productName = $('.product-name').html();
    let productPrice = $('.price-sales').html();
    let discountedPrice = productPrice.slice(2) * 0.85;
    let cart = 'https://www.marmot.com/checkout';

    let message = `Get this ${productName} for $${discountedPrice} with a 15% discount!`;

    const summonModal = () => {
      //add class to body,   contains grey filter and modal
      $("body").append("<div id='screenBlur'><div id='box'>Popup yo!</div></div>");

      // $('#screenBlur').append("<div id='box'>Popup yo!</div>");
      // Append the box



      $('#screenBlur').css({
        opacity: 0.7,
        width: $(document).width(),
        height: $(document).height(),
        position: 'absolute',
        left: '0',
        top: '0',
        background: '#000',
      });

      $('body').css({
        overflow: 'hidden',

      });

      $('#box').css({
      display : 'block' ,
      'width': '150px',
          height: '150px',
          background: '#FFF',
          border: 'red dotted 5px',
          'text-align': 'center',
          position: 'absolute',
          'margin-left': '-75px',
          'margin-top': '-75px',
          left: '50%',
          top: '50%',
          'z-index': '9999999999',

      });
    };

    //fire off modal instead of alert
    summonModal();
    window.alert(message);
  };

  let sizeDiv = $('.swatchanchor');
  for (let singleSizeDiv of sizeDiv)
    singleSizeDiv.addEventListener('click', dealTime, true);
});








$(document).ready(function() {
  var $body = $('body');

  // activation event
  $body.on('click', 'TRIGGERNAME?', function() {
    //LAUNCH MODAL HERE
    $('.bxc').addClass('bx-impress');
  });

  // submit event
  $body.on('click', 'LOGIC TO GO TO CART', function() {
    $('.bxc').removeClass('bx-impress');
  });

  // close event
  $body.on('click', '.bx-close, .bx-close-text', function() {
    $('.bxc').removeClass('bx-impress');
  });
});
