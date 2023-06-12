import { useState } from "react";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { SearchBarButton,SearchBarForm,SearchBarInput } from "./SearchForm.styled";


export const SearchForm = ({onSubmit}) =>  {
 const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue( event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      toast.warning('Type some movie name for search');
      return;
    }

    onSubmit(inputValue);
    setInputValue('');
  };
  
        return (
  <SearchBarForm onSubmit={handleSubmit}>
   

    <SearchBarInput
            onChange={handleInputChange}
          value={inputValue}
          name="inputValue"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
            />
            
             <SearchBarButton type="submit" >
        Search
    </SearchBarButton>
  </SearchBarForm>
        )
}
    
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};