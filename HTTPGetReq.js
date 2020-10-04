require('dotenv').config()  
const axios = require('axios')

const asyncFuntion = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: process.env.UNSPLASH_TOKEN,
      query: term
    }
  })
  return response.data.results
}

module.exports = asyncFuntion