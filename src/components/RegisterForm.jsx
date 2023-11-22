import { useState } from 'react';
import '../styles/home.css';
import AdminForm from './AdminForm';


const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username !== 'admin' || formData.password !== '1234' || formData.email !=='admin@gmail.com') {
      alert('Invalid username or password for registration.');
      return;
    }

    onRegister(formData);
    setRegistered(true);

  };

  return (
    <div className='container'>
      {registered ?  (
        <AdminForm />
      ) : (
      <div className='register-form'>
        <h1>Welcome Tarla Bahçe Sulama Ltd. Şti.</h1>
        <form onSubmit={handleSubmit}>
          <div className='label-input-container'>
            <label htmlFor='username'>Username:</label>
            <input
              className='input-field'
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className='label-input-container'>
            <label htmlFor='password'>Password:</label>
            <input
              className='input-field'
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className='label-input-container'>
            <label htmlFor='email'>E-Mail:</label>
            <input
              className='input-field'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className='button-container'>
            <button type='submit' className='button'>
              Login
            </button>
          </div>
        </form>
      </div>
      )}
    </div>
  );
};

export default RegisterForm;
