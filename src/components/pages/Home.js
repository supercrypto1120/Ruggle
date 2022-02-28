import React from 'react';
import { 
    Box, 
    Card,
    Grid,
    Typography,
    Input,
    Button,
    List,
    ListItem
} from '@mui/material';

import SimpleSlider from '../component/Carousel';
import Coin1 from '../../assets/images/coin4.jpg';
import Coin2 from '../../assets/images/coin5.jpg';
import '../../assets/css/bootstrap.css';
import '../../assets/css/style.css';
import '../../assets/css/custom.css';
import '../../assets/css/animate.css';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                <Box className="section">
                    <div className="main-banner wow fadeInLeft">
                        <Grid className="container">
                            <Grid className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="banner-text">
                                        <Typography variant='h3'>Search Engine for Crypto </Typography>
                                        <Typography variant='h4'>Introducing Ruugle, an innovative and advanced search engine that is censorship
                                            resistant for all crypto related sites, and a crypto grading platform to determine high
                                            and low risk investments.
                                        </Typography>
                                    </div>
                                    <div className="row">
                                        <div className="d-flex justify-content-center col-md-12 col-lg-5">
                                            <Link className="btn my-2 my-sm-0 dark-blue-btn width-220-btn" data-scroll to="assets/docs/Ruugle Token  - Smart Contracts Security Audit Report.pdf">
                                                Audit Report
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="banner-socials">
                                        <List style={{display: 'flex'}}>
                                            <ListItem sx={{ width: "auto" }}><Link to="https://t.me/Ruugle" target="blank"><img src="https://ruugle.io/assets/img/tele.png" alt='' /></Link></ListItem>
                                            <ListItem sx={{ width: "auto" }}><Link to="https://www.reddit.com/user/Ruugle/" target="blank"><img src="https://ruugle.io/assets/img/reddit.png" alt='' /></Link></ListItem>
                                            <ListItem sx={{ width: "auto" }}><Link to="https://twitter.com/Ruugleio?s=09" target="blank"><img alt='' src="https://ruugle.io/assets/img/twitter.png" /></Link></ListItem>
                                            <ListItem sx={{ width: "auto" }}><Link to="https://tiktok.com/@ruugle.io" target="blank"><img alt='' src="https://ruugle.io/assets/img/tiktok.png" /></Link></ListItem>
                                            <ListItem sx={{ width: "auto" }}><Link to="https://youtu.be/5P3L5LfZjb8" target="blank"><img alt='' src="https://ruugle.io/assets/img/youtube.png" /></Link></ListItem>
                                        </List>
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-6'>
                                    <img className="d-block img-fluid" src="https://ruugle.io/assets/img/top-bnr-bg.png" alt='' />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
                <Box className='section' >
                    <Card className='left-pannel' raised>
                        <img src={Coin1} alt="" />
                    </Card>
                    <Card className="slide-pannel" raised>
                        <SimpleSlider />
                    </Card>
                    <Card className='right-pannel'>
                        <img src={Coin2} alt="" />
                    </Card>
                </Box>
                <Box id="about" className="section" style={{ outline: 'none' }}>
                    <div className="ruugle-video">
                        <div className="container">
                            <Grid className="row">
                                <div className="col-md-6 wow fadeInRight" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                    <Typography variant='h3'>What is Ruugle?</Typography>
                                </div>
                                <div className="col-md-6 wow fadeInLeft" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                    <img src="https://ruugle.io/assets/img/ruugle.jpg" className="img-fluid ruugle-video-img" alt="ruugle-video" data-toggle="modal" data-target="#exampleModalCenter" />
                                </div>
                            </Grid>
                        </div>
                    </div>
                </Box>
                <Box className='section'>
                    <div className="ruugle-project-section">
                        <Grid className="container">
                            <Grid className="row">
                                <div className="col-md-4 phone-spacing wow flipInX mt-2" data-wow-offset={300} data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'flipInX' }}>
                                    <div className="ruugle-property">
                                        <img src="https://ruugle.io/assets/img/grain-effect.svg" alt='' className="img-fluid" />
                                        <Typography variant="h4">Ruugle Advertisements</Typography>
                                        <Typography variant="p" className="dark-blue">
                                            Make an advertisement on the Ruugle Search engine, and gain targeted
                                            traffic flow.
                                        </Typography>
                                    </div>
                                </div>
                                <div className="col-md-4 phone-spacing  wow flipInY mt-2" data-wow-offset={300} data-wow-delay="0.9s" style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'flipInY' }}>
                                    <div className="ruugle-property">
                                        <img src="https://ruugle.io/assets/img/spaceship.svg" className="img-fluid" alt='' />
                                        <Typography variant="h4">Blazing Speeds</Typography>
                                        <Typography variant="p" className="dark-blue">
                                            One click search results for all your crypto needs without censorship.
                                        </Typography>
                                    </div>
                                </div>
                                <div className="col-md-4 phone-spacing wow flipInX mt-2" data-wow-offset={300} data-wow-delay="1.4s" style={{ visibility: 'visible', animationDelay: '1.4s', animationName: 'flipInX' }}>
                                    <div className="ruugle-property">
                                        <img src="https://ruugle.io/assets/img/ranking.svg" className="img-fluid" alt='' />
                                        <Typography variant="h4">Search Engine Optimization </Typography>
                                        <Typography variant="p" className="dark-blue">
                                            Ability to optimize your rankings on Ruugle with SEO tools, and the
                                            amount of RGL you hold in your wallet.
                                        </Typography>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
                <Box className='section'>
                    <div className="influencer-calls">
                        <Grid className="container">
                            <div className="influence-section">
                                <Grid className="row flex-column-reverse flex-lg-row">
                                    <div className="col-md-12 col-lg-6 wow fadeInRight influencer-pannel" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <div className="influencer-text">
                                            <Typography variant="h2" className="wow fadeInUp" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                                Crypto Influencer Call Tracking 
                                            </Typography>
                                            <Typography variant="h4" className="dark-blue">
                                                This tool will be used to offer results based on influencer calls,
                                                if the influencer is involved in scam calls a lot their "trust" rating will greatly drop. 
                                            </Typography>
                                            <Typography variant="h5" className="dark-blue">With this innovative tool, investors will know which influencers
                                                to follow, and which ones they should avoid.
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6 col-xl-4 offset-xl-1 wow fadeInLeft" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <div className="influencer-img">
                                            <img src="https://ruugle.io/assets/img/influancer-new.png" alt="influencer-calls" className />
                                        </div>
                                    </div>
                                </Grid>
                                <div className="better-project">
                                    <Grid className="row pt-5">
                                        <div className="col-md-12 col-lg-4 wow fadeInRight" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                            <img src="https://ruugle.io/assets/img/report.svg" className="ruugle-project-section-img" alt="ruugle-video" />
                                        </div>
                                        <div className="col-md-12 col-lg-7 offset-lg-1 wow better-pannel fadeInLeft" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                            <Typography variant="h2"> Better Project Bureau </Typography>
                                            <Typography variant="h5" className="dark-blue">
                                                Ruugle, Better project bureau is a reporting tool for the
                                                community, and investors. Community members of all crypto projects will be able to
                                                report illegitimate activity or file complaints with Ruugle to warn other potential
                                                investors, and the projects will have an opportunity to resolve these complaints in
                                                a timely manner.
                                            </Typography>
                                        </div>
                                    </Grid>
                                </div>
                                <div id="whitepaper" className="influence-after wow flipInX" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'flipInX' }}>
                                    <Grid className="row">
                                        <div className="col-md-12 mt-3">
                                            <Typography variant="h2">Ruugle Insurance </Typography>
                                            <Typography variant="h5" className="dark-blue">
                                                Insurance for qualifying projects according to our “Ruugle safety score.” 
                                                This will be offered to investors who want to keep their hard-earned money
                                                safe from a potential scam.
                                            </Typography>
                                        </div>
                                    </Grid>
                                </div>
                                <div id="whitepaper" className="influence-after">
                                    <Grid className="row">
                                        <div className="col-md-6 wow flipInX mt-4" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'flipInX' }}>
                                            <Typography variant="h6">Ruugle Insurance Bond</Typography>
                                            <Typography variant="h5" className="dark-blue">
                                                The Projects will get an insurance bond to give a financial
                                                guarantee, and build trust in their community by locking a certain amount of BSC
                                                into the Ruugle bond vault. This will be given back once the project completes.
                                            </Typography>
                                        </div>
                                        <div className="col-md-6 wow flipInX mt-4" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'flipInX' }}>
                                            <Typography variant="h6">KYT</Typography>
                                            <Typography variant="h5" className="dark-blue">
                                                Communities will encourage projects to register with Ruugle. Team
                                                information now called KYT “know your team” will be required to have a high project
                                                rating with Ruugle. KYT will be held private, in case of a scam or a rug it will be
                                                given to the authorities. 
                                            </Typography>
                                        </div>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                    </div>
                </Box>
                <Box className="section">
                    <div className="crptogrm">
                        <Grid className="container">
                            <Typography variant="h2" className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Cryptogram </Typography>
                            <Typography variant="h5" className="dark-blue wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                All-in-one messaging platform for the crypto world that will have payment options with a crypto wallet built
                                in, with the ability to do Ads, collect payments from memberships, and send community donations.
                            </Typography>
                        </Grid>
                    </div>
                </Box>
                <Box className='section'>
                    <div className="exchanges-section">
                        <Grid className="container">
                            <Grid className="row flex-column-reverse flex-md-row">
                                <div className="col-md-6 wow fadeInleft" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                    <div className="exchange-text">
                                        <Typography variant="h3">Exchanges</Typography>
                                        <img src="https://ruugle.io/assets/img/bnb.png" alt="exchange " className="img-fluid d-block d-sm-none" />
                                        <Typography variant="h4" className="dark-blue">
                                            RGL will be available to buy<br />
                                            on pancake swap after the presale.
                                        </Typography>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInRight" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                    <div className="exchange-img">
                                        <img src="https://ruugle.io/assets/img/bnb.png" alt="exchange " className="img-fluid d-none d-sm-block" />
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
                <Box id="token" className='section' tabIndex={-1} style={{ outline: 'none' }}>
                    <div className="donut-token">
                        <Grid className="container">
                            <div className="stats">
                                <Grid className="row">
                                    <div className="col-md-12 offset-md-1 wow fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <Typography variant="h2">Ruugle Tokenomics</Typography>
                                        <Typography variant="h5" className="dark-blue">Circulating Supply 179 Million</Typography>
                                        <Grid className="row mt-3">
                                            <div className="col-8">
                                                <Typography variant="h4">
                                                    <div className="box pink" /> Presale 20 percent
                                                </Typography>
                                            </div>
                                            <div className="col-4">
                                                <h4>
                                                    <Grid className="row">
                                                        <div className="col-4">35.8 </div>
                                                        <div className="col-8">Million</div>
                                                    </Grid>
                                                </h4>
                                            </div>
                                        </Grid>
                                        <Grid className="row mt-1">
                                            <div className="col-8">
                                                <Typography variant="h4">
                                                    <div className="box blue" /> Investors and partners 15 percent
                                                </Typography>
                                            </div>
                                            <div className="col-4">
                                                <Typography variant="h4">
                                                    <div className="row">
                                                        <div className="col-4">26.85 </div>
                                                        <div className="col-8"> Million</div>
                                                    </div>
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid className="row mt-1">
                                            <div className="col-8">
                                                <Typography variant="h4">
                                                    <div className="box yellow" /> Liquidity 15 percent
                                                </Typography>
                                            </div>
                                            <div className="col-4">
                                                <Typography variant="h4">
                                                    <Grid className="row">
                                                        <div className="col-4">26.85 </div>
                                                        <div className="col-8"> Million</div>
                                                    </Grid>
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <div className="row mt-1">
                                            <div className="col-8">
                                                <Typography variant="h4">
                                                    <div className="box green" /> Marketing 10 percent
                                                </Typography>
                                            </div>
                                            <div className="col-4">
                                                <Typography variant="h4">
                                                    <Grid className="row">
                                                        <div className="col-4">17.9 </div>
                                                        <div className="col-8">Million</div>
                                                    </Grid>
                                                </Typography>
                                            </div>
                                        </div>
                                        <Grid className="row mt-1">
                                            <div className="col-8">
                                                <Typography variant="h4">
                                                    <div className="box purple" /> Development 8.38 percent
                                                </Typography>
                                            </div>
                                            <div className="col-4">
                                                <Typography variant="h4">
                                                    <Grid className="row">
                                                        <div className="col-4">15</div>
                                                        <div className="col-8">Million </div>
                                                    </Grid>
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid className="row mt-1">
                                            <div className="col-8">
                                                <Typography variant="h4">
                                                    <div className="box orange" /> Air drop wallet holders 23.24 percent
                                                </Typography>
                                            </div>
                                            <div className="col-4">
                                                <Typography variant="h4">
                                                    <Grid className="row">
                                                        <div className="col-4">41.6</div>
                                                        <div className="col-8">Million</div>
                                                    </Grid>
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid className="row mt-1">
                                            <div className="col-8">
                                                <Typography variant="h4">
                                                    <div className="box bright-yellow" /> Team 8.38 percent
                                                </Typography>
                                            </div>
                                            <div className="col-4">
                                                <Typography variant="h4">
                                                    <div className="row">
                                                        <div className="col-4">15 </div>
                                                        <div className="col-8">Million</div>
                                                    </div>
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <div className="row mt-1">
                                            <div className="col-12">
                                                <h4>Locked until November of 2021 via Trust Swap.</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </div>
                        </Grid>
                    </div>
                </Box>
                <Box className="section">
                    <div className="team-section">
                        <Grid className="container">
                            <Typography variant="h3" className="wow fadeInUp animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Our Team</Typography>
                            <div className="show-team">
                                <Grid className="row">
                                    <div className="col-lg-2 col-sm-4 col-12 phone-spacing wow fadeInLeft animated" data-wow-offset={300} data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                                        <figure>
                                            <img src="https://via.placeholder.com/170" className="img-fluid rounded-sm" alt="Team Member" />
                                        </figure>
                                        <Typography variant="h4">Lee Bowman</Typography>
                                        <Typography variant="p" className="dark-blue">Head of Product</Typography>
                                        <div className="social-links">
                                            <ul>
                                                <li><Link to=""><img src="https://ruugle.io/assets/img/link.png" alt='' /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-4 col-12 phone-spacing wow fadeInLeft animated" data-wow-offset={300} data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                        <figure>
                                            <img src="https://via.placeholder.com/170" className="img-fluid rounded-sm" alt="Team Member" />
                                        </figure>
                                        <Typography variant="h4">Lee Bowman</Typography>
                                        <Typography variant="p" className="dark-blue">Head of Product</Typography>
                                        <div className="social-links">
                                            <ul>
                                                <li><a href><img src="https://ruugle.io/assets/img/link.png" alt='' /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-4 col-12 phone-spacing wow fadeInLeft animated" data-wow-offset={300} data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                        <figure>
                                            <img src="https://via.placeholder.com/170" className="img-fluid rounded-sm" alt="Team Member" />
                                        </figure>
                                        <Typography variant="h4">Lee Bowman</Typography>
                                        <Typography variant="p" className="dark-blue">Head of Product</Typography>
                                        <div className="social-links">
                                            <ul>
                                                <li><Link to=""><img src="https://ruugle.io/assets/img/link.png" alt='' /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-4 col-12 phone-spacing wow fadeInLeft animated" data-wow-offset={300} data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                                        <figure>
                                            <img src="https://via.placeholder.com/170" className="img-fluid rounded-sm" alt="Team Member" />
                                        </figure>
                                        <Typography variant="h4">Lee Bowman</Typography>
                                        <Typography variant="p" className="dark-blue">Head of Product</Typography>
                                        <div className="social-links">
                                            <ul>
                                                <li><Link to=""><img src="https://ruugle.io/assets/img/link.png" alt='' /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-4 col-12 phone-spacing wow fadeInLeft animated" data-wow-offset={300} data-wow-delay="1s" style={{ visibility: 'visible', animationDelay: '1s', animationName: 'fadeInLeft' }}>
                                        <figure>
                                            <img src="https://via.placeholder.com/170" className="img-fluid rounded-sm" alt="Team Member" />
                                        </figure>
                                        <Typography variant="h4">Lee Bowman</Typography>
                                        <Typography variant="p" className="dark-blue">Head of Product</Typography>
                                        <div className="social-links">
                                            <ul>
                                                <li><Link to="/"><img src="https://ruugle.io/assets/img/link.png" alt='' /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-4 col-12 phone-spacing wow fadeInLeft animated" data-wow-offset={300} data-wow-delay="1.2s" style={{ visibility: 'visible', animationDelay: '1.2s', animationName: 'fadeInLeft' }}>
                                        <figure>
                                            <img src="https://via.placeholder.com/170" className="img-fluid rounded-sm" alt="Team Member" />
                                        </figure>
                                        <Typography variant="h4">Lee Bowman</Typography>
                                        <Typography variant="p" className="dark-blue">Head of Product</Typography>
                                        <div className="social-links">
                                            <ul>
                                                <li><Link to=""><img src="https://ruugle.io/assets/img/link.png" alt='' /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Grid>
                            </div>
                        </Grid>
                    </div>
                </Box>
                <Box className="section">
                    <div className="road-map-section">
                        <Grid className="container">
                            <Typography variant="h3" className="wow fadeInUp animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Road Map</Typography>
                            <Typography variant="h2" className="text-left wow fadeInUp d-block d-md-none animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>2021</Typography>
                            <Grid className="row">
                                <div className="col-md-4">
                                    <Typography variant="h5" className="dark-blue wow fadeInUp animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                        You take your notes, we take care of everything else.
                                        </Typography>
                                </div>
                                <div className="col-md-8 mt-5">
                                    <Typography variant="h2" className="text-right wow fadeInUp d-none d-md-block animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>2021</Typography>
                                </div>
                            </Grid>
                            <div className="road-map-qs">
                                <Grid className="row">
                                    <div className="col-md-6 wow fadeInLeft animated" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                        <div className="road-maps-inner">
                                            <Grid className="row">
                                                <div className="col-md-3">
                                                    <Typography variant="h2" className="dark-blue">Q1</Typography>
                                                </div>
                                                <div className="col-md-9">
                                                    <Typography variant="h4">Walk-in</Typography>
                                                    <Typography variant="p" className="dark-blue">Bradley Duncan</Typography>
                                                </div>
                                            </Grid>
                                        </div>
                                    </div>
                                    <div className="col-md-6 wow fadeInRight animated" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInRight' }}>
                                        <div className="road-maps-inner">
                                            <Grid className="row">
                                                <div className="col-md-3">
                                                    <Typography variant="h2" className="dark-blue">Q2</Typography>
                                                </div>
                                                <div className="col-md-9">
                                                    <Typography variant="h4">The future of Online Marketing</Typography>
                                                    <Typography variant="p" className="dark-blue">Bradley Duncan</Typography>
                                                </div>
                                            </Grid>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid className="row">
                                    <div className="col-md-6 wow fadeInLeft animated" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                        <div className="road-maps-inner">
                                            <Grid className="row">
                                                <div className="col-md-3">
                                                    <Typography variant="h2" className="dark-blue">Q3</Typography>
                                                </div>
                                                <div className="col-md-9">
                                                    <Typography variant="h4">Welcome and introduction to DE 2020</Typography>
                                                    <Typography variant="p" className="dark-blue">Lee Bowman</Typography>
                                                </div>
                                            </Grid>
                                        </div>
                                    </div>
                                    <div className="col-md-6 wow fadeInRight animated" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInRight' }}>
                                        <div className="road-maps-inner">
                                            <Grid className="row">
                                                <div className="col-md-3">
                                                    <Typography variant="h2" className="dark-blue">Q4</Typography>
                                                </div>
                                                <div className="col-md-9">
                                                    <Typography variant="h4">Finding the right Technical Setup</Typography>
                                                    <Typography variant="p" className="dark-blue">Roger Stevens</Typography>
                                                </div>
                                            </Grid>
                                        </div>
                                    </div>
                                </Grid>
                            </div>
                        </Grid>
                    </div>
                </Box>
                <Box id="sponsor" className="section">
                    <div className="sponser-section">
                        <Grid className="container">
                            <h3 className="text-center wow fadeInUp animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Sponsors</h3>
                            <div className="sponsor-logo d-sm-block d-none">
                                <Grid className="row">
                                    <div className="col wow fadeinLeft animated" data-wow-offset={300} data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/11.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinLeft animated" data-wow-offset={300} data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/21.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinLeft animated" data-wow-offset={300} data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/31.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinLeft animated" data-wow-offset={300} data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/41.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinLeft animated" data-wow-offset={300} data-wow-delay="1s" style={{ visibility: 'visible', animationDelay: '1s', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/51.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                </Grid>
                                <Grid className="row">
                                    <div className="col wow fadeinRight animated" data-wow-offset={300} data-wow-delay="1s" style={{ visibility: 'visible', animationDelay: '1s', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/61.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinRight animated" data-wow-offset={300} data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/71.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinRight animated" data-wow-offset={300} data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/81.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinRight animated" data-wow-offset={300} data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/91.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinRight animated" data-wow-offset={300} data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/101.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                </Grid>
                            </div>
                            <div className="sponsor-logo-mobile text-center d-sm-none d-block">
                                <div className="row">
                                    <div className="col-6 wow fadeinLeft animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/11.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinRight animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/21.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinLeft animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/31.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinRight animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/41.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinLeft animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/51.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinRight animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/61.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinLeft animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/71.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinRight animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/81.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinLeft animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/91.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinRight animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/101.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                </div>
                            </div>
                            <div className="sponsor-button">
                                <Grid className="row justify-content-md-center">
                                    <div className="col-md-3 text-center">
                                        <Link className="btn my-2 my-sm-0 dark-blue-btn full-width-btn" data-scroll to="#whitepaper">Become a Sponsor</Link>
                                    </div>
                                </Grid>
                            </div>
                        </Grid>
                    </div>
                </Box>
                <Box id="contact" className='section' tabIndex={-1} style={{ outline: 'none' }}>
                    <Grid className="container">
                        <div className="contact">
                            <Grid className="row">
                                <div className="col-md-6 wow fadeInUp" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                    <Typography variant="h4">Contact us</Typography>
                                </div>
                                <div className="col-md-6 text-right wow fadeInUp d-none d-md-block" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}><img src="https://ruugle.io/assets/img/message.png" className="img-fluid" alt="" /></div>
                            </Grid>
                            <form method="post" action="index.php">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control form-setting wow fadeInLeft" data-wow-offset={300} id="inputEmail4" name="contact_name" placeholder="Name" style={{ visibility: 'visible', animationName: 'fadeInLeft' }} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control form-setting wow fadeInRight" data-wow-offset={300} id="inputPassword4" name="contact_email" placeholder="Email" style={{ visibility: 'visible', animationName: 'fadeInRight' }} />
                                    </div>
                                </div>
                                <div className="form-row wow fadeInUp" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                    <div className="form-group col-md-12">
                                        <textarea className="form-control form-setting" name="contact_project" placeholder="Tell us about your project" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="form-row wow fadeInUp" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                    <div className="form-group col-md-6">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" required />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                I agree to the terms of this Privacy Policy
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6 text-right">
                                        <Button type="submit" className="btn dark-blue-btn width-220-btn send-message">Send
                                            Message
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Grid>
                </Box>
                <footer>
                    <div className="footer">
                        <Grid className="container">
                            <Grid className="row flex-column-reverse flex-md-row">
                                <div className="col-md-6">
                                </div>
                                <div className="col-md-6 text-center">
                                    <div className="footer-logo" />
                                </div>
                            </Grid>
                            <div className="copyright">
                                <Grid className="row">
                                    <div className="col-md-12">
                                        <div className="banner-socials text-center">
                                            <List>
                                                <ListItem><Link to="https://t.me/Ruugle" target="blank"><img src="https://ruugle.io/assets/img/tele.png" alt='' /></Link></ListItem>
                                                <ListItem><Link to="https://www.reddit.com/user/Ruugle/" target="blank"><img src="https://ruugle.io/assets/img/reddit.png" alt='' /></Link></ListItem>
                                                <ListItem><Link to="https://twitter.com/Ruugleio?s=09" target="blank"><img src="https://ruugle.io/assets/img/twitter.png" alt='' /></Link></ListItem>
                                                <ListItem><Link to="https://tiktok.com/@ruugle.io" target="blank"><img src="https://ruugle.io/assets/img/tiktok.png" alt='' /></Link></ListItem>
                                                <ListItem><Link to="https://youtu.be/5P3L5LfZjb8" target="blank"><img src="https://ruugle.io/assets/img/youtube.png" alt='' /></Link></ListItem>
                                            </List>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <Typography variant="p" className="dark-blue">© Copyright 2021 Ruugle. All Rights Reserved.</Typography>
                                    </div>
                                </Grid>
                            </div>
                        </Grid>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Home
