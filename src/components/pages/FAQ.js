import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
    return (
        <div className='mb-5 pb-5'>
            <Accordion className="mt-4 accordion-root">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='accordion-summary'
                >
                    <Typography className='text-white' >When is the IDO taking place?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="text-white">
                        The IDO begins on January 3rd, 2022 @ 2:00pm UTC
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="mt-4 accordion-root">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className='accordion-summary'
                >
                    <Typography className="text-white">Will I need SOL in my wallet ?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-white'>
                        Yes, you will need SOL in your wallet to pay for transaction fees. If you have a 0 SOL balance but have USDC, your transactions will fail.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="mt-4 accordion-root">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className='accordion-summary'
                >
                    <Typography className='text-white'>   Will I need USDC ?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-white'>
                        Yes, the IDO deposits will be placed in USDC
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="mt-4 accordion-root">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className='accordion-summary'
                >
                    <Typography className='text-white'>   Where will the token be listed post - IDO ? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-white'>
                        Thus far we have gotten firm confirmation of listings on Orca, Raydium, and Aldrin DEX (with more to come)!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className="mt-4 accordion-root">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className='accordion-summary'
                >
                    <Typography className='text-white'>       How does the IDO work ? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-white'>
                        Step #1 - Connect your wallet (we recommend using Phantom). You will need to have USDC in your wallet in order to participate in the IDO. You do not need to own a Shadowy Super Coder NFT in order to participate in the IDO. <br /><br />
                        Step #2 - Enter the amount of USDC you wish to contribute to the IDO pool and click deposit. <br /><br />
                        Step #3 - Confirm the amount of USDC you wish to contribute to the IDO pool. This finalizes your deposit. <br /><br />
                        Step #4 - Wait until the deposit phase of the IDO expires. The deposit phase opens on Jan 3rd at 2pm UTC and will last for 24 hours in order to ensure people from all time zones are able to participate. <br /><br />
                        Step #5 - After the deposit phase has expired, you can return to the IDO page and collect your $SHDW token! The redemption phase will last for as long as there are outstanding $SHDW tokens needing to be redeemed. <br /><br />
                        Step #6 - Congratulations! Your $SHDW tokens are now in your wallet! <br /><br />
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className="mt-4 accordion-root">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className='accordion-summary'
                >
                    <Typography className='text-white'>   Where do I need to start accruing my USDC ?  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-white'>Your Phantom wallet! Phantom's code is battle tested and we love the focus they have on protecting their users. So, you'll just be connecting your Phantom wallet to the IDO site. Ez pz!</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="mt-4 accordion-root">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className='accordion-summary'
                >
                    <Typography className='text-white'> Can I participate in the IDO even if I don't have a SSC NFT?  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-white'>Of course! The IDO is not tied to owning a Shadowy Super Coder NFT.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="mt-4 accordion-root">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className='accordion-summary'
                >
                    <Typography className='text-white'> My transaction timed out while trying to deposit.  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-white'>
                        This can be caused by numerous different factors. The following steps are a good starting point to resolve the issue:<br /><br />
                        Check that you have SOL in the wallet you're using. If you do not, try sending around 0.1 SOL to your wallet.<br /><br />
                        Check that you're using the latest version of Chrome/Brave/Firefox.<br /><br />
                        Try a different network (VPN, connect to a mobile hotspot, etc)<br /><br />
                        Try a different web browser. Example: if using Chrome, try Firefox.<br /><br />
                        Try small test transactions to see if that goes through.<br /><br />
                        Shift your balance to a different wallet and try from that different wallet.<br /><br />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
} 