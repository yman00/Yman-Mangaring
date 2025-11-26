import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Project from './sections/Projects';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import './App.css';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import TextLoop from './sections/TextLoop';
import Technologies from './sections/Technologies';
import YSlogo from './assets/image/YS-Logo.png';

const drawerWidth = "50%";
const navItems = ['Home', 'About','Projects', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#121212', height: '100%' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={YSlogo} alt="YS Logo" style={{ height: 40 }} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'left', px: '2rem', py: '1rem', color: 'whitesmoke' }}
              onClick={() => {
                const sectionId = item.toLowerCase();
                const element = document.getElementById(sectionId);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="fixed" elevation={0} sx={{ backgroundColor: 'transparent'}}>
        <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: "whitesmoke" }}
          >
            <MenuIcon />
          </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'flex' },
                pl: '5rem',
                cursor: 'pointer',
                alignItems: 'center'
              }}
            >
              <img src={YSlogo} alt="YS Logo" style={{ height: 30 }} />
            </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 4, pr: '3rem' }}>
            {navItems.map((item) => (
            <a
              key={item}
              style={{ color: 'gray', cursor: 'pointer'  }}
              onClick={() => {
                const sectionId = item.toLowerCase();   
                const element = document.getElementById(sectionId);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {item}
            </a>
            ))}
          </Box>
          <Box sx={{display: 'flex', pr: { xs: 0, sm: '5rem' }}}>
            <Button
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudDownloadIcon />}
              href="/files/Yman_Mangaring.pdf" // Replace with actual file path or route
              download="MANGARING_CV.pdf"
              sx={{ ml: 2, fontSize: { xs: '0.7rem', sm: '0.8rem' }, px: { xs: 1, sm: 2 }, backgroundColor: 'bg.primary', color: 'txt.secondary' }}
            >
              Download CV
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{display: 'flex',flexDirection: 'column',width: '100vw', backgroundColor: 'whitesmoke', overflow: 'hidden'}}>
      <Home id="home"/>
      <About id="about"/>
      {/* <TextLoop/> */}
      <Technologies/>
      <Project id="projects"/>
      <Contact id="contact"/>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
