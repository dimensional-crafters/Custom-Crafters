import React from 'react'
import styles from '../styles.js'

const Shop = () => {
  return (
    <div>
      <div className="bg-primary w-full overflow-hidden">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center pl-20">

          </div>
          <div className="flex items-center pr-20">
            <button className="text-white text-fira-medium py-2 px-4 font-bold text-m border-b border-transparent hover:border-white">
              My Customs
            </button>
            <button className="text-white text-fira-medium py-2 px-4 font-bold text-m border-b border-transparent hover:border-white">
              Riwa
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-coda text-white">Custom</h1>
          <h1 className="text-4xl font-coda text-white">Crafters</h1>
          <div id="image" className="flex items-center">
            <img src="/custom-crafters.png" alt="cc" />
            <div className="absolute flex flex-row" style={{ width: '1004px', height: '580px', left: '50%', top: '50%', transform: 'translate(-50%, -30%)' }}>
              <div id="board" className="px-4 py-2 shadow-lg relative" style={{
                width: '502px',
                height: '580px',
                position: 'relative',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                borderTopLeftRadius: '50px',
                borderBottomLeftRadius: '50px',
              }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <img src="/classic.png" style={{ width: '232.25px', height: '421px' }} />
                </div>
              </div>
              <div id="text" className="bg-white px-4 py-2 shadow-lg relative" style={{
                width: '502px',
                height: '580px',
                borderTopRightRadius: '50px',
                borderBottomRightRadius: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <h1 className='text-fira-bold text-4xl pl-10'>Custom Ride</h1>
                <p className='text-fira-medium text-l pl-10 pt-5'>Crafted with care and attention to detail, using high-quality materials to ensure superior performance and durability. Experience the thrill of riding a one-of-a-kind skateboard that reflects your style and personality, or opt for our classic board to ride with timeless style.</p>
                <h1 className='text-fira-medium text-4xl pl-10 pt-2'>$62</h1>
                <div className='flex flex-row'>
                  <img src='/scooter.png' className='pl-10 w-16' />
                  <p className='font-light pl-2 text-base'>Free shipping within Lebanon</p>
                </div>
                <div className='flex flex-row'>
                  <button className='bg-black text-white text-fira-medium py-2 px-10 font-bold text-xl border-transparent hover:border-white mt-10 ml-10 rounded-3xl'>Customize</button>
                  <button className='bg-black text-white text-fira-medium py-2 px-10 font-bold text-xl border-transparent hover:border-white mt-10 ml-10 rounded-3xl'>Buy</button>
                </div>
                <div className='flex flex-row pt-10'>
                  <img src='/arrows.svg' className='pl-10 w-14' />
                  <p className='font-light pl-2 text-base'>See our customer designs</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-col' style={{marginRight: '50px'}}>
              <div id="burnout" className='bg-white flex justify-center items-center' style={{
                width: '372px', height: '393px', borderTopLeftRadius: '50px',
                borderTopRightRadius: '50px',
              }}>
                <img src='/fire.png' style={{ width: '239.22px', padding: 20 }}></img>
              </div>
              <div id="burnout_end" className='bg-black' style={{ width: '372px', height: '120px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px' }}>
                <div className='flex flex-col'>
                  <h1 className='text-white text-fira-medium text-2xl pl-10 pt-6'>$94</h1>
                  <p className='text-white font-light text-xl pl-10'>Burnout Cruiser</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col' style={{ marginRight: '50px' }}>
              <div id="waves" className='bg-white flex justify-center items-center' style={{
                width: '372px', height: '393px', borderTopLeftRadius: '50px',
                borderTopRightRadius: '50px',
              }}>
                <img src='/waves.png' style={{ width: '239.22px', padding: 5 }}></img>
              </div>
              <div id="waves_end" className='bg-black' style={{ width: '372px', height: '120px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px' }}>
                <div className='flex flex-col'>
                  <h1 className='text-white text-fira-medium text-2xl pl-10 pt-6'>$109</h1>
                  <p className='text-white font-light text-xl pl-10'>Concrete Waves</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div id="golden" className='bg-white flex justify-center items-center' style={{
                width: '372px', height: '393px', borderTopLeftRadius: '50px',
                borderTopRightRadius: '50px',
              }}>
                <img src='/golden.png' style={{ width: '239.22px', padding: 20 }}></img>
              </div>
              <div id="golden_end" className='bg-black' style={{ width: '372px', height: '120px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px' }}>
                <div className='flex flex-col'>
                  <h1 className='text-white text-fira-medium text-2xl pl-10 pt-6'>$59</h1>
                  <p className='text-white font-light text-xl pl-10'>Golden Haze Deck</p>
                </div>
              </div>
            </div>
          </div>
          <div id="image2" className="flex items-center">
            <img src="/footer.png" alt="footer" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Shop