const API_BASE_URL = 'https://fakestoreapi.com'

const fetchApi = (path: string) =>
  fetch(`${API_BASE_URL}${path}`)
    .then(res => res.json())

type ProductType = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

const productService = {
  getAll: (): Promise<ProductType[]> => fetchApi('/products'),
  get: (id: number): Promise<ProductType> => fetchApi(`/products/${id}`)
}

export default productService
