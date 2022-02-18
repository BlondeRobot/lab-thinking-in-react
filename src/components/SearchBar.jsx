import { useState } from 'react'

function SearchBar ({onTyping, handleCheckmark}) {

    const [input, setInput] = useState({ name: '' });

    const handleInput = (e) => {
      setInput((previous) => {
        return {
          ...previous,
          [e.target.name]: e.target.value,
        };
      });
      onTyping({ [e.target.name]: e.target.value });
    };

    return (
      <div className="search-bar-container">
        <label for="search-bar">Search</label>
        <input type="search" id="search-bar" name="name" value={input.name} onChange = {handleInput} />
        <div>
          <input type="checkbox" id="stock-filter" name="stock-filter" onChange = {handleCheckmark} />
          <label for="search-bar">Only show products in stock</label>
        </div>
      </div>
    );
}

export default SearchBar