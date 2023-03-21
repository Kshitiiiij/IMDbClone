import React from 'react'
import { SpinnerInfinity } from 'spinners-react'

export default function Loading() {
  return (
    <div className='flex justify-center align-middle'>
        <SpinnerInfinity color='#FFA500'/>
    </div>
  )
}
