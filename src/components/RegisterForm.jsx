import { useState } from 'react';
import '../styles/home.css';


const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <div className='container'>
      <div className='register-form'>
        <h1>Register</h1>
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
