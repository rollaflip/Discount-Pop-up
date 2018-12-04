const dealTime = () => {
  let productName = $('.product-name').html()
  let productPrice = $('.price-sales').html()
  let discountedPrice = productPrice.slice(2)*.85
  let cart = 'https://www.marmot.com/checkout';

  let message = `Get this ${productName} for $${discountedPrice} with a 15% discount!`;

  window.alert(message);
  return productName
};

let sizeDiv = $('.swatchanchor');
  for(let singleSizeDiv of sizeDiv)    singleSizeDiv.addEventListener('click', dealTime, true);




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
