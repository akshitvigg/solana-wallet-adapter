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
    <div className=" text-zinc-700 dark:text-white ">
      <p className=" text-center sm:text-3xl text-2xl font-bold">
        Airdrop Some Token
      </p>
      <div className="  flex mt-4 justify-center">
        <input
          onChange={(e) => setInputVal(Number(e.target.value))}
          className="py-3 pl-10 outline-none sm:w-96 w-56 bg-white backdrop-blur-xl dark:bg-zinc-800/70 dark:border-zinc-700 border-gray-300 border-2  rounded-lg "
          type="text"
          placeholder="SOL"
        />
        <button
          className="sm:ml-3 ml-2 text-xl text-white hover:bg-[#1a1f2e] font-medium rounded-lg bg-[#512da8] px-10  sm:px-12"
          onClick={sendAirdrop}
        >
          Get
        </button>
      </div>
    </div>
  );
};
