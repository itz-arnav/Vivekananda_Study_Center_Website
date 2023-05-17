import React from 'react'

const Carousal = ({children: slide}) => {
  return (
    <div className='overflow-hidden relative'>
      <div className='flex'>{slide}</div>
      <div>
        <button>
          Cher
        </button>
      </div>
    </div>
  )
}

export default Carousal;