import { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import VaseForm from './components/VaseForm';


const App = () => {
  const [user, setUser] = useState(null);
  const [vases, setVases] = useState([]);

  const handleRegister = (userData) => {
    setUser(userData);
  };

  const handleVaseSubmit = (vaseData) => {
    setVases((prevVases) => [...prevVases, vaseData]);
  };

  return (
    <div>
      {!user ? (
        <RegisterForm onRegister={handleRegister} />
      ) : (
        <VaseForm onVaseSubmit={handleVaseSubmit} />
      )}

      <div className='vase-info-container'>
        <h2>User Info</h2>
        {user && (
          <p>
            Username: {user.username} <br />
            Email: {user.email}
          </p>
        )}
      </div>

      <div>
        <h2>Vases</h2>
        {vases.map((vase, index) => (
          <div className='vase-info-container' key={index}>
            <p>Vase Name: {vase.vaseName}</p>
            <p>Flower: {vase.flower}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
