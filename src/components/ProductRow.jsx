

function ProductRow ({name, price, inStock}) {
    const filteredByColor = inStock ? { color: 'black' } : { color: 'red' };
    return (
      
        <tr style={filteredByColor}>
          <td>{name}</td>
          <td>{price}</td>
        </tr>
      
    );
}

export default ProductRow