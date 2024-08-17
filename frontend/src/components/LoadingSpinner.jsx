import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner = ({ loading }) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <ClipLoader color="#007bff" loading={loading} size={50} />
    </div>
  );
};

export default LoadingSpinner;
