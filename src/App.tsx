import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, useMediaQuery, IconButton, Box, ListItemButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AppRoutes from './Navigation/AppRoutes';
import { useTheme } from '@mui/material/styles';
import './App.css';
import { light } from '@mui/material/styles/createPalette';


function App() {
  
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const isLargeScreen = useMediaQuery('(min-width:1050px)');
  const drawerWidth = 240;

  const navigationlinks = [
    { text: 'Etusivu', path: '/' },
    { text: 'Nepsyohjaus', path: '/nepsy' },
    { text: 'Valmennus', path: '/valmennus' },
    { text: 'Hinnasto', path: '/hinnasto' },
    { text: 'Tietoa minusta', path: '/tietoa' },
    { text: 'Ladattavat materiaalit', path: '/ladattavat' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };


  return (
    // <Router>
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      <AppBar position="fixed" sx={{
        // backgroundColor: '#e1ccbe'
        backgroundColor: '#e7dfd8'
        // backgroundColor: '#e3d1c5'
      }} >
        <Toolbar
          style={{ minHeight: theme.mixins.toolbar.minHeight }}
        >
          <Box sx={{ flexGrow: 1 }} />
          <img src="/PVLogo2.svg" alt="logo" style={{ height: 110, marginRight: 10, marginTop: 5, marginBottom: 5 }} />
          {/* <img src="/PVLogo.png" alt="logo" style={{ height: 40, marginRight: 10 }} /> */}
          {/* <Typography variant="h6" noWrap style={{ color: 'black' }}>
              Perheenvoima
            </Typography> */}
          <h1 style={{ 
            color: 'black',
            fontFamily: 'Dancing Script, cursive',
            fontWeight: '100',
             }}>Perheenvoima</h1>
          <Box sx={{ flexGrow: 1 }} />
          {isLargeScreen ? (
            navigationlinks.map((link, index) => (
              <Box key={index} sx={{ marginLeft: 2 }}>
                <ListItemButton
                  component={Link}
                  to={link.path}
                  style={{
                    fontWeight: '500',
                    // fontWeight: location.pathname === link.path ? 'bold' : 'none',
                    textDecoration: location.pathname === link.path ? 'underline' : 'none',
                    color: location.pathname === link.path ? 'gray' : 'black',
                    // color: 'black',
                    // opacity: 0.8,
                  }}
                >
                  {link.text}
                </ListItemButton>
              </Box>
            ))
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              style={{ marginRight: 16, marginLeft: 16, color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <div>
        <Drawer
          anchor='right'
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            style: {
              width: drawerWidth,
              backgroundColor: '#e1ccbe'
            }
          }}
        >
          {/* <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: theme.mixins.toolbar.minHeight,
              paddingLeft: 16
            }}>
              <IconButton onClick={handleDrawerToggle}>
                <CloseIcon />
              </IconButton>
            </div>
            <Divider /> */}
          <List>
            {navigationlinks.map((link, index) => (
              <>
                <ListItem key={index} onClick={() => setDrawerOpen(false)}>
                  <ListItemButton
                    component={Link}
                    to={link.path}
                    style={{
                      fontWeight: '500',
                      textDecoration: location.pathname === link.path ? 'underline' : 'none',
                      color: location.pathname === link.path ? 'gray' : 'black',
                    }}
                  >
                    <p>
                      {link.text}
                    </p>
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </Drawer>
        <main style={{ flexGrow: 1, marginTop: theme.mixins.toolbar.minHeight }}>
          <AppRoutes />
        </main>
      </div>
    </div>
    // </Router>
  );
}

export default App;