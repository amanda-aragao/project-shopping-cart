import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
fetchProductsList('computador');

const getProduts = document.querySelector('.products');

const products = async () => {
  const response = await fetchProductsList('computador');
  const allProduts = response.forEach((element) => {
    const item = createProductElement(element);
    getProduts.appendChild(item);
    return allProduts;
  });
};

products();
