import React from 'react'
import { Button } from '../ui/button'
import { Split } from '../card/Split'
import { Payment } from '../card/Payment'


function Home() {
  return (
    <>
    <div className='min-h-screen bg-black flex'>
      <div className='ml-20 pt-20' >
       <Split/>
      </div>
      <div className='ml-20 pt-20'>
        <Payment/>
      </div>
    </div>

    </>
    
  )
}

export default Home

