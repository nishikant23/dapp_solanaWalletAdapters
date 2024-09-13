
import { Connection, clusterApiUrl } from "@solana/web3.js"



export const AccountInfo = async () => {
    const alchemyApiUrl = 'https://solana-mainnet.g.alchemy.com/v2/rJdaJvr-oPfQq9tnneRX_KtyUYNnUmzJ'
    const connection = new Connection(alchemyApiUrl);


    const getSlotInfo = async () => {
        try{
            const slot  = await connection.getSlot('finalized')
            console.log("the Slot is: ", slot);
            alert(`the slot info is : ${slot}`);

        } catch(error) {
            console.log("Error fetching thge slot info: ", error);
        }
    }

    

    return <div>
           <button>Get Slot</button>
    </div>

    
}