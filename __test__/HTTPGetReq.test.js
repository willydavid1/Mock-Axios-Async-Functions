const mockAxios = require('axios')
const asyncFuntion = require('../HTTPGetReq')

it('fetches data from unsplash', async () => {
  // setup
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