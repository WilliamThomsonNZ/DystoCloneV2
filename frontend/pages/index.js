import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useRef, useEffect} from "react";
import Web3Modal from "web3modal"
import { Contract, providers, utils } from "ethers";
import {CONTRACT_ADDRESS, CONTRACT_ABI} from "../constants";
import { verifyOnWl } from "../merkleTree";

export default function Home() {
  const web3ModalRef = useRef(null);
  const [walletConnected, setWalletConnected] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);
  async function connectWallet (){
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err, "test");
    }
  };

 async function getProviderOrSigner(needSigner = false){
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 4) {
      window.alert("Change the network to Localhost");
      throw new Error("Change network to localhost");
    }
    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };


  async function handleWhitelistMintClick(){
    try{
      const signer = await getProviderOrSigner(true);
      const signerAddress = await signer.getAddress();
      const {proof} = verifyOnWl(signerAddress.toString());
      const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const mintCost = mintAmount * 0.044;
      const mintTx = await contract.mintWhitelist(proof, mintAmount, {
        value: utils.parseEther(mintCost.toString())
      })
      await mintTx.wait();
    }catch(err){
      console.error(err);
    }
  }

  async function handleMintClick(){
    try{
      const signer = await getProviderOrSigner(true);
      const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const mintCost = mintAmount * 0.044;
      const mintTx = await contract.mintPublic( mintAmount, {
        value: utils.parseEther(mintCost.toString())
      })
      await mintTx.wait();
    }catch(err){
      console.error(err);
    }
  }

  function handleSelectChange(e){
    setMintAmount(e.target.value);
  }
  useEffect(() => {
    if(!walletConnected){
      web3ModalRef.current = new Web3Modal({
        network: "localhost",
        providerOptions: {},
        disableInjectedProvider: false,
      })
      connectWallet();
    }
  })

  return (
    <div>
        <button onClick={e => handleWhitelistMintClick(e)}>Mint Whitelist</button>
        <button onClick={e => handleMintClick(e)}>Mint</button>
        <select value={mintAmount} onChange={e => handleSelectChange(e)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
        </select>
    </div>
  )
}
//0x422893349cDd18aF69D4E50B624243F285b84457
//0x7F5Bb370F10CBcF63E67544cD12e85AFb13Da6ae
