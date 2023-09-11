import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions'; /* createCartProductElement */
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

fetchProduct('MLB1405519561').then((data) => (data));

const getProduts = document.querySelector('.products');

const loadingMessage = async () => {
  const element = document.createElement('p');
  element.innerHTML = 'carregando...';
  element.className = 'loading';
  getProduts.appendChild(element);
};

const saveLocalStorage = async () => {
  const keyStorage = document.querySelector('.cart__products');

  const saveArrayStorage = getSavedCartIDs();
  const getFunction = saveArrayStorage.map((item) => fetchProduct(item));
  const organizePromises = await Promise.all(getFunction);
  organizePromises.forEach((item) => {
    const cartProduct = createCartProductElement(item);
    keyStorage.appendChild(cartProduct);
  });
};
saveLocalStorage();

const clearMessage = () => {
  getProduts.innerHTML = '';
};

const products = async () => {
  loadingMessage();
  const responseName = await fetchProductsList('computador');

  clearMessage();

  responseName.forEach((element) => {
    const item = createProductElement(element);
    getProduts.appendChild(item);
  });
};

const testApi = async () => {
  try {
    await products();
  } catch (error) {
    const errorApi = document.createElement('p');
    errorApi.className = 'error';
    errorApi.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
    getProduts.appendChild(errorApi);
  }
};

testApi();
