import * as element from './utils/variables.js';
import { filterProducts } from './utils/functions.js';

for (let i = 0; i < element.btns.length; i++) {
  element.btns[i].addEventListener('click', function (e) {
    const current = document.getElementsByClassName('active');

    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';

    const filter = e.target.dataset.filter;

    element.products.forEach((product) => {
      if (filter === 'all') {
        product.style.display = 'block';
      } else if (product.classList.contains(filter)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
}

element.search.addEventListener('keyup', filterProducts);
