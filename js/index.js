// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let subTotalValue = Number(price * quantity);

  const subTotal = product.querySelector('.subtotal span');

  subTotal.innerHTML = subTotalValue;

  return subTotalValue;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  
  // end of test

  // ITERATION 2

  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  
  allProducts.forEach((singleProduct) => {total += updateSubtotal(singleProduct)});

  // ITERATION 3

  const totalValue = document.querySelector('#total-value span');

  totalValue.innerText = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
