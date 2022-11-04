import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SearchInput = ({ data, setSearchTerm }) => {
  let navigate = useNavigate();

  return (
    <input
      inputType={'input'}
      id={'search'}
      className={'element'}
      label={'search'}
      type={'search'}
      onChange={(event) => setSearchTerm(event.target.value)}
      placeholder='Search by category or title...'
    />
  )
}

export default SearchInput;