import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex text-center justify-around bg-indigo-900 text-white py-2'>
        <div className="logo text-center">
            <span><img className='rounded-full h-9 md:h-12 bg-fuchsia-200 ' src="/pict.png" alt="lodo" /></span>
        </div>
      <ul className="flex text-center gap-8 mx-9 text-center py-2">
        <li className='text-center cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className=' text-center cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar