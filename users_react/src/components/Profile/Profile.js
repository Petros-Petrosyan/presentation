import React, {useState, useEffect} from 'react';
import './Profile.css';

const Profile = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const {id} = props.match.params;
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then((res) => {
                setUser(res);
            });
    }, []);

    let view_user = null;
    if (user) {
        view_user = (
            <div className='box'>
                <h2>User {user.id}</h2>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Street: {user.address.street}</p>
                <p>City: {user.address.city}</p>
            </div>
        )
    }
    return (
        <>
            <h2 className='title'>User</h2>
            <div className='content'>
                {view_user}
            </div>
        </>
    )
}

export { Profile }
