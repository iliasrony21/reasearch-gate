import React from 'react'
import hiring from '../../images/footer-hiring@2x.jpg'
import marketing from '../../images/footer-advertising@2x.jpg'
import { BiCopyright } from 'react-icons/bi'

const Business = () => {
  return (
    <div className='bg-[#EBEFEE]'>
      <div className='background '>
        <h1 className='text-2xl ml-40 mb-10 pt-20'>
          ResearchGate Business Solutions
        </h1>
        <div className='cards flex mb-10 '>
          <div className='one ml-40 mr-14'>
            <div className='card card-side rounded-none bg-base-100 shadow-xl'>
              <figure>
                <img className='h-44 w-52' src={hiring} alt='hiring' />
              </figure>
              <div className='card-body h-32'>
                <h2 className='card-title font-bold mt-[-6px]'>
                  scientific Recruitment
                </h2>
                <p className='mt-[-10px] leading-5'>
                  Hire qualified researchers and build the best <br /> teams in
                  science
                </p>
                <div className='card-actions justify-start'>
                  <button className='btn btn-primary bg-white border-1 border-primary normal-case  rounded-none font-xl hover:bg-neutral text-primary'>
                    Find out more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='two '>
            <div className='card card-side rounded-none bg-base-100 shadow-xl'>
              <figure>
                <img className='h-44 w-52' src={marketing} alt='hiring' />
              </figure>
              <div className='card-body h-32'>
                <h2 className='card-title font-bold mt-[-12px]'>
                  {' '}
                  Marketing Solution
                </h2>
                <p className='mt-[-10px] leading-5 '>
                  Grow your brand's impact in the scientific
                  <br /> community with the world's leading <br /> network for
                  scientists
                </p>
                <div className='card-actions justify-start '>
                  <button className='btn btn-primary border-1 border-primary normal-case  w-32 h-6 rounded-none bg-white font-xl hover:bg-neutral text-primary'>
                    Find out more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='h-0.5 w-4/5 bg-gray-500 ml-40 ' />
      </div>
      <footer className='flex justify-between '>
        <div className='ml-40 text-sm mt-10 '>
          <span className='mr-2 hover:underline opacity-75 '>About us</span>
          <span className='mr-2 hover:underline opacity-75'>News</span>
          <span className='mr-2 hover:underline opacity-75'>Careers</span>
          <span className='mr-2 hover:underline opacity-75'>Help Center</span>
          <span className='mr-2 hover:underline opacity-75'>Terms</span>
          <span className='mr-2 hover:underline opacity-75'>Privacy</span>
          <span className='mr-2 hover:underline opacity-75'>Copyright</span>
          <span className='mr-2 hover:underline opacity-75'>Imprint</span>
        </div>
        <div className='text-sm mt-10 mr-32'>
          <span className='mr-2 hover:underline opacity-75'>Researches</span>
          <span className='mr-2 hover:underline opacity-75'>Q&A</span>
          <span className='mr-2 hover:underline opacity-75'>Publications</span>
          <span className='mr-2 hover:underline opacity-75'>Jobs</span>
          <span className='mr-2 hover:underline opacity-75'>Adcertising</span>
          <span className='mr-2 hover:underline opacity-75'>Recruiting</span>
          <br />
          <div>
            <p className='text-sm opacity-75 mt-4 pb-10 ml-16'>
              {' '}
              <span>
                <BiCopyright className='inline mt-[-1px]'></BiCopyright>
              </span>{' '}
              2008-2022 ResearchGate GmbH All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Business
