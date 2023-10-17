import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EditUser() {
  const [user, setUser] = useState({});
  const { mobileno } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/getUserByPhoneNumber?phoneNumber=${mobileno}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error loading user:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/updateUser?phoneNumber=${mobileno}`, user);
      console.log(`Updated user with phoneNumber: ${mobileno}`);
      // Redirect to the user list page or perform any other action
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="container">
      <h2>Edit User</h2>
      <form onSubmit={updateUser}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            name="mobileno"
            value={user.mobileno || ''}
            readOnly // Prevent editing of phone number
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={user.password || ''}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more input fields for other user details */}
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}
