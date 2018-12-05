$(function() {
  const dealTime = () => {
    let productName = $('.product-name').html();
    let productPrice = $('.price-sales').html();
    let discountedPrice = productPrice.slice(2) * 0.85;
    let cart = 'https://www.marmot.com/checkout';

    let message = `Get this ${productName} for $${discountedPrice} with a 15% discount!`;

    const summonModal = () => {
      //add class to body,   contains grey filter and modal
      $('body').append("<div id='screenBlur'></div>");

      $('body').append("<div id='box'></div>");

      // Append the box

      let textNode = document.createTextNode(message);
      $('#box').append(`<p id='messageText'>${message}</p>`);

      $('#box').append(
        "<button id='exit' type='button' >No Deal!</button>",
        "<button id='getDeal' type='button' >Get Deal!<button>"
      );

      $('#messageText').css({
        'margin-top': '5px',
      });

      /////////////////////////////
      // Styling
      ////////////////////////////

      //No deal! button
      $('#exit').css({
        display: 'block',
        'border-radius': '12px',
        'font-weight': 'bold',
        position: 'absolute',
        width: '58%',
        'font-size': '130%',
        height: '2.1em',
        'text-shadow': '-1px -1px 0 rgba(0, 0, 0, 0.3)',
        color: '#ffffff',
        '-webkit-box-shadow': '0 6.5px 4px -4px rgba(87, 87, 87, 0.582)',
        'box-shadow': '0 6.5px 4px -4px rgba(87, 87, 87, 0.582)',

        'background-color': '#B00020',
        '-webkit-appearance': 'button',
        cursor: 'pointer',
        'margin-top': '40px',
      });

      //Get Deal! button
      $('#getDeal').css({
        display: 'block',
        'border-radius': '12px',
        'font-weight': 'bold',
        position: 'absolute',
        width: '58%',
        'font-size': '130%',
        height: '2.1em',
        'text-shadow': '-1px -1px 0 rgba(0, 0, 0, 0.3)',
        color: '#ffffff',
        '-webkit-box-shadow': '0 6.5px 4px -4px rgba(87, 87, 87, 0.582)',
        'box-shadow': '0 6.5px 4px -4px rgba(87, 87, 87, 0.582)',

        'background-color': '#018786',
        '-webkit-appearance': 'button',
        cursor: 'pointer',
      });

      //Blur screen as modal backdrop
      $('#screenBlur').css({
        display: 'block',
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

      //Modal Box
      $('#box').css({
        display: 'block',
        'justify-content': 'center',
        'align-items': 'center',
        width: '350px',
        height: '350px',
        background: '#FFF',
        border: 'rgba(17, 0, 255, 0.822) solid 5px',
        'text-align': 'center',
        position: 'absolute',
        'margin-left': '-175px',
        'margin-top': '-175px',
        left: '50%',
        top: '50%',
        'z-index': '9999999999',
        // display : 'block' ,
      });
    };

    summonModal();
    // window.alert(message);
  };

  /////////////////////////////
  // Event Listeners
  ////////////////////////////


  $('body').on('click', '.selectable > .swatchanchor', dealTime);

  $('body').on('click', '#exit', function() {
    $('#box').remove()
    $('#box').css('display', 'none');
    $('#screenBlur').css('display', 'none');
    // $('.box div:first').remove()
  });

  $('body').on('click', '#getDeal', function() {
    $('#box').css('display', 'none');
    $('#screenBlur').css('display', 'none');
    $('#add-to-cart').click();
  });
});
