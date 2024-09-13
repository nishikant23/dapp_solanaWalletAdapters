import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Input } from "./Input";
import { useState } from "react";
import{ LAMPORTS_PER_SOL } from "@solana/web3.js"
export const Airdrop = () => {
    const [ airdropVal, setAirdropVal ] = useState(0);
    const wallet  = useWallet();
    const { connection } = useConnection();

    // Air droping the sols function
    const reqAirdrop  = async () => {
        await connection.requestAirdrop(wallet.publicKey, airdropVal*1000000000)
        alert("Airdropped Sols")
    }

    //debouncing
    const inputWait = async (data) => {
        await setTimeout(() => {
            inpValue(data);
        }, 100)
    }
    //inpute state var 
    const inpValue = (data) => {
        setAirdropVal(data);
    }


    return <div>
        <div className="flex justify-between px-4 py-3 ">
              <input
                onChange={(e) => {
                    inputWait(e.target.value);
                }}
                
                type="text" 
                placeholder="enter sols amount" 
                className="rounded-lg border border-slate-300 w-[75%] px-2 py-1"/>  

                <Input placeholder={"enter sols amount"}/>

              <div className="w-[2.5%]"></div>
            
            <button 
            onClick={reqAirdrop}
            className="flex items-center justify-center text-white text-md font-bold rounded-md pl-4 bg-customPurple px-3 w-[25%] hover:bg-slate-800">
                Request Airdrop
            </button>
        </div>
    </div>
    
}