const productSelect = document.getElementById('productName');

const products = [
  {
    id: '1',
    name: "TV",
    averagerating: 4.5
  },
  {
    id: '2',
    name: 'Notebook',
    averagerating: 4.7
  },
  {
    id: '3',
    name: 'Smartphone',
    averagerating: 3.5
  },
  {
    id: '4',
    name: 'Videogame',
    averagerating: 3.9
  },
];

const btnSubmit = document.getElementById('btnSubmit');

products.forEach(product => {
  const productsOption = document.createElement('option');
  productsOption.textContent = product.name;
  productsOption.value = product.id;
  productSelect.append(productsOption);
});