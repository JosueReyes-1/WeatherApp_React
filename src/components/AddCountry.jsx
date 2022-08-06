import { useState } from "react"

import { motion } from "framer-motion"

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
    <motion.div >
      <form onSubmit={onSubmit} className=" w-100 m-auto px-3 pt-5">
        <motion.input
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0,scale:0}}
          animate={{ opacity: 1,scale:1 }}
          className="form-control bg-light"
          type="text"
          placeholder="Buscar Ciudad"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </motion.div>
  )
}
