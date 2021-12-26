import React from 'react';

const UserDetails = ({ user }) => {
  console.log(user);
  return (
    <div className=' my-10 p-10 leading-relaxed'>
      <h1 className='text-6xl mb-2'>{user.name}</h1>
      <p className='text-xl italic'>{user.email}</p>
      <address className='text-xl italic my-2'>
        {user.address.street}, {user.address.suite}, {user.address.city}
      </address>
    </div>
  );
};

export default UserDetails;

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  const paths = users.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
};
