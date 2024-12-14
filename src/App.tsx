import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton, Box, ListItemButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AppRoutes from './Navigation/AppRoutes';
import { useTheme } from '@mui/material/styles';
import './App.css';

const drawerWidth = 240;

function App() {

  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const navigationlinks = [
    { text: 'Etusivu', path: '/' },
    { text: 'Nepsyohjaus', path: '/nepsy' },
    { text: 'Tietoa', path: '/tietoa' },
    { text: 'Valmennus', path: '/valmennus' },
    // { text: 'Dev', path: '/dev' }
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };


  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
        <AppBar position="fixed" sx={{ 
          // backgroundColor: '#e1ccbe'
          // backgroundColor: '#e7dfd8'
          backgroundColor: '#e3d1c5'
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
            <h2 style={{color: 'black'}}>Perheenvoima</h2>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              style={{ marginRight: 16, marginLeft: 16, color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
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
                  <ListItemButton component={Link} to={link.path}>
                    {/* <ListItemText primary={link.text} /> */}
                    <p>{link.text}</p>
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
    </Router>
  );
}

export default App;