// Array para armazenar os produtos cadastrados
var inventory = [];

// Referências aos elementos do DOM
var form = document.getElementById('product-form');
var inventoryBody = document.getElementById('inventory-body');
var searchInput = document.getElementById('search');
var deleteBtn = document.getElementById('delete-btn');

// Função para adicionar um produto ao estoque
function addProduct(event) {
  event.preventDefault();

  var nameInput = document.getElementById('product-name');
  var codeInput = document.getElementById('product-code');
  var locationInput = document.getElementById('product-location');

  // Cria um objeto de produto
  var product = {
    name: nameInput.value,
    code: codeInput.value,
    location: locationInput.value
  };

  // Adiciona o produto ao array de estoque
  inventory.push(product);

  // Atualiza a tabela de estoque
  renderInventory();

  // Limpa os campos de entrada
  nameInput.value = '';
  codeInput.value = '';
  locationInput.value = '';
}

// Função para renderizar a tabela de estoque
function renderInventory() {
  // Limpa a tabela de estoque
  inventoryBody.innerHTML = '';

  // Itera sobre os produtos no array de estoque
  for (var i = 0; i < inventory.length; i++) {
    var product = inventory[i];

    // Cria uma nova linha na tabela
    var row = document.createElement('tr');

    // Cria as células da linha com os dados do produto
    var nameCell = document.createElement('td');
    nameCell.textContent = product.name;

    var codeCell = document.createElement('td');
    codeCell.textContent = product.code;

    var locationCell = document.createElement('td');
    locationCell.textContent = product.location;

    var deleteCell = document.createElement('td');
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', deleteProduct.bind(null, i));
    deleteCell.appendChild(deleteBtn);

    // Adiciona as células à linha
    row.appendChild(nameCell);
    row.appendChild(codeCell);
    row.appendChild(locationCell);
    row.appendChild(deleteCell);

    // Adiciona a linha à tabela
    inventoryBody.appendChild(row);
  }
}

// Função para excluir um produto do estoque
function deleteProduct(index) {
  inventory.splice(index, 1);
  renderInventory();
}

// Função para filtrar os produtos pelo nome, código ou local em tempo real
function searchProducts() {
  var searchTerm = searchInput.value.toLowerCase();

  var filteredProducts = inventory.filter(function(product) {
    var productName = product.name.toLowerCase();
    var productCode = product.code.toLowerCase();
    var productLocation = product.location.toLowerCase();

    return productName.includes(searchTerm) || productCode.includes(searchTerm) || productLocation.includes(searchTerm);  
  });

  renderFilteredInventory(filteredProducts);
}

// Função para renderizar o estoque filtrado
function renderFilteredInventory(filteredProducts) {
  inventoryBody.innerHTML = '';

  for (var i = 0; i < filteredProducts.length; i++) {
    var product = filteredProducts[i];

    var row = document.createElement('tr');

    var nameCell = document.createElement('td');
    nameCell.textContent = product.name;

    var codeCell = document.createElement('td');
    codeCell.textContent = product.code;

    var locationCell = document.createElement('td');
    locationCell.textContent = product.location;

    var deleteCell = document.createElement('td');
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', deleteProduct.bind(null, inventory.indexOf(product)));
    deleteCell.appendChild(deleteBtn);

    row.appendChild(nameCell);
    row.appendChild(codeCell);
    row.appendChild(locationCell);
    row.appendChild(deleteCell);

    inventoryBody.appendChild(row);
  }
}

// Event listener para o formulário de cadastro de produtos
form.addEventListener('submit', addProduct);

// Event listener para o campo de pesquisa
searchInput.addEventListener('input', searchProducts);
