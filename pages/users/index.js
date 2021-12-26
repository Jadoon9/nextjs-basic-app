import React from 'react';
import UsersData from '../../components/UsersData';

const users = ({ users }) => {
  return (
    <div>
      <UsersData users={users} />
    </div>
  );
};

export default users;

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  console.log(users);

  return {
    props: { users },
  };
};
