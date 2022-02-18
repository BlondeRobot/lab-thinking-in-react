import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  console.log('products', products);
  const allProducts = [...products]

  const onTyping = (input) => {
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(input.name.toLowerCase())
    );
    setProducts(filteredProducts)
    if (input.name === ' ') {
      setProducts(jsonData)
    }
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onTyping = {onTyping} />
      <ProductTable allProducts = {allProducts}/>
    </div>
  );
}

export default ProductsPage
