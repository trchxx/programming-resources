import React, { useContext, useState } from 'react';
import './HeaderMain.scss';
import { useAuthContext } from 'gowid-shared-context'; // Accediendo al contexto compartido
import {
  AppBar,
  Avatar,
  Box,
  Button,
  ButtonBase,
  CardMedia,
  IconButton,
  InputAdornment,
  InputBase,
  OutlinedInput,
  Toolbar,
  Typography,
  Badge,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export const HeaderMain = () => {
  let { isAuthenticated, logout, user } = useAuthContext();
  const navigate = useNavigate();

  const handleCartClick = () => {
    window.dispatchEvent(new CustomEvent('openModalCart'));
  };

  const handleLoginClick = () => {
    isAuthenticated
      ? logout()
      : window.dispatchEvent(new CustomEvent('openModalLogin'));
  };

  const handleProfileClick = () => {
    // Lógica para redirigir al perfil del usuario
    alert('Perfil clicado');
  };

  return (
    <>
      <div className="header-main">
        {/* Logo */}
        <ButtonBase
          onClick={() => navigate('/')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <Box
            component="img"
            src="https://placehold.co/120x40"
            alt="Logo"
            sx={{ height: 40 }}
          />
        </ButtonBase>

        {/* Barra de búsqueda */}
        <OutlinedInput
          placeholder="Search products..."
          sx={{
            borderRadius: '50px',
            height: '40px',
            backgroundColor: 'white',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ccc', // Color del borde
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#888', // Color del borde al pasar el mouse
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0E2F1A', // Color del borde al hacer foco
            },
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" sx={{ padding: '8px' }}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />

        <Box>
          {isAuthenticated ? (
            <IconButton onClick={handleCartClick}>
              <Badge badgeContent={0} showZero color="success">
                <ShoppingCartIcon sx={{ color: 'white', fontSize: 30 }} />
              </Badge>
            </IconButton>
          ) : (
            ''
          )}

          {/* Botón o icono dependiendo del estado del login */}
          {isAuthenticated ? (
            <IconButton onClick={handleProfileClick}>
              <PersonOutlineIcon sx={{ color: 'white', fontSize: 36 }} />
            </IconButton>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleLoginClick}
              sx={{
                textTransform: 'none',
                backgroundColor: '#1E6137',
                color: 'white',
              }}
            >
              Login
            </Button>
          )}
        </Box>
      </div>
    </>
  );
};
