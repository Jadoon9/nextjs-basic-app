import React from 'react';
import Link from 'next/link';

const UsersData = ({ users }) => {
  console.log(users);

  return (
    <div className='flex flex-col'>
      {users.map((user) => (
        <div
          key={user.id}
          className='w-full bg-gray-500 my-2 py-4 rounded-xl p-4 border-2 border-black cursor-pointer hover:bg-slate-600 transition ease-in-out hover:text-white  hover:-translate-y-1 hover:scale-110'
        >
          <Link href={`/users/${user.id}`}>
            <p className='text-lg italic'>{user.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UsersData;
