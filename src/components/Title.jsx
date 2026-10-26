import React from 'react'

const Title = ({title , description}) => {
  return (
    <>
    <h1 className='text-4xl text-center max-sm:text-xl dark:text-white'>{title}</h1>
    <p className='text-xl text-gray-700 text-center max-sm:text-lg max-w-lg  dark:text-white'>{description}</p>
    </>
  )
}

export default Title
