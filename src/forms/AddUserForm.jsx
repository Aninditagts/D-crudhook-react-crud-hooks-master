import React, { useState } from 'react';

const AddUserForm = (props) => {

    const initUser = { id: null, name: '', username: '', birthdate: '', address: '', gender: '', college: '', hobbies: '' };

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username && user.birthdate && user.address && user.gender && user.college && user.hobbies) {
            handleChange(e, props.addUser(user));
        }
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <label>Username</label>
            <input className="u-full-width" type="text" value={user.username} name="username" onChange={handleChange} />
            <label>Birthdate</label>
            <input className="u-full-width" type="text" value={user.birthdate} name="birthdate" onChange={handleChange} />
            <label>Address</label>
            <input className="u-full-width" type="text" value={user.address} name="address" onChange={handleChange} />
            <label>Gender</label>
            <input className="u-full-width" type="text" value={user.gender} name="gender" onChange={handleChange} />
            <label>College</label>
            <input className="u-full-width" type="text" value={user.college} name="college" onChange={handleChange} />
            <label>Hobbies</label>
            <input className="u-full-width" type="text" value={user.hobbies} name="hobbies" onChange={handleChange} />

            <button className="button-primary" type="submit" onClick={handleSubmit} >Add user</button>
        </form>
    )
}

export default AddUserForm;