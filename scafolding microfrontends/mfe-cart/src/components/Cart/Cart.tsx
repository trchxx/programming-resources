import React, { useEffect, useState } from 'react';
import './Cart.scss';
import {
  Box,
  Button,
  IconButton,
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuthContext } from 'gowid-shared-context';
import { CartProducts } from '../CartProducts/CartProducts';
import { CartInfo } from '../CartInfo/CartInfo';
import { MockCart } from '@/mocks/CartMock';

export const Cart = () => {
  const mockCart = MockCart;
  const { user } = useAuthContext();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    window.addEventListener('openModalCart', () => {
      setIsDrawerOpen(true);
    });
  }, []);

  return (
    <div>
      <Drawer
        anchor={isMobile ? 'bottom' : 'right'}
        open={isDrawerOpen}
        onClose={closeDrawer}
        PaperProps={{
          sx: isMobile
            ? { height: '100%', borderRadius: '16px 16px 0 0' }
            : { width: 400 },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #ddd',
            paddingLeft: 1,
            paddingBottom: 1,
            marginY: 2,
          }}
        >
          <IconButton onClick={closeDrawer}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ marginLeft: 1 }}>
            Cart
          </Typography>
        </Box>

        {mockCart.products.length === 0 ? (
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <img
              src="https://via.placeholder.com/200"
              alt="Empty Cart"
              style={{
                width: '150px',
                height: 'auto',
                marginBottom: '20px',
              }}
            />
            <Typography
              variant="h6"
              sx={{ marginBottom: '16px', maxWidth: '50%' }}
            >
              ¡Tu carrito está vacío! Ve a la tienda y agrega algunos productos
              deliciosos.
            </Typography>
          </Box>
        ) : (
          <>
            {/* Contenedor de productos */}
            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                paddingBottom: '16px',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
              }}
            >
              <CartProducts products={mockCart.products}></CartProducts>
              <CartInfo info={mockCart.cartInfo}></CartInfo>
            </Box>

            {/* Botón "Continuar" */}
            <Box
              sx={{
                position: 'sticky',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'white',
                padding: '16px',
                borderTop: '1px solid #e0e0e0',
                boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ padding: '14px' }}
              >
                Continue Order
              </Button>
            </Box>
          </>
        )}
      </Drawer>
    </div>
  );
};
