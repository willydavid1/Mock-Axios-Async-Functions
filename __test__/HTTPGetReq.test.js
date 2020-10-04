const mockAxios = require('axios')
const asyncFuntion = require('../HTTPGetReq')

// jest.mock('axios') // no necesitamos del | __mocks__ => axios.js (simulando la funcion get que realiza la peticion) | es decir podemos borrar __mocks__

it('fetches data from unsplash', async () => {
  // setup | mockFn.mockImplementationOnce(fn) | jest.fn().mockImplementationOnce(fn) | Acepta una función que se utilizará como una implementación de la funcion de mock para una llamada a la función mockeada. Puede ser encadenado para que varias llamadas de función produzcan resultados distintos.
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      results: ['cat.jpg'],
      status: 'ok'
    }
  }))
  
  // work
  const images = await asyncFuntion('explore')

  // expects
  expect(images).toEqual(['cat.jpg'])
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(
    "https://api.unsplash.com/search/photos", 
    {
      params: {
        client_id: process.env.UNSPLASH_TOKEN, 
        query: "explore"
      }
    }
  )
})