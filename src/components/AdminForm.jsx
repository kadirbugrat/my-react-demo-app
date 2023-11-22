import { useState } from 'react';
import '../styles/home.css';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';


const AdminForm = ({registered}) => {
    const [adminFormData, setAdminFormData] = useState({
      username: '',
      password: '',
    });

  const handleAdminForm = (e) => {
    setAdminFormData({
      ...adminFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (adminFormData.username === '' || adminFormData.password === '') {
      alert('Please enter both username and password.');
      return;
  }
};

  return (
    
    <div className='admin-panel'>
      <h1>Admin Panel</h1>
      
      {registered && (
        <div>
          <h1 className='data-panel'>
           
            Susamış
          
            Susamamış

            Susamış
          
            Susamamış

            Susamış
          
            Susamamış

          </h1>
        </div>
      )}

    </div>
    
    );
  }

  export default AdminForm;