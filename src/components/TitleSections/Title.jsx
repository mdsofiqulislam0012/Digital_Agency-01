import React from 'react'

export default function Title({title, description}) {
  return (
    <div>
        <h2 className='text-3xl sm:text-5xl font-medium text-'>{title}</h2>
        <p className='max-w-lg text-center text-gray-500 mb-6'>{description}</p>
    </div>
  )
}
