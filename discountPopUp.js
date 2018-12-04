const dealTime = () => {
  let itemName = document.getElementsByClassName('product-name');
  let productName = itemName[0].innerText;

  let itemPrice = document.getElementsByClassName('price-sales');
  let productPrice = itemPrice[0].innerHTML

  let discountedPrice = productPrice.slice(2)*.85

  let cart = 'https://www.marmot.com/checkout';

  let message = `Get this ${productName} for $${discountedPrice} with a 15% discount!`;

  console.table(productName, productPrice, discountedPrice);

  window.alert(message);
  return discountedPrice
};

// if class name 'swatchanchor' is clicked call dealTime('price-sales')
