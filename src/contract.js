import { getCurrentNetwork, switchNetwork, web3, isWeb3Initialized } from './wallet.js';
import { normalizeURL } from "./utils.js";
import { NETWORKS } from "./constants.js";
const factoryABI = require('./abi/factory_abi.json');
const routerABI = require('./abi/router_abi.json');

export let NFTContract, FACTORY_CONTRACT, ROUTER_CONTRACT;

export const initContract = async (contract, shouldSwitchNetwork = true) => {
    const host = normalizeURL(window.location.href);
    const allowedURLs = contract?.allowedURLs?.map(u => normalizeURL(u));
    if (allowedURLs && !allowedURLs?.some(v => v.includes(host))) {
        return undefined;
    }
    let currentNetwork = await getCurrentNetwork();
    if (shouldSwitchNetwork && !contract.allowedNetworks.includes(currentNetwork)) {
        await switchNetwork(contract.allowedNetworks[0])
        currentNetwork = await getCurrentNetwork();
    }
    const address = contract.address[contract.allowedNetworks[0]];
    const abi = contract.abi ?? factoryABI;
    return new web3.eth.Contract(abi, address);
}

const initContractGlobalObject = async () => {
    if (window.FACTORY_CONTRACT_ADDRESS_1 === "<your contract address here>") {
        alert("You forgot to insert your contract address in your Webflow Embed code. Insert your contract address, publish the website and try again.  ")
        return
    }
    // Default to Ethereum
    const networkID = window.NETWORK_ID ?? 1;
    const chainID = window.IS_TESTNET ? NETWORKS[networkID].testnetID : networkID;
    window.CONTRACT = {
        factoryContract: {
            address: {
                [chainID]: window.FACTORY_CONTRACT_ADDRESS_1,
            },
            abi: factoryABI,
            allowedNetworks: [chainID]
        },
        routerContract: {
            address: {
                [chainID]: window.ROUTER_CONTRACT_ADDRESS_2,
            },
            abi: routerABI,
            allowedNetworks: [chainID]
        },
    }
}

export const setContracts = async (shouldSwitchNetwork = true) => {
    await initContractGlobalObject();
    if (!isWeb3Initialized()) {
        return
    }
    if (shouldSwitchNetwork) {
        await switchNetwork(window.CONTRACT.factoryContract.allowedNetworks[0]);
        // other contract will goes there 
    }
    if (FACTORY_CONTRACT) {
        return
    }
    FACTORY_CONTRACT = await initContract(window.CONTRACT.factoryContract, false);
    ROUTER_CONTRACT = await initContract(window.CONTRACT.routerContract, false);
}
