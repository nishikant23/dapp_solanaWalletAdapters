import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import{ LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useEffect, useState } from "react";

export const ShowBalance = () => {
    const wallet  = useWallet();
    const { connection } = useConnection();
    const [ balance, setBalance ] = useState(0);
    //function
    const getBalanceInfo = async () => {
        try{
            if(wallet.publicKey) {
                const balanceInLamports = await connection.getBalance(wallet.publicKey);
                const perSol = balanceInLamports/LAMPORTS_PER_SOL;
                setBalance(perSol);
            } 
        } catch(error) {
            console.log("Error fetching thge slot info: ", error);
        }
    }

    useEffect(() => {
       if(wallet.publicKey) {
        getBalanceInfo();
       } else {
        setBalance(0);
       }
    },[wallet.publicKey]);

    return <div className="px-3 ">
        <div className=" text-white text-md font-semibold  bg-customPurple border rounded-md px-5 py-3 hover:bg-slate-800">
        {balance !== null ? ` Sol Balance: ${balance}` : "Loading..." }
    </div>
    </div>
}