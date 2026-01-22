// script.js: obtiene productos y los muestra

const container = document.getElementById('products-container');

fetch('http://localhost:5000/api/products')
  .then(res => res.json())
  .then(products => {
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>$${product.price.toFixed(2)}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error('Error al cargar productos:', err));
