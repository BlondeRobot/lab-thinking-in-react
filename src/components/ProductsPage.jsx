import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  console.log('products', products);
  const allProducts = [...products]
  const [stockCheckmark, setStockCheckmark] = useState(false);

  const onTyping = (input) => {
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(input.name.toLowerCase())
    );
    setProducts(filteredProducts)
    if (input.name === ' ') {
      setProducts(jsonData)
    }
  }

  const handleCheckmark = (e) => {
    setStockCheckmark((state) => !state)
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onTyping={onTyping} handleCheckmark={handleCheckmark} />
      <ProductTable
        allProducts={
          !stockCheckmark
            ? products
            : products.filter((product) => product.inStock === true)
        }
      />
    </div>
  );
}

export default ProductsPage
