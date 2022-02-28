import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Modal, ModalBody } from "reactstrap";
import { bscLogo, ethLogo, polygonLogo } from '../../../logo';
import { getBalance } from '../../../wallet';
import { setInitToken } from '../../reducer/swap/action';

const TokenModal = ({ network, id }) => {

    const dispatch = useDispatch();
    const {token1, token2 } = useSelector(state => state.tokens);

    const [open, setOpen] = useState(false);
    const [tkn1, setTkn1] = useState(token1);
    const [tkn2, setTkn2] = useState(token2);

    useEffect(() => {
        setTkn1(token1);
        setTkn2(token2);
    }, [token1,token2]);
    
    const handleSelector = (data) => {
        dispatch(
            setInitToken({
                token1: id === '1'? data: tkn1,
                token2: id === '2'? data: tkn2,
            })
        )
        getBalance(data).then(function (result) {
            console.log(result);
        });
        setOpen(false);
    }

    return (
        <>
            <span
                onClick={e => setOpen(!open)}
                style={{ fontSize: '20px ', cursor: 'pointer', display: 'flex' }}
            > {
                tkn1 !== undefined? ( id === '1'? (
                    <div className="set-token-modal">
                        <img src={tkn1['logoURI']} style={{width: '35px', height: '35px'}} alt="" />
                        <span>{ tkn1['name'] }</span>
                        <ExpandMoreIcon style={{ fontSize: '20px', marginLeft: '7px', marginTop: '9px' }} />
                    </div>
                ): (
                    <div className="set-token-modal">
                        <img src={tkn2['logoURI']} style={{width: '35px', height: '35px'}} alt="" />
                        <span>{ tkn2['name'] }</span>
                        <ExpandMoreIcon style={{ fontSize: '20px', marginLeft: '7px', marginTop: '9px' }} />
                    </div>
                ) ): ""
            }   
            </span>

            <Modal isOpen={open} toggle={() => setOpen(false)}>
                <ModalBody>
                    <div className='token-modal-content'>
                        <h4>Select a Token</h4>
                        <input className='form-control search-token' />
                    </div>
                    {
                        network === "eth" ?
                            <div className='mt-4'>
                                <div className='token-scroll'>
                                    {ethLogo.map((el, key) => (
                                        <div className='d-flex single-token' onClick={ (e) => handleSelector(el) } key={key}>
                                            <div className=''>
                                                <img alt='img' style={{ width: '58px' }} src={el.logoURI} />
                                            </div>
                                            <div className='pl-4'>
                                                <p style={{ color: 'gray', fontWeight: 'bold' }}> {el.symbol} </p>
                                                <p style={{ color: 'gray' }}> {el.name} </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> : ''
                    }
                    {
                        network === "bsc" ?
                            <div className='mt-4'>
                                <div className='token-scroll'>
                                    {bscLogo.map((el, key) => (
                                        <div className='d-flex single-token' onClick={ (e) => handleSelector(el) } key={key}>
                                            <div className=''>
                                                <img alt='img' style={{ width: '58px' }} src={el.logoURI} />
                                            </div>
                                            <div className='pl-4'>
                                                <p style={{ color: 'gray', fontWeight: 'bold' }}> {el.symbol} </p>
                                                <p style={{ color: 'gray' }}> {el.name} </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> : ''
                    }

                    {
                        network === "polygon" ?
                            <div className='mt-4'>
                                <div className='token-scroll'>
                                    {polygonLogo.map((el, key) => (
                                        <div className='d-flex single-token' onClick={ (e) => handleSelector(el) } key={key}>
                                            <div className=''>
                                                <img alt='img' style={{ width: '58px' }} src={el.logoURI} />
                                            </div>
                                            <div className='pl-4'>
                                                <p style={{ color: 'gray', fontWeight: 'bold' }}> {el.symbol} </p>
                                                <p style={{ color: 'gray' }}> {el.name} </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> : ''
                    }
                </ModalBody>
            </Modal>
        </>
    )
}

export default TokenModal
