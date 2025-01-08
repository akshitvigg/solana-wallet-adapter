import { useToast } from "@/hooks/use-toast";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import Loader from "./loader";

export const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [inputVal, setInputVal] = useState<number>(0);
  const { toast } = useToast();
  const [isLoading, setLoading] = useState<boolean>(false);

  const sendAirdrop = async () => {
    if (!wallet.publicKey) {
      toast({
        variant: "destructive",
        title: `Wallet is not connected.`,
      });
      return;
    }
    setLoading(true);
    try {
      if (!inputVal) {
        toast({
          variant: "destructive",
          title: `Input field cannot be empty.`,
        });
        return;
      }

      const signature = await connection.requestAirdrop(
        wallet.publicKey,
        inputVal * 1000000000
      );
      toast({
        title: `Airdrop successful. You’ve received the tokens!`,
        description: signature,
      });
    } catch (error) {
      console.error("Airdrop failed:", error);
      toast({
        variant: "destructive",
        title: "Airdrop failed. Please try again.",
        description: "Check console for details",
      });
    } finally {
      setLoading(false);
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
          {isLoading ? <Loader /> : "Get"}
        </button>
      </div>
    </div>
  );
};
