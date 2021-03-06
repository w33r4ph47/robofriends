import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div>
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='text' 
        placeholder='search robots' 
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;