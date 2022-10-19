import React from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 }
];

const UserSearch: React.FC = () => {
  const [name, setName] = React.useState('');

  const onClick = () => {
    // const foundUser = users.find((user) => {
    //   return user.name === name;
    // });
    for (let i = 0; i <= users.length; i++) {
      if (users[i].name === name) {
        console.log(users[i]);
      } 
    }

    // console.log(foundUser);
  };

  return <div>
    User Search
    <input value={name} onChange={e => setName(e.target.value)} />
    <button onClick={onClick}>Find User</button>
  </div>
};

export default UserSearch;