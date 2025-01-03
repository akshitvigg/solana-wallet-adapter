import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

export const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [inputVal, setInputVal] = useState<number | any>(0);

  const sendAirdrop = async () => {
    //@ts-ignore
    await connection.requestAirdrop(wallet.publicKey, inputVal * 1000000000);
  };

  return (
    <div className=" text-white">
      <input
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        className=" rounded-sm p-1.5"
        type="text"
        placeholder="SOL"
      />
      <button
        className=" ml-3 font-bold rounded-sm bg-[#512da8] p-1.5 px-9"
        onClick={sendAirdrop}
      >
        Send
      </button>
    </div>
  );
};
