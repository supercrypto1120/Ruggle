import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import {
    AppBar,
    Button,
    Tabs,
    Tab,
    Typography,
    Box,
    IconButton
} from '@mui/material';

import { Card } from '@material-ui/core';
import TokenModal from './TokenModal';
import SettingsIcon from '@mui/icons-material/Settings';
import { CardBody } from 'reactstrap';
import { Switch } from '@mui/material';
// Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TransformIcon from '@mui/icons-material/Transform';
import { switchNetwork, getBalance } from '../../../wallet';
import { swapToken } from '../../reducer/swap/action';

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

export default function DexTabs() {

    const dispatch = useDispatch();
    const { connectStatus, token1, token2 } = useSelector(state => state.tokens);

    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [isSettingOpen, setIsSettingOpen] = React.useState(false);
    const [balance_1, setBalance_1] = useState(0.0);
    const [balance_2, setBalance_2] = useState(0.0);

    

    useEffect(() => {
        if(connectStatus) {
            getBalanceByToken();
        }
    },[token1, token2])

    const getBalanceByToken = async () => {
        if(connectStatus) {
            setBalance_1(getBalance(token1));
        }
        // setBalance_2(await getBalance(token2));
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const toggleSetting = () => {
        setIsSettingOpen(!isSettingOpen)
    }
    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleCheckChain = async (chainID) => {
        await switchNetwork(chainID)
    }

    const handleSwap = () => {
        dispatch(swapToken());
    }

    return (
        <Box sx={{ bgcolor: 'transparant', width: '100%' }}>
            <div className='swap-flex-container' >
                <div className='text' >Swap</div>
                <div className='setting-icon'>
                    <SettingsIcon style={{ cursor: 'pointer'}} onClick={e => { toggleSetting() }} />
                    <Card className='settings  theme-shadow' style={{ display: isSettingOpen ? 'block' : 'none' }}>
                        <CardBody className='settings-box'>
                            <h4>Transection Settings</h4>
                            <h5 className=''>Slippage tolerance ?</h5>
                            <div className='t-box'>
                                <button className='c-btn auto-btn' > Auto </button>
                                <input className='t-input' placeholder='0.0%' />
                            </div>
                            <h5 className='mt-4'>Tranectoin deadline ?</h5>
                            <div className='t-deadline-box' >
                                <input placeholder='30' />
                                <h6>minutes</h6>
                            </div>
                            <h4 className='mt-4'>Interface Settings</h4>
                            <div className='i-box '>
                                <div className='auto-router-flex'>
                                    <h6 className='auto-router'>Auto Router API ?</h6>
                                    <div className='i-switch'>
                                        <Switch color='warning' />
                                    </div>
                                </div>
                                <div className='expert-mode-flex'>
                                    <h6 className='expert-mode'>Expert Mode ?</h6>
                                    <div className='i-switch'>
                                        <Switch color='warning' />
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <Typography variant="h6" align='center' sx={{pb: '20px'}}>Trade tokens in an instant</Typography>
            <AppBar position="static" sx={{bgcolor: 'white!important'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab className='tab-swap' onClick={ (e) => handleCheckChain(42)} label={(<p style={{ textTransform: 'capitalize' }} >Ethereum</p>)} {...a11yProps(0)} />
                    <Tab className='tab-swap' onClick={ (e) => handleCheckChain(56)} label={(<p style={{ textTransform: 'capitalize' }} >BSC</p>)} {...a11yProps(1)} />
                    <Tab className='tab-swap' onClick={ (e) => handleCheckChain(137)} label={(<p style={{ textTransform: 'capitalize' }} >Polygon</p>)} {...a11yProps(2)} />
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
                                <div className='clearfix'></div>
                                <div className='d-flex justify-content-between align-items-center pb-2 pr-2 pl-2'>
                                    <div className='row c-pointer'>
                                        <div className='col-5'>
                                            <TokenModal network={"eth"} id={"1"} />
                                        </div>
                                    </div>
                                    <Typography variant="p" style={{ display: connectStatus? 'block': 'none' }}>Balance 0.0</Typography>
                                </div>
                                <div className='balance-swap-pannel'>
                                    <div className=''>
                                        <input type="number" className='form-control token-input balence-input' placeholder='0.0' />
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <Button variant="outlined" color="primary" className='c_btn max mt-2'>max</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='swap-icn'>
                        <IconButton className='swap-icon' onClick={(e) => handleSwap()}>
                            <TransformIcon />
                        </IconButton>
                    </div>
                    <div>
                        <Card className="p-3 pb-4" >
                            <div>
                                <div className='clearfix'></div>
                                <div className='d-flex justify-content-between align-items-center pb-2 pr-2 pl-2'>
                                    <div className='row c-pointer'>
                                        <div className='col-5'>
                                            <TokenModal network={"eth"} id="2" />
                                        </div>
                                    </div>
                                    <Typography variant="p" style={{ display: connectStatus? 'block': 'none' }}>Balance 0.0</Typography>
                                </div>
                                <div className='balance-swap-pannel'>
                                    <div className=''>
                                        <input type="number" className='form-control token-input balence-input' placeholder='0.0' />
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <Button variant="outlined" color="primary" className='c_btn max mt-2'>max</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div>
                        <Card className="p-3 pb-4" >
                            <div>
                                <div className='clearfix'></div>
                                <div className='d-flex justify-content-between align-items-center pb-2 pr-2 pl-2'>
                                    <div className='row c-pointer'>
                                        <div className='col-5'>
                                            <TokenModal network={"bsc"} id="1" />
                                        </div>
                                    </div>
                                    <Typography variant="p" style={{ display: connectStatus? 'block': 'none' }}>Balance 0.0</Typography>
                                </div>
                                <div className='balance-swap-pannel'>
                                    <div className=''>
                                        <input type="number" className='form-control token-input balence-input' placeholder='0.0' />
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <Button variant="outlined" color="primary" className='c_btn max mt-2'>max</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='swap-icn'>
                        <IconButton className='swap-icon' onClick={(e) => handleSwap()}>
                            <TransformIcon />
                        </IconButton>
                    </div>
                    <div>
                        <Card className="p-3 pb-4" >
                            <div>
                                <div className='clearfix'></div>
                                <div className='d-flex justify-content-between align-items-center pb-2 pr-2 pl-2'>
                                    <div className='row c-pointer'>
                                        <div className='col-5'>
                                            <TokenModal network={"bsc"} id="2" />
                                        </div>
                                    </div>
                                    <Typography variant="p" style={{ display: connectStatus? 'block': 'none' }}>Balance 0.0</Typography>
                                </div>
                                <div className='balance-swap-pannel'>
                                    <div className=''>
                                        <input type="number" className='form-control token-input balence-input' placeholder='0.0' />
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <Button variant="outlined" color="primary" className='c_btn max mt-2'>max</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <div>
                        <Card className="p-3 pb-4" >
                            <div>
                                <div className='clearfix'></div>
                                <div className='d-flex justify-content-between align-items-center pb-2 pr-2 pl-2'>
                                    <div className='row c-pointer'>
                                        <div className='col-5'>
                                            <TokenModal network={"polygon"} id="1" />
                                        </div>
                                    </div>
                                    <Typography variant="p" style={{ display: connectStatus? 'block': 'none' }}>Balance 0.0</Typography>
                                </div>
                                <div className='balance-swap-pannel'>
                                    <div className=''>
                                        <input type="number" className='form-control token-input balence-input' placeholder='0.0' />
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <Button variant="outlined" color="primary" className='c_btn max mt-2'>max</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='swap-icn'>
                        <IconButton className='swap-icon' onClick={(e) => handleSwap()}>
                            <TransformIcon />
                        </IconButton>
                    </div>
                    <div>
                        <Card className="p-3 pb-4" >
                            <div>
                                <div className='clearfix'></div>
                                <div className='d-flex justify-content-between align-items-center pb-2 pr-2 pl-2'>
                                    <div className='row c-pointer'>
                                        <div className='col-5'>
                                            <TokenModal network={"polygon"} id="2" />
                                        </div>
                                    </div>
                                    <Typography variant="p" style={{ display: connectStatus? 'block': 'none' }}>Balance 0.0</Typography>
                                </div>
                                <div className='balance-swap-pannel'>
                                    <div className=''>
                                        <input type="number" className='form-control token-input balence-input' placeholder='0.0' />
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <Button variant="outlined" color="primary" className='c_btn max mt-2'>max</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}
