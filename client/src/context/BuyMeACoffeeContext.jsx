import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constant";

export const BuyMeACoffeeContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {

  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();

  const BuyMeACoffeeContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );



  return BuyMeACoffeeContract;
};

export const BuyMeACoffeeProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setformData] = useState({
    name: "",
    message: "",
    amount: ""
  });
  // const [name, setName] = useState("");
  // const [message, setMessage] = useState("");

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    console.log("clicked");
  };

  // const onNameChange = (event) => {
  //     setName(event.target.value);
  //   }

  //   const onMessageChange = (event) => {
  //     setMessage(event.target.value);
  //   }

  const handleSubmit = () => {
    console.log(formData);
  };

  const buyCoffee = async () => {
    try {
      const { name, message , amount  } = formData;
      const BuyMeACoffeeContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      console.log("buying coffee..");

      const coffeetxn = await BuyMeACoffeeContract.buyCoffee(
        name ? name : "Name",
        message ? message : "Enter Message",
        { value: parsedAmount }
      );

      await coffeetxn.wait();
      console.log(`Success - ${coffeetxn.hash}`);

      console.log(formData);
      
      setformData(" ");
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      console.log("Clicked");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  return (
    <BuyMeACoffeeContext.Provider
      value={{
        connectWallet,
        handleSubmit,
        handleChange,
        buyCoffee,
        currentAccount,
      }}
    >
      {children}
    </BuyMeACoffeeContext.Provider>
  );
};

export default BuyMeACoffeeProvider;
