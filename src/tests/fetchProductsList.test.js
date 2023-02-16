import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  const api = `https://api.mercadolibre.com/sites/MLB/search?q=computador`
  
  it('fetchProductsList é uma função', () => {
      expect(fetchProductsList).toBeDefined();
      expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async() => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('O retorno da função com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    await expect(fetchProductsList('computador')).toBe(`${computadorSearch}`);
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');

    expect(fetch).toHaveBeenCalledWith(api)
  });

  it('Teste se, ao chamar a função fetchProductsList sem argumento, retorna um erro', () => {
    expect(() => fetchProductsList()).toEqual(new Error('Termo de busca não informado'));
  });

});
