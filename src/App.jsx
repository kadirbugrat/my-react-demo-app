import { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import AdminForm from './components/AdminForm';


const App = () => {
  const [user, setUser] = useState(null);
  const [registered, setRegistered] = useState(false);

  const handleRegister = (userData) => {
    setUser(userData);
    setRegistered(true);
  };

  return (
    <div>
      {!user ? (
        <RegisterForm onRegister={handleRegister} />
      ) : (
        <AdminForm registered={registered} />
      )}

    </div>
  );
};

export default App;
