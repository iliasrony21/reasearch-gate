import React from 'react'
import './Home.css'
import banner from '../../images/banner.jpg'
import discover from '../../images/discover.png'
import impact from '../../images/state.png'
import { GoSearch } from 'react-icons/go'

const Home = () => {
  return (
    <div>
      <div className='fixed top-0 left-0 right-0 header-all '>
        <div className='header-part  flex justify-between pt-6  bg-white '>
          <div className='title'>
            <h1 className='text-3xl text-primary  ml-32 pb-5'>ResearchGate</h1>
          </div>
          <div className='buttons'>
            <button className='hover:underline font-bold'>Log in</button>
            <button className='text-primary hover:underline mr-32 ml-5 font-bold'>
              Join for free
            </button>
          </div>
        </div>
        <hr className='h-2 w-full mt-[-2px]' />
      </div>
      {/* Banner part start  */}
      <div className='banner-part'>
        <div className='hero min-h-screen '>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <img src={banner} className='  images' alt='banner' />
            <div className='text-part ml-52 mt-[-150px]'>
              <p className='text-4xl font-bold py-2'>
                {' '}
                Discover scientific knowledge and stay connected to the world of
                science
              </p>

              <button className='btn btn-primary font-bold text-white w-96 mt-5 h-14 normal-case text-xl rounded-none'>
                Join for free
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* discover page start  */}

      <div className='discover-search flex'>
        <div className='pic-part'>
          <img className='discovers mt-10' src={discover} alt='' />
        </div>
        <div className='textu-part'>
          <h1 className='text-5xl mt-40 font-bold '>Discover research</h1>
          <p className='py-5 text-xl'>
            Access over 135 million publication pages and stay up to date with{' '}
            <br />
            what's happening in your field.
          </p>
          <span>
            <span>
              <GoSearch className='inline search mt-[-2px]' />{' '}
              <input
                type='text'
                placeholder='     Search Publications'
                className='input  input-primary rounded-none h-14 w-full max-w-lg text-xl pl-10 ml-[-30px]'
              />
            </span>
          </span>
        </div>
      </div>

      {/* impact page start  */}
      <div className='impact flex mt-20 mb-20'>
        <div className='impact-text'>
          <h1 className='ml-20 text-5xl font-bold'>
            Connect with your <br /> scientific community
          </h1>
          <p className='text-xl ml-20 py-4'>
            Share your research, collaborate with your peers, and get the <br />
            support you need to advance your career.
          </p>
        </div>
        <div className='impact-btn ml-40'>
          <h1 className='mb-10 '>VISIT TOPIC PAGES</h1>
          <div className=''>
            <button className='btn border-2 text-primary border-primary w-36 rounded-full bg-white font-xl mr-5 hover:bg-neutral '>
              Engineering
            </button>
            <button className='btn border-2 text-primary border-primary w-36 rounded-full bg-white font-xl mr-5 hover:bg-neutral'>
              Mathematics
            </button>
            <button className='btn border-2 text-primary border-primary w-36 rounded-full bg-white font-xl hover:bg-neutral'>
              Biology
            </button>
          </div>

          <div className=''>
            <button className='btn border-2 text-primary border-primary w-52 rounded-full bg-white font-xl mr-5 mt-5 mb-5 hover:bg-neutral'>
              Computer Science
            </button>
            <button className='btn border-2 text-primary border-primary w-52 rounded-full bg-white font-xl mr-5 hover:bg-neutral'>
              Climate Change
            </button>
          </div>

          <div className=''>
            <button className='btn border-2 text-primary border-primary w-36 rounded-full bg-white font-xl mr-5 hover:bg-neutral'>
              Medicine
            </button>
            <button className='btn border-2 text-primary border-primary w-36 rounded-full bg-white font-xl mr-5 mb-5 hover:bg-neutral'>
              Physics
            </button>
            <button className='btn border-2 text-primary border-primary w-36 rounded-full bg-white font-xl hover:bg-neutral'>
              Social Science
            </button>
          </div>

          <div className=''>
            <button className='btn border-2 text-primary border-primary w-36 rounded-full bg-white font-xl mr-5 hover:bg-neutral'>
              Astrophysics
            </button>
            <button className='btn border-2 text-primary border-primary w-36 rounded-full bg-white font-xl mr-5 mb-10 hover:bg-neutral'>
              Chemistry
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
