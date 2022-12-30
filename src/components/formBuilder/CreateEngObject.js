import React from 'react';
import Info from './Info';
import Choose from './Choose';
import { useNavigate } from 'react-router-dom';

const CreateEngObject = () => {
  const navigate = useNavigate();
  return (
    <div className='container mt-3 mb-5'>
      <div className='d-flex pt-4 pb-3 '>
        <div className='back '>
          <button onClick={() => navigate(-1)} className='btn btn-primary px-5'>
            Back
          </button>
        </div>
        <div className='heading  mx-5'>
          <p className='fs-4 fw-bold'>Create Eng Object</p>
        </div>
      </div>
      <div className='row d-flex justify-content-evenly p-0 m-0' style={{ height: '400px' }}>
        <Info />
        <Choose />
      </div>
    </div>
  );
};

export default CreateEngObject;
