import React from 'react';

const user = {
    name: 'Alan',
    lastName: 'Anaya',
    age: '25'
}

const Header = () => {
    return (
    <div>
        <div>{user.name}</div>
        <div>{user.lastName}</div>
        <div>{user.age}</div>
    </div>)
}

export default Header;