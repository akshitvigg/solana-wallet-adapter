import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useState } from "react";

export const TransferSol = () => {
  const [to, setTo] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const wallet = useWallet();
  const { connection } = useConnection();

  const transferSol = async () => {
    const transaction = new Transaction();

    transaction.add(
      SystemProgram.transfer({
        //@ts-ignore
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );

    alert("sol sended");
  };

  return (
    <div className=" mt-2">
      <input
        onChange={(e) => setTo(e.target.value)}
        className=" mr-2 rounded-sm p-1.5"
        type="text"
        placeholder="to"
      />
      <input
        onChange={(e) => setAmount(Number(e.target.value))}
        className="rounded-sm p-1.5"
        type="text"
        placeholder="Amount"
      />
      <button
        onClick={transferSol}
        className="text-white ml-3 font-bold rounded-sm bg-[#512da8] p-1.5 px-9"
      >
        Send
      </button>
    </div>
  );
};
