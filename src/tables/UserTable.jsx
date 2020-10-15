import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Birth_Date</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>College</th>
                    <th>Hobbies</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => {
                        const { id, name, college, username, birthdate, address, hobbies, gender, } = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{birthdate}</td>
                                <td>{address}</td>
                                <td>{gender}</td>
                                <td>{college}</td>
                                <td>{hobbies}</td>
                                <td>
                                    <button onClick={() => props.deleteUser(id)}>Delete</button>
                                    <button onClick={() => props.editUser(id, user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                        <tr>
                            <td colSpan={4}>No users found</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default UserTable;