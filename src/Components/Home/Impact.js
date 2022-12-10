import React from 'react'
import impact from '../../images/state.png'

const Impact = () => {
  return (
    <div>
      <div className='flex mb-20'>
        <div className='impact-pic'>
          <img className='images2 ml-[-60px] mt-[-40px]' src={impact} alt='' />
        </div>
        <div className='impact-text '>
          <h1 className='text-5xl font-bold  mt-28 mb-5 ml-[-177px]'>
            Measure your impact
          </h1>
          <p className='text-xl z-index-1 ml-[-177px]'>
            Get in-depth stats on who's been reading your work and keep <br />{' '}
            track of your citations.
          </p>
        </div>
      </div>
      <hr className='h-0.5 w-9/12  mb-10 ml-40 bg-gray-500' />
    </div>
  )
}

export default Impact
