import { Box, Typography } from '@mui/material';
import React from 'react';

interface CartInfo {
  info: {
    tax: number;
    subtotal: number;
    total: number;
  };
}

export const CartInfo = ({ info }: CartInfo) => {
  return (
    <>
      {/* Summary Section */}
      <Box sx={{ padding: '16px', borderTop: '1px solid #e0e0e0' }}>
        <Typography variant="h6" gutterBottom>
          Summary
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
          }}
        >
          <Typography variant="body1">Subtotal:</Typography>
          <Typography variant="body1">${info.subtotal.toFixed(2)}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
          }}
        >
          <Typography variant="body1">Tax (10%):</Typography>
          <Typography variant="body1">${info.tax.toFixed(2)}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
          }}
        >
          <Typography variant="body1">Total:</Typography>
          <Typography variant="body1">${info.total.toFixed(2)}</Typography>
        </Box>
      </Box>
    </>
  );
};
