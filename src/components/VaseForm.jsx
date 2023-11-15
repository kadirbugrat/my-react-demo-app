import { useState } from 'react';
import '../styles/home.css';


const VaseForm = ({ onVaseSubmit }) => {
  const [vaseFormData, setVaseFormData] = useState({
    vaseName: '',
    flower: '',
  });

  const handleVaseChange = (e) => {
    const { name, value } = e.target;
    setVaseFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onVaseSubmit(vaseFormData);
    setVaseFormData({ vaseName: '', flower: '' });
  };

  return (
    <div>
      <h1>Add Vase</h1>
      <form onSubmit={handleSubmit}>
        <div className='label-input-container'>
          <label htmlFor='vaseName'>Vase Name:</label>
          <input
            className='input-field'
            type='text'
            name='vaseName'
            value={vaseFormData.vaseName}
            onChange={handleVaseChange}
          />
        </div>

        <div className='label-input-container'>
          <label htmlFor='flower'>Flower:</label>
          <input
            className='input-field'
            type='text'
            name='flower'
            value={vaseFormData.flower}
            onChange={handleVaseChange}
          />
        </div>

        <div>
          <button type='submit' className='button-vase'>
            Add Vase
          </button>
        </div>
      </form>
    </div>
  );
};

export default VaseForm;
