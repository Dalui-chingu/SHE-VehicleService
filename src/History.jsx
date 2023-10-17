import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style2.css'


function History() {
  const [users, setUsers] = useState([]);
  const [editUserIndex, setEditUserIndex] = useState(-1); // Index of the user in edit mode, -1 means no user is in edit mode.

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/showDetails");
      setUsers(response.data);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  };

  const deleteUser = async (mobileno) => {
    try {
      await axios.delete(`http://localhost:8080/deletebyParam?phoneNumber=${mobileno}`);
      console.log(`Deleted user with phoneNumber: ${mobileno}`);
      loadUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const updateUserPassword = async (phoneNumber, newPassword, oldPassword) => {
    try {
      // Send a PUT request to update the user's password with both new and old passwords
      await axios.put(`http://localhost:8080/updatequery/${newPassword}/${oldPassword}`);
      console.log(`Updated password for user with phoneNumber: ${phoneNumber}`);
      loadUsers();
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table  historytable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <React.Fragment key={user.mobileno}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.mobileno}</td>
                  <td>{user.password}</td>
                  <td>
                    <button
                      className="btn btn-class mx-2"
                      onClick={() => setEditUserIndex(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-class mx-2"
                      onClick={() => deleteUser(user.mobileno)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                {editUserIndex === index && (
                  <tr>
                    <td colSpan="5">
                      <div className="input-group" style={{ margin: "10px 0" }}>
                        <input
                          type="text"
                          className="form-control "
                          placeholder="New Password"
                          value={user.newPassword || ''}
                          onChange={(e) => {
                            const updatedUsers = [...users];
                            updatedUsers[index].newPassword = e.target.value;
                            setUsers(updatedUsers);
                          }}
                        />
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Old Password"
                          value={user.oldPassword || ''}
                          onChange={(e) => {
                            const updatedUsers = [...users];
                            updatedUsers[index].oldPassword = e.target.value;
                            setUsers(updatedUsers);
                          }}
                        />
                        <button
                          className="btn btn-class"
                          onClick={() => {
                            if (user.newPassword && user.oldPassword) {
                              updateUserPassword(user.mobileno, user.newPassword, user.oldPassword);
                              // Reset the newPassword and oldPassword fields after updating
                              const updatedUsers = [...users];
                              updatedUsers[index].newPassword = '';
                              updatedUsers[index].oldPassword = '';
                              setUsers(updatedUsers);
                              setEditUserIndex(-1); // Exit edit mode
                            }
                          }}
                        >
                          Update Password
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
