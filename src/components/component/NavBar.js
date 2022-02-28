import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  List,
  ListItem
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AdbIcon from '@mui/icons-material/Adb';
import AttractionsIcon from '@mui/icons-material/Attractions';
import BluetoothConnectedIcon from '@mui/icons-material/BluetoothConnected';
import BluetoothSearchingIcon from '@mui/icons-material/BluetoothSearching';
import WalletModal from './Wallet/WalletModal';
import logo from '../../assets/images/logo.png';
import { connectWallet, isWalletConnected } from "../../wallet.js";
import { walletConnectStatus } from '../reducer/swap/action';


import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';


export default function PrimarySearchAppBar() {
  const dispatch = useDispatch();
  const { connectStatus } = useSelector(state => state.tokens);

  const [isConnected, setIsConnected] = useState(connectStatus);

  useEffect(() => {
    setIsConnected(connectStatus);
  }, [connectStatus])

  const WConnect = async () => {
    await connectWallet();
    ;
    await dispatch(walletConnectStatus({
      status: await isWalletConnected()
    })) 
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const handleMobileMenuOpen = (event) => {
    console.log(event);
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Button fullWidth><WalletModal /></Button>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Button fullWidth>transaction</Button>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Button fullWidth>disconnect</Button>
      </MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <Link to="/" style={{ width: '100%' }}>
          <Button variant="outlined" color="primary" fullWidth><HomeIcon sx={{ margin: '0 2px 3px' }} /> Home</Button>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link to="/dex" style={{ width: '100%' }}>
          <Button variant="outlined" color="primary" fullWidth><AdbIcon sx={{ margin: '0 2px 3px' }} /> DEX</Button>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link to="/ido" style={{ width: '100%' }}>
          <Button variant="outlined" color="primary" fullWidth><AttractionsIcon sx={{ margin: '0 2px 3px' }} /> IDO</Button>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
       {isConnected?
            <Button variant="outlined" color="primary" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleProfileMenuOpen}><BluetoothConnectedIcon />CONNECTED</Button>
          : <Button variant="outlined" color="primary" onClick={ e => WConnect()}><BluetoothSearchingIcon sx={{ margin: '0 2px 3px' }} />connect wallet</Button>
        }
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="header">
        <Toolbar>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to="/" style={{ padding: '0 8px' }}>
                <Button color="inherit"><HomeIcon sx={{ margin: '0 2px 3px' }} /> Home</Button>
              </Link>
              <Link to="/dex" style={{ padding: '0 8px' }}>
                <Button color="inherit"><AdbIcon sx={{ margin: '0 2px 3px' }} /> DEX</Button>
              </Link>
              <Link to="/ido" style={{ padding: '0 8px' }}>
                <Button color="inherit"><AttractionsIcon sx={{ margin: '0 2px 3px' }} /> IDO</Button>
              </Link>
              <>
              {isConnected?
                  <Button sx={{color: 'white'}} aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleProfileMenuOpen}><BluetoothConnectedIcon />CONNECTED</Button>
                : <Button sx={{color: 'white'}} onClick={ e => WConnect()}><BluetoothSearchingIcon sx={{ margin: '0 2px 3px' }} />connect wallet</Button>
              }
              </>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{color: 'white'}}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

