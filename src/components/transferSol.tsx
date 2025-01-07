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
    try {
      transaction.add(
        SystemProgram.transfer({
          //@ts-ignore
          fromPubkey: wallet.publicKey,
          toPubkey: new PublicKey(to),
          lamports: amount * LAMPORTS_PER_SOL,
        })
      );

      await wallet.sendTransaction(transaction, connection);

      alert("sol sended");
    } catch (e) {
      console.log(e);
      alert("error occured while sending sol");
    }
  };

  return (
    <div className=" text-white  ">
      <p className=" text-center text-3xl font-bold"> Send Some Sol </p>
      <div className=" flex mt-2 justify-center">
        <div>
          <div className=" pt-2 ">
            <input
              onChange={(e) => setTo(e.target.value)}
              className="py-3 pl-10 outline-none w-96 bg-transparent border-zinc-700 border-2  rounded-lg p-1.5"
              type="text"
              placeholder="to"
            />
          </div>
          <div className=" pt-2 ">
            <input
              onChange={(e) => setAmount(Number(e.target.value))}
              className="py-3 pl-10 outline-none w-96 bg-transparent border-zinc-700 border-2  rounded-lg p-1.5"
              type="text"
              placeholder="Amount"
            />
          </div>
          <div className=" flex justify-center">
            <button
              onClick={transferSol}
              className=" mt-2   text-xl hover:bg-[#1a1f2e] font-medium rounded-lg bg-[#512da8] py-2.5  w-96"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
