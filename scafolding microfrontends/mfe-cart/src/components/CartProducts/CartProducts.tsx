import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProductsProps {
  products: Array<Product>;
}

export const CartProducts = ({ products }: CartProductsProps) => {
  return (
    <Box sx={{ paddingX: 2 }}>
      {products.map((item, index) => (
        <Box key={item.id} sx={{ marginBottom: '12px' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Image */}
            <Box>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '80px',
                  height: 'auto',
                  borderRadius: '4px',
                }}
              />
            </Box>

            {/* Name */}
            <Box
              sx={{
                flex: 2,
                marginLeft: '16px',
                textAlign: 'left', // Alineación izquierda
              }}
            >
              <Typography variant="body1">{item.name}</Typography>
            </Box>

            {/* Price and Quantity */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                alignItems: 'flex-end',
              }}
            >
              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{ marginBottom: '4px' }}
              >
                ${item.price.toFixed(2)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Qty: {item.quantity}
              </Typography>
            </Box>
          </Box>

          {/* Divider */}
          {index < products.length - 1 && <Divider sx={{ marginY: '8px' }} />}
        </Box>
      ))}
    </Box>
  );
};
