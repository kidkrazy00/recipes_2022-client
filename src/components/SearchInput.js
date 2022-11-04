import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TagInput from "./TagInput";

const SearchInput = ({ data, setSearchTerm }) => {
  let navigate = useNavigate();

  return (
    <TagInput
      inputType={'input'}
      id={'search'}
      className={'element'}
      label={'search'}
      type={'search'}
      onChange={(event) => setSearchTerm(event.target.value)}
      placeholder='Search by category or title...'
    >
      <i />
    </TagInput>
  )
}

export default SearchInput;