// React
import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import DexTabs from "./DexTabs";
import { bscLogo, ethLogo } from "../../../logo";
import { Card, Button } from "@mui/material";
import { connectWallet, isWalletConnected } from "../../../wallet";
import { FACTORY_CONTRACT, ROUTER_CONTRACT } from '../../../contract';
import { setInitToken, walletConnectStatus } from '../../reducer/swap/action';
import { useDispatch, useSelector } from "react-redux";

const DexUI = () => {

  const dispatch = useDispatch()

  const { connectStatus } = useSelector(state => state.tokens);

  const [isConnected, setIsConnected] = useState(connectStatus)


  const [tkn1, setTkn1] = useState(bscLogo['1']);
  const [tkn2, setTkn2] = useState(bscLogo[parseInt(bscLogo.length / 2)]);

  useEffect(() => {
    document.getElementById('marque').addEventListener('mouseover', () => {
      document.getElementById('marque').stop()
    })
    document.getElementById('marque').addEventListener('mouseleave', () => {
      document.getElementById('marque').start()
    })
    console.log('Factory contract methods', FACTORY_CONTRACT)
    console.log('Router contract methods', ROUTER_CONTRACT)
  }, [])

  useEffect(() => {
        dispatch(
          setInitToken({
            token1: tkn1,
            token2: tkn2
          })
      )
  }, [])

  useEffect(() => {
    setIsConnected(connectStatus);
  }, [connectStatus])
  
  const WConnect = async () => {
    await connectWallet()
    dispatch(walletConnectStatus({
      status: await isWalletConnected()
    }))
  }
  return (
    <div className="dex h-100">
      <section>
        <div className="container">
          <div className="marquee">
            <div className="row">
              <div className="col-md-2">
                <div className="p-15 text-right"> <span style={{ margin: '0 10px', color: 'red' }} ><i className="fab fa-free-code-camp"></i></span> Hot Pairs</div>
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <marquee
                  id="marque"
                  className="marquee-box" >
                  <div className="marquee-content d-flex">
                    {ethLogo.map((el, i) => (
                      <div key={i}>                      {
                        i < 10 ?
                          <div className='d-flex  mr-5'>
                            <div className=''>
                              <span style={{ color: 'lightgray', marginRight: '8px' }} > #{i + 1} </span>
                              <img alt="img" style={{ width: '18px', marginRight: '4px', borderRadius: '100%' }} src={el.logoURI} />
                            </div>
                            <div className=''>
                              <p style={{ color: 'white' }}>   {el.name} </p>
                            </div>
                          </div>
                          : ''
                      }
                      </div>
                    ))}
                  </div>
                </marquee>
              </div>
              <div className="col-md-2 ">
                <div className="p-15"><i style={{ color: 'rgb(0 207 34)', marginRight: '10px' }} className="fas fa-circle"></i>Live Tranding</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <Card sx={{ minWidth: 275}} className="exchange-card">
              <CardContent sx={{ bgcolor: '#fefeff' }}>
                <DexTabs />
                <div className="d-flex justify-content-center align-items-center">
                {
                  isConnected ?
                    <Button variant="outlined" disabled>Enter an amount</Button> :
                    <Button variant="outlined" color="info" onClick={e => WConnect()} >Connect</Button>
                }
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DexUI;
