import { CircularProgress } from '@mui/material';
import React from 'react';

export const LoadingButton: React.FC = () => {
  return (
    <button className="loading-button" disabled>
      <div className="icon">
        <CircularProgress size={18} color="inherit" />
      </div>
    </button>
  );
};
