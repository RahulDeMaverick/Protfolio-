import React from 'react'

const Input = ({placeholder,type,name}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      className="px-2 py-2 mt-2 w-full bg-white bg-opacity-20 border-transparent flex-1 appearance-none text-white font-poppins focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent sm:width-full md:width-full xxs:text-sm" 
    ></input>
  )
}

export default Input
