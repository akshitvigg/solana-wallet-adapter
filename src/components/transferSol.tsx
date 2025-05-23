import { useToast } from "@/hooks/use-toast";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useState } from "react";
import Loader from "./loader";

export const TransferSol = () => {
  const [to, setTo] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const wallet = useWallet();
  const { connection } = useConnection();
  const { toast } = useToast();
  const [isLoading, setLoading] = useState<boolean>(false);

  const transferSol = async () => {
    const transaction = new Transaction();

    try {
      if (!to) {
        toast({
          variant: "destructive",
          title: `Recipient field cannot be empty.`,
        });
        return;
      }
      if (!amount) {
        toast({
          variant: "destructive",
          title: `Amount field cannot be empty.`,
        });
        return;
      }

      transaction.add(
        SystemProgram.transfer({
          //@ts-ignore
          fromPubkey: wallet.publicKey,
          toPubkey: new PublicKey(to),
          lamports: amount * LAMPORTS_PER_SOL,
        })
      );
      setLoading(true);

      await wallet.sendTransaction(transaction, connection);

      toast({
        title: `SOL transferred successfully.`,
      });
    } catch (e) {
      console.log(e);
      alert("error occured while sending SOL");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" text-zinc-700 dark:text-white  ">
      <p className=" text-center text-2xl sm:text-3xl font-bold">
        Send Some SOL
      </p>
      <div className=" flex mt-2 justify-center">
        <div>
          <div className=" pt-2 ">
            <input
              onChange={(e) => setTo(e.target.value)}
              className="py-3 pl-10 outline-none sm:w-96 sm:ml-0 ml-2 w-80 bg-white backdrop-blur-xl dark:bg-zinc-800/70 dark:border-zinc-700 border-gray-300 border-2  rounded-lg"
              type="text"
              placeholder="to"
            />
          </div>
          <div className=" pt-2 ">
            <input
              onChange={(e) => setAmount(Number(e.target.value))}
              className="py-3 pl-10 outline-none sm:w-96 sm:ml-0 ml-2 w-80 bg-white backdrop-blur-xl dark:bg-zinc-800/70 dark:border-zinc-700 border-gray-300 border-2  rounded-lg"
              type="text"
              placeholder="Amount"
            />
          </div>
          <div className=" flex justify-center">
            <button
              onClick={transferSol}
              className=" mt-2 text-white text-xl hover:bg-[#1a1f2e] font-medium rounded-lg bg-[#512da8] py-2.5  sm:w-96 w-80 sm:ml-0 ml-2"
            >
              {isLoading ? <Loader /> : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
