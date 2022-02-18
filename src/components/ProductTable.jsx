import ProductRow from './ProductRow'

function ProductTable({allProducts}) {
  

  return (
    <div className="product-table-container">
      <h1>IronProducts</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product) => {
            const { price, inStock, name, id } = product;

            return (
              <ProductRow
                key={id}
                name={name}
                price={price}
                inStock={inStock}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable