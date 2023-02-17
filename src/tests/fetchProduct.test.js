import './mocks/fetchSimulator';
import { fetchProduct, fetchProductsList } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  const api = "https://api.mercadolibre.com/items/MLB1405519561";
  const id = 'MLB1405519561'
  it('fetchProductsList é uma função', () => {
    expect(fetchProduct).toBeDefined();
    expect(typeof fetchProduct).toBe('function');
  });

  it('Teste se fetch foi chamado se a função fetchProduct receber o argumento "MLB1405519561"', async () => {
    await fetchProduct(id);
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
      await fetchProduct('MLB1405519561');
   
      expect(fetch).toHaveBeenNthCalledWith(1, api)
  });

  it('Teste se o retorno da função fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto que já está importado no arquivo', async() => {
    const returnApi = await fetchProduct(id);
    expect(returnApi).toEqual(product);
  });

  it('Teste se ao chamar a função fetchProduct sem argumento, retorna um erro', async () => {
    await expect(() => fetchProduct()).rejects.toThrow('ID não informado');
  });

});

