import axios from 'axios'
export default apiService 

axios.defaults.baseURL = 'https://pixabay.com/api/'
const API_KEY = '31935155-9b23f9207d1a6226f76d789e9'

async function apiService(query, page, perPage) {
    const response = await axios.get(
      `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
    )
    return response
  }