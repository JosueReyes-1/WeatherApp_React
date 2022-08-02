import { useState } from "react"



export const AddCountry = ({ onNewCiudad }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setInputValue('');
    onNewCiudad(inputValue.trim());
  }

  return (
    <form onSubmit={onSubmit} className=" w-50 m-auto pt-5">
      <input
        className="form-control bg-light"
        type="text"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
