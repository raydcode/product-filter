import * as element from './variables.js';

export function filterProducts(e) {
  const query = e.target.value.toLowerCase();

  element.productName.forEach((product) => {
    const item = product.textContent;

    if (item.toLowerCase().indexOf(query) !== -1) {
      product.parentElement.parentElement.style.display = 'block';
      element.noResults.style.display = 'none';
    } else {
      product.parentElement.parentElement.style.display = 'none';
      element.noResults.style.display = 'block';
    }
  });
}

