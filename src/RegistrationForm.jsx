import React, {useEffect, useState } from 'react';
import './RegistrationForm.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobileno: '',
        password: '',
        modelname: '',
        modelbrand: '',
        registrationnumber: '',
        description: '',
        pickuptime: '',
        deliverydate: '',
        deliverytime: '',
        address: '',
        feedback: ''
    });
    const [users, setUsers] = useState([]);
  const [editUserIndex, setEditUserIndex] = useState(-1); // Index of the user in edit mode, -1 means no user is in edit mode.

  useEffect(() => {
    loadUsers();
  }, []);
  const handlebtnClick = ()=>{

  }


    const loadUsers = async () => {
        try {
          const response = await axios.get("http://localhost:8080/showDetails");
          setUsers(response.data);
        } catch (error) {
          console.error('Error loading users:', error);
        }
      };
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Send the formData object to the server
            const response = await axios.post('http://localhost:8080/addDetails', formData);
            console.log('Data posted successfully:', response.data);
            loadUsers();
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className='reg-form-container'>
            <h1>Book a Service</h1>
            <form className='reg-form-form' onSubmit={handleSubmit}>
                <div className='reg-form-row'>
                <div className='reg-form-div'>
    <label className='reg-form-label'>Name</label>
    <input
        type='text'
        className='reg-form-input'
        placeholder='Enter your Name'
        name='name'
        value={formData.name}
        onChange={handleInputChange}
    />
</div>
<div className='reg-form-div'>
    <label className='reg-form-label'>Mobile Number</label>
    <input
        type='text'
        className='reg-form-input'
        placeholder='Enter your mobile number'
        name='mobileno'
        value={formData.mobileno}
        onChange={handleInputChange}
    />
</div>
<div className='reg-form-div'>
    <label className='reg-form-label'>Password</label>
    <input
        type='text'
        className='reg-form-input'
        placeholder='Enter your password'
        name='password'
        value={formData.password}
        onChange={handleInputChange}
    />
</div>
<div className='reg-form-div'>
    <label className='reg-form-label'>Model Name</label>
    <input
        type='text'
        className='reg-form-input'
        placeholder='Enter your model Name'
        name='modelname'
        value={formData.modelname}
        onChange={handleInputChange}
    />
</div>
<div className='reg-form-div'>
    <label className='reg-form-label'>Model Brand</label>
    <input
        type='text'
        className='reg-form-input'
        placeholder='Enter your brand'
        name='modelbrand'
        value={formData.modelbrand}
        onChange={handleInputChange}
    />
</div>
<div className='reg-form-div'>
    <label className='reg-form-label'>Registration Number</label>
    <input
        type='text'
        className='reg-form-input'
        placeholder='Enter your Vehicle Registration number'
        name='registrationnumber'
        value={formData.registrationnumber}
        onChange={handleInputChange}
    />
</div>
<div className='reg-form-div'>
    <label className='reg-form-label'>Service Description</label>
    <input
        type='text'
        className='reg-form-input'
        placeholder='Brief the Service you require'
        name='description'
        value={formData.description}
        onChange={handleInputChange}
    />
</div>
<div className='reg-form-div'>
    <label className='reg-form-label'>Pickup Time</label>
    <input
        type='datetime-local'
        className='reg-form-input'
        name='pickuptime'
        value={formData.pickuptime}
        onChange={handleInputChange}
    />
</div>
<div className='reg-form-div'>
    <label className='reg-form-label'>Delivery date</label>
    <input
        type='datetime-local'
        className='reg-form-input'
        name='deliverydate'
        value={formData.deliverydate}
        onChange={handleInputChange}
    />
</div>
<div className='reg-form-div'>
    <label className='reg-form-label'>Delivery time</label>
    <input
        type='datetime-local'
        className='reg-form-input'
        name='deliverytime'
        value={formData.deliverytime}
        onChange={handleInputChange}
    />
</div>
<div className='reg-form-div'>
    <label className='reg-form-label'>Delivery Address</label>
    <input
        type='text'
        className='reg-form-input'
        placeholder='Enter the delivery Address'
        name='address'
        value={formData.address}
        onChange={handleInputChange}
    />
</div>
<div className='reg-form-div'>
    <label className='reg-form-label'>Feedback</label>
    <input
        type='text'
        className='reg-form-input'
        placeholder='Enter your feedback here'
        name='feedback'
        value={formData.feedback}
        onChange={handleInputChange}
    />
</div>

                </div>
                
                <button type='submit' className='reg-form-button' >
           Submit
                </button>  
            </form>
            
        </div>
    );
}

export default RegistrationForm;
