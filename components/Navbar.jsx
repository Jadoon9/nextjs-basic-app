import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-20 bg-black text-white '>
      <h1 className='text-4xl w-96  px-5 py-5'>Shahzeb Jadoon</h1>
      <ul className='flex justify-between  w-96 px-5 mx-auto'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/users'>Users</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
