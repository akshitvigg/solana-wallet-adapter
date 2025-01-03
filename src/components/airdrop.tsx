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
    <div>
      <input
        onChange={(e) => setInputVal(Number(e.target.value))}
        className="rounded-sm p-1.5"
        type="text"
        placeholder="SOL"
      />
      <button
        className="text-white ml-3 font-bold rounded-sm bg-[#512da8] p-1.5 px-9"
        onClick={sendAirdrop}
      >
        Send
      </button>
    </div>
  );
};
