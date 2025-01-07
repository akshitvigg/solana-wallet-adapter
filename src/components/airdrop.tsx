import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

export const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [inputVal, setInputVal] = useState<number>(0);

  const sendAirdrop = async () => {
    if (!wallet.publicKey) {
      alert("Wallet is not connected!");
      return;
    }

    try {
      const signature = await connection.requestAirdrop(
        wallet.publicKey,
        inputVal * 1000000000
      );
      alert(`Airdrop successful! Signature: ${signature}`);
    } catch (error) {
      console.error("Airdrop failed:", error);
      alert("Airdrop failed. Check console for details.");
    }
  };

  return (
    <div className=" text-white  pt-8 mt-2">
      <p className=" text-center text-3xl font-bold"> Airdrop Some Token</p>
      <div className=" text-white flex mt-4 justify-center">
        <input
          onChange={(e) => setInputVal(Number(e.target.value))}
          className="py-3 pl-10 outline-none w-96 bg-transparent border-zinc-700 border-2  rounded-lg p-1.5"
          type="text"
          placeholder="SOL"
        />
        <button
          className="text-white  ml-3 text-xl hover:bg-[#1a1f2e] font-medium rounded-lg bg-[#512da8]  px-12"
          onClick={sendAirdrop}
        >
          Get
        </button>
      </div>
    </div>
  );
};
