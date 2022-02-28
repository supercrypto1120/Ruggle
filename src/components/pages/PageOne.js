import React from 'react'
import { Link } from 'react-router-dom';
import {
    List, ListItem
} from '@mui/material';

const PageOne = () => {
    return (
        <div>
            <div id="wrapper">
                <div className="header">
                    <div className="container">
                        <div className="wr">
                            <Link to="/" >
                                <div className="logo"><img src="https://ruugle.io/assets/img/logo.png" width={160} alt="" /></div>
                            </Link>
                            <List className="mnu">
                                <ListItem><Link to=".about-box">How it works</Link></ListItem>
                                <ListItem><Link to=".info-box">Statistics</Link></ListItem>
                                <ListItem><Link to=".tiers-box">Features</Link></ListItem>
                                <ListItem><Link to=".feature-box">About Us</Link></ListItem>
                                <ListItem><Link to=".socials-box">Social media</Link></ListItem>
                            </List>
                            <Link to="https://forms.gle/sugL3zcHP9buKeFQ7" className="btn-call">Apply for IDO</Link>
                            <div className="toggle_mnu">
                                <span className="sandwich">
                                    <span className="sw-topper" />
                                    <span className="sw-bottom" />
                                    <span className="sw-footer" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle-bg-bx">
                    <div className="top-box">
                        <div className="wrap">
                            <div className="container">
                                <div className="wr">
                                    <div className="tt">
                                        <List className="soc-list">
                                            <ListItem><Link to="https://t.me/pulsepadann"><img src="https://pulsepad.io/img/sc2.svg" alt="" /></Link></ListItem>
                                            <ListItem><Link to="https://twitter.com/PulsePad_App"><img src="https://pulsepad.io/img/sc3.svg" alt="" /></Link></ListItem>
                                            <ListItem><Link to="https://medium.com/@PulsePad.io"><img src="https://pulsepad.io/img/sc4.svg" alt="" /></Link></ListItem>
                                        </List>
                                        <div className="uzor uz1"><img src="https://pulsepad.io/img/uz1.svg" alt="" /></div>
                                        <div className="uzor uz2"><img src="https://pulsepad.io/img/uz2.svg" alt="" /></div>
                                        <div className="log animation_1"><img src="https://pulsepad.io/img/PulsePad.svg" alt="" />
                                        </div>
                                        <div className="slogan animation_1">
                                            Bringing You the <span>Future</span> of Ethereum — Today!
                                        </div>
                                        <div className="text">PulsePad is the premier IDO platform for projects building on
                                            PulseChain — a new Ethereum sister chain designed to provide an idyllic environment
                                            for building powerful new applications, while simultaneously reducing the load on
                                            the Ethereum network.</div>
                                    </div>
                                    <style dangerouslySetInnerHTML={{ __html: "\n                                .thebuttons {\n                                    display: flex;\n                                    flex-direction: row;\n                                    flex-wrap: wrap;\n                                    margin-left: auto;\n                                    margin-right: auto;\n                                    text-align: center;\n                                    max-width: 800px;\n                                }\n\n                                .thebuttons .btn {\n                                    margin-bottom: 20px;\n                                }\n                            " }} />
                                    <div className="thebuttons">
                                        <Link to="https://pancakeswap.finance/swap?outputCurrency=0x8a74bc8c372bc7f0e9ca3f6ac0df51be15aec47a" className="btn" >Buy on PancakeSwap</Link>
                                        <Link to="https://app.uniswap.org/#/swap?inputCurrency=0x8a74bc8c372bc7f0e9ca3f6ac0df51be15aec47a" className="btn" >Buy on UniSwap</Link>
                                        <Link to="https://exchange.wagyuswap.app/swap?inputCurrency=0x8a74bc8c372bc7f0e9ca3f6ac0df51be15aec47a" className="btn" >Buy on WagyuSwap</Link>
                                        <Link to="https://staking.pulsepad.io/" className="btn" >Staking</Link>
                                    </div>
                                    <div className="text-bx">
                                        <div className="title-bx animation_1">high quality <br />projects</div>
                                        <div className="texts animation_1">
                                            <div className="bx bx1">
                                                <p>Designed to bootstrap the PulseChain ecosystem with the first generation of
                                                    high-quality projects and help seed the fertile PulseChain landscape,
                                                    PulsePad is poised to catalyze a wave of innovation on what is set to be a
                                                    major smart contract platform.</p>
                                            </div>
                                            <div className="bx bx2">
                                                <p>Backed by the same team behind the ultra successful BSCPad, TronPad, ADAPad,
                                                    KCCPad, ETHPad, VelasPad, NFTLaunch and GameZone. PulsePad is set to expand
                                                    on the winning formula and put PulseChain on the map!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-cir-wrap">
                        <div className="about-box">
                            <div className="wr">
                                <div className="container">
                                    <div className="title-bx animation_1">How it Works</div>
                                    <div className="text-bx bx1 animation_1">
                                        <div className="ico"><img src="https://pulsepad.io/img/uz3.svg" alt="" /></div>
                                        <div className="tt">
                                            <div className="h3">A Better Economy</div>
                                            <p>
                                                PulseChain is built to provide a more efficient, more sustainable alternative to
                                                Ethereum — thanks to its validator-based consensus, ultra-efficient virtual
                                                machine, and fee-based burn solution.
                                                <br /><br />
                                                PulsePad aligns itself with this vision through an aggressive deflationary token
                                                burn mechanism, that sees a 10% fee levied on all PLSPAD sales and an up to 25%
                                                burn fee for early unstaking.
                                                <br /><br />
                                                All projects launching through PulsePad will also need to commit to this
                                                deflationary philosophy, by buying and burning PLSPAD to launch their IDOs.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-bx bx2 animation_1">
                                        <div className="ico"><img src="https://pulsepad.io/img/uz4.svg" alt="" /></div>
                                        <div className="tt">
                                            <div className="h3">Pulse Bridge &amp; Swap</div>
                                            <p>
                                                As a PulseChain native application, PulsePad will be accessible to any user that
                                                has added the PulseChain network RPC to their MetaMask client (here’s how).
                                                <br /><br />
                                                All IDOs will be settled on the PulseChain blockchain using pETH (PulseChain
                                                native ETH). Regular ETH can be easily swapped for pETH using the PulseChain
                                                Bridge. Whereas IDO tokens will also be available on PulseChain and can be
                                                traded through the PulseChain DEX or bridged to ETH in some cases.
                                                <br /><br />
                                                Trading on PulseChain is expected to be similar to BSC in terms of speed and
                                                fees — all while maintaining complete interoperability with Ethereum.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-bx bx3 animation_1">
                                        <div className="ico"><img src="https://pulsepad.io/img/uz5.svg" alt="" /></div>
                                        <div className="tt">
                                            <div className="h3">Big Dreams, <br /> Small Beginnings.</div>
                                            <p>Be among the first to experience the power of PulseChain and help pioneer its
                                                expansion. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-box">
                    <div className="container">
                        <div className="wr">
                            <div className="title-bx animation_1">IDO, token, price and vesting information</div>
                            <div className="tb-wr animation_1">
                                <div className="bx bx1">
                                    <div className="s1">Public Sale Token <br />Price</div>
                                    <div className="s2">$0.001 (BUSD/USDT)</div>
                                </div>
                                <div className="bx bx2">
                                    <div className="s1">Maximum Token <br />Supply</div>
                                    <div className="s2">5,000,000,000 $PLSPAD</div>
                                </div>
                            </div>
                            <div className="tb-wr animation_1">
                                <div className="bx bx3">
                                    <div className="s1">Circulating Supply at <br /> Listing</div>
                                    <div className="s2">170,000,000 $PLSPAD</div>
                                </div>
                                <div className="bx bx4">
                                    <div className="s1">Market Capitalization <br />at Listing</div>
                                    <div className="s2">$170,000</div>
                                </div>
                            </div>
                            <div className="tb-wr animation_1 ">
                                <div className="bx bx-wide">
                                    <div className="z1">Tokenomics</div>
                                    <div className="row list-bx">
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="ss1">Team: 15%</div>
                                            <div className="ss1">Advisors: 7%</div>
                                            <div className="ss1">Liquidity: 12%</div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="ss1">Ecosystem: 12%</div>
                                            <div className="ss1">Reserve: 5%</div>
                                            <div className="ss1">Staking/Rewards: 14%</div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="ss1">Private sale: 20%</div>
                                            <div className="ss1">Public sale: 14%</div>
                                            <div className="ss1">Airdrop: 1%</div>
                                        </div>
                                    </div>
                                    <div className="uz"><img src="https://pulsepad.io/img/uz6.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tiers-box">
                    <div className="container">
                        <div className="wr">
                            <div className="title-bx animation_1">PulsePad Tiers</div>
                            <div className="under animation_1">Project tokens for sale in PulsePad IDOs will be split <br /> into the
                                following pools:</div>
                            <div className="table-bx animation_1">
                                <div className="table-wrap">
                                    <div className="tiers-table">
                                        <table>
                                            <tbody><tr>
                                                <td>
                                                    <div className="h">Tiers</div>
                                                </td>
                                                <td>
                                                    <div className="h">Staking</div>
                                                </td>
                                                <td>
                                                    <div className="h">Staking <br /> Eligibility</div>
                                                </td>
                                                <td>
                                                    <div className="h">Whitelist <br /> Requirements</div>
                                                </td>
                                                <td>
                                                    <div className="h">Guaranteed <br /> Allocation</div>
                                                </td>
                                                <td>
                                                    <div className="h">Pool Weight</div>
                                                </td>
                                            </tr>
                                                <tr>
                                                    <td>
                                                        <div className="t">Pulse Explorer</div>
                                                    </td>
                                                    <td>50,000</td>
                                                    <td>3 Hours before <br /> Allocation Round <br /> Opens</td>
                                                    <td>Twitter Like, Comment &amp; <br /> Retweet</td>
                                                    <td>Yes</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="t green">Pulse Leader</div>
                                                    </td>
                                                    <td>125,000</td>
                                                    <td>3 Hours before <br /> Allocation Round <br /> Opens</td>
                                                    <td>Twitter Like, Comment &amp; <br /> Retweet</td>
                                                    <td>Yes</td>
                                                    <td>28</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="t red">Pulse Visionary</div>
                                                    </td>
                                                    <td>250,000</td>
                                                    <td>3 Hours before <br /> Allocation Round <br /> Opens</td>
                                                    <td>None</td>
                                                    <td>Yes</td>
                                                    <td>60</td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-box">
                    <div className="container">
                        <div className="wr">
                            <div className="title-bx animation_1">What Makes PulsePad Unique?</div>
                            <div className="feat-text-bx">
                                <div className="tt1 animation_1">
                                    <div className="ico"><img src="https://pulsepad.io/img/cc.svg" alt="" /></div>
                                    <div className="t">
                                        At BlueZilla, we believe that all great things are built on solid foundations. With this
                                        view in mind, we will endeavor to select only the strongest projects backed by the right
                                        people, partners, and priorities. In short, this means high quality from day one.
                                        <br /><br />
                                        As a deflationary launchpad, there is a 10% fee for selling PLSPAD, and an up to 25% fee
                                        for early unstaking. Likewise, projects will need to commit to buying and burning PLSPAD
                                        tokens to host their IDO on PulsePad. We believe these deflationary tokenomics best
                                        align with the ethos of the PulseChain blockchain, while providing a strong incentive
                                        for further growth and adoption.
                                    </div>
                                </div>
                                <div className="h4 animation_1">I’m new to the BlueZilla ecosystem, what can I expect?</div>
                                <div className="row animation_1">
                                    <div className="col-sm-6 col-xs-12">
                                        <div className="t">PulsePad is a comprehensive launchpad that helps top-tier teams launch a
                                            new token/project on the PulseChain blockchain. These new projects will benefit from
                                            the marketing-leading security, anti-bot measurements, turn-key marketing and
                                            promotional services, and blockchain consulting services that helped separate BSCPad
                                            from the competition.</div>
                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <div className="t">With a rich history of successful launches over the last several months
                                            by the BlueZilla team, projects that choose PulsePad will be able to leverage the
                                            expertise of our team and position themselves for a painless and prosperous start to
                                            their journey.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="txt-bx txt-blue animation_1">
                                <div className="h3">Backed by the full force of the BSCPad marketing department</div>
                                <p>Since the massively successful launch of BSCPad, we have demonstrated again and again that
                                    our team knows how to ‘move the needle’ with crypto marketing. In fact, at the time of
                                    writing this article, the BSCPAD token is one of the top trending tokens on Coingecko,
                                    several months after launch.</p>
                                <p>Both BSCPad and TRONPAD have delivered immense value for our early investors, boasting 300x+
                                    ROIs, massive levels of awareness on social media platforms, and several successful
                                    launches. The power behind the TRONPAD marketing effort was so big that not only did it
                                    trend on Coingecko, Coin Market Cap and Dextools for over a week, but it was also trending
                                    on Twitter.</p>
                                <p>All of this marketing power is fuelled by the strongest KOL line up in the industry, which is
                                    growing by the day. Our social engagement and reach is higher than every competitor in the
                                    market on any chain and our consistent month on month growth since inception is testament to
                                    our reach.</p>
                                <div className="cite">The simple fact is, we have the resources, knowledge and experience to deliver
                                    winning launchpad products - and PulsePad will be no exception. </div>
                            </div>
                            <div className="txt-bx txt-dark animation_1">
                                <div className="h3">Incubator program for new projects</div>
                                <div className="ico-bx">
                                    <div className="text">
                                        <p>As the IDO space has experienced exponential growth, the number of new projects has
                                            exploded. In this new landscape, a premium is being placed on selecting and
                                            investing in only the best projects. Our new incubator program will select and
                                            support the most promising teams and projects, giving them marquee status across our
                                            ecosystem of launchpads. Think of these projects as ‘tentpole’ projects, or the main
                                            events in our calendar. </p>
                                    </div>
                                </div>
                                <div className="h4">Via our incubator program, you will have access to:</div>
                                <ul>
                                    <ListItem>Our legal department to help you set up the best jurisdiction for your token and project
                                    </ListItem>
                                    <ListItem>Expert tokenomics design and vesting schedule creation</ListItem>
                                    <ListItem>In house development support, token contract creation and auditing</ListItem>
                                    <ListItem>Access to our marketing and KOL network</ListItem>
                                    <ListItem>Exclusive access to our IDO platforms for the ultimate launch</ListItem>
                                    <ListItem>Invaluable industry connections via our advisor and extended network</ListItem>
                                </ul>
                            </div>
                            <div className="apply-box ">
                                <div className="wr">
                                    <div className="uzor uz1"><img src="https://pulsepad.io/img/uz7.svg" alt="" /></div>
                                    <div className="uzor uz2"><img src="https://pulsepad.io/img/uz8.svg" alt="" /></div>
                                    <div className="h3 animation_1">Apply for incubation:</div>
                                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLScZ7NM9o0o3oZc_4kFAwA-_ePPZqSkYpn4ZxO9knCMB63jtdA/viewform" className="btn animation_1">Apply now</Link>
                                    <div className="sc-t animation_1">
                                        <div className="t"><Link className=" btn-call animation_1" to="https://bluezilla.vc/">Website</Link></div>
                                        <div className="t"><Link className=" btn-call animation_1" to="https://twitter.com/BlueZillaVc">Twitter</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="socials-box animation_1">
                                <div className="h3">PulsePad Socials:</div>
                                <div className="wrap">
                                    <div className="bx bx1">
                                        <List className="list">
                                            <ListItem>
                                                <div className="t1">Website</div>
                                                <div className="t2"><Link to="https://pulsepad.io/">pulsepad.io</Link>
                                                </div>
                                            </ListItem>
                                            <ListItem>
                                                <div className="t1">Telegram ANN</div>
                                                <div className="t2"><Link to="https://t.me/pulsepadann">t.me/pulsepadann</Link></div>
                                            </ListItem>
                                        </List>
                                    </div>
                                    <div className="bx bx2">
                                        <List className="list">
                                            <ListItem>
                                                <div className="t1">Twitter</div>
                                                <div className="t2"><Link to="https://twitter.com/PulsePad_App">twitter.com/PulsePad_App</Link>
                                                </div>
                                            </ListItem>
                                            <ListItem>
                                                <div className="t1">Support</div>
                                                <div className="t2"><Link to="https://bluezilla.jitbit.com/helpdesk/">Contact Support</Link></div>
                                            </ListItem>
                                            <ListItem>
                                                <div className="t1">Medium</div>
                                                <div className="t2"><Link to="https://medium.com/@PulsePad.io">medium.com/@PulsePad.io</Link></div>
                                            </ListItem>
                                        </List>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="container">
                        <div className="wr">
                            <div className="logo"><img src="https://ruugle.io/assets/img/logo.png" width={160} alt="" /></div>
                            <List className="mnu">
                                <ListItem><Link to=".about-box">How it works</Link></ListItem>
                                <ListItem><Link to=".info-box">Statistics</Link></ListItem>
                                <ListItem><Link to=".tiers-box">Features</Link></ListItem>
                                <ListItem><Link to=".feature-box">About Us</Link></ListItem>
                                <ListItem><Link to=".socials-box">Social media</Link></ListItem>
                            </List>
                            <Link to="https://forms.gle/sugL3zcHP9buKeFQ7" className="btn-call">Apply for IDO</Link>
                        </div>
                        <div className="copy-bx">
                            <div className="t">Copyright © 2021 PulsePad Limited. All rights reserved</div>
                            <div className="t">
                                <Link to="https://staking.pulsepad.io/terms-of-uses">Terms &amp;
                                    conditions</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                                <Link to="https://staking.pulsepad.io/privacy-policy">Privacy policy</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                                <Link to="https://staking.pulsepad.io/cookie-policy">Cookies policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageOne
