import React from 'react'
import Forms from '../components/Forms'
import Header from '../components/Header'

const Contact = () => {
  return (
    <div className='h-screen flex flex-col md:items-start 4xl:px-[20%] md:pt-[88px]  px-4 md:px-[10%] mx-auto w-full gap-12 md:gap-16'>
      <Header/>
      <Forms />
    </div>
  )
}

export default Contact