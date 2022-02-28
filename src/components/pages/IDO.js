import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Typography, Grid, Button } from '@mui/material';
import Usd from '../../assets/images/usd.svg';
import FAQ from './FAQ';
const IDO = () => {
    return (
        <div>
            <div>
                <section className="main-banner-img" id="whitepaper">
                    <div>
                        <Grid className='row'>
                            <div className='col-md-3 offset-md-4'>
                                <Card className='ido-card'>
                                    <CardBody>
                                        <div className='pt-4 pb-4'>
                                            <Typography variant='h3' style={{ fontSize: '22px' }}>IDO SHDW</Typography>
                                        </div>
                                        <div className='ido-content'>
                                            <Card className='ido-content-card mb-5' >
                                                <CardBody>
                                                    <div className='text-center'>
                                                        <p>Total raised</p>
                                                        <Typography variant='h4'>
                                                            <img style={{ width: '25px', height: '25px' }} src={Usd} alt='usd' />
                                                            52,029,280.58
                                                        </Typography>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card className='ido-content-card mb-5' >
                                                <CardBody>
                                                    <div className='text-center'>
                                                        <p>Token Price</p>
                                                        <Typography variant='h4'>
                                                            <img style={{ width: '25px', height: '25px' }} src={Usd} alt='usd' />
                                                            52,029,280.58
                                                        </Typography>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card className='ido-content-card mb-5' >
                                                <CardBody>
                                                    <div className='text-center'>
                                                        <p>Your contribution</p>
                                                        <Typography variant='h4'>
                                                            <img style={{ width: '25px', height: '25px' }} src={Usd} alt='usd' />
                                                            N/A
                                                        </Typography>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card className='ido-content-card mb-5' >
                                                <CardBody>
                                                    <div className='text-center'>
                                                        <p>Redeemable amount</p>
                                                        <Typography variant='h4'>
                                                            <img style={{ width: '25px', height: '25px' }} src={Usd} alt='usd' />
                                                            N/A
                                                        </Typography>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </div>
                                        <Button variant="outlined" color='primary' > Redeem SHDW </Button>
                                    </CardBody>
                                </Card>
                            </div>
                        </Grid>
                        <div className='row mt-5'>
                            <div className='col-md-6 offset-md-3'>
                                <FAQ />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default IDO
