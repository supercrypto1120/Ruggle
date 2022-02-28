import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import {
    AppBar,
    Tabs,
    Tab,
    Typography,
    Box,
    Card,
    IconButton
} from '@mui/material';

import { Modal, ModalBody } from "reactstrap";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function WalletModal() {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [addr, setAddr] = useState('0x40E7F0469093d175525Cd65178fe65A3a33c5Eb3');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <>  
            <span onClick={(e) => setOpen(true)}>Wallet</span>
            
            <Modal isOpen={open} toggle={() => setOpen(!open)}>
                <ModalBody>
                    <Typography variant="h6" align='center' sx={{pb: '20px', color: '#11161b'}}> Your Wallet</Typography>
                    <AppBar position="static" sx={{bgcolor: 'white!important'}}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab className='tab-swap' label={(<p style={{ textTransform: 'capitalize', color: 'black' }} >Wallet</p>)} {...a11yProps(0)} />
                            <Tab className='tab-swap' label={(<p style={{ textTransform: 'capitalize', color: 'black' }} >Transactions</p>)} {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <div>
                                <Card className="p-3 pb-4" >
                                    <div>
                                        <Typography variant='p' sx={{ color: '#007bff' }}>Your address</Typography>
                                        <div className='address-pannel'>
                                            <Typography variant='p'>{addr.slice(0, 31)}</Typography>
                                            <IconButton className='copy-btn'> <ContentCopyIcon /> </IconButton>
                                            
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <div>
                                <Card className="p-3 pb-4" >
                                    <div>
                                        
                                    </div>
                                </Card>
                            </div>
                        </TabPanel>
                    </SwipeableViews>
                </ModalBody>
            </Modal>
        </>
        
    );
}
