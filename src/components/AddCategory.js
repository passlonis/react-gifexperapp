import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ agregarCategoria }) => {

   const [inputValue, setInputValue] = useState('');

   const hadleInputChange = (e) => {

      setInputValue(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      
      if(inputValue.trim() === ""){
         console.log("VACIO");
      }else{
         agregarCategoria( (inputValue));
         setInputValue("");
      }
   }

   return (
      <div>
            <form onSubmit= { handleSubmit }>
               <input 
                     type="text"
                     value= { inputValue }
                     onChange= { hadleInputChange }
               />
            </form>
      </div>
   )
}

AddCategory.propTypes = {
   agregarCategoria: PropTypes.func.isRequired
}
