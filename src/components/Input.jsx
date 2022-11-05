import React from 'react'

const Input = ({label, id, placeholder, hint, type}) => {
  return (
    <div className="flex flex-col gap-[6px]">
         <label htmlFor={type} className="block inputText text-[#344054]">{label}</label>
    <input type={type} id={id} className=" border-[#D0D5DD] rounded-lg text-[#101828] h-11 text-sm  focus:ring-[#84CAFF] focus:border-[#84CAFF] block w-full py-2.5 px-[14px] " placeholder={placeholder}  />
    <p className="text4 text-[#475467]">{hint}</p>

    </div>
     
  )
}

export default Input