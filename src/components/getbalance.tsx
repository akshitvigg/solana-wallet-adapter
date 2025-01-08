import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";
import solLogo from "/solLogo.png";
import { IconRefresh } from "@tabler/icons-react";
import { useToast } from "@/hooks/use-toast";

export const Getbalance = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState<number>(0);
  const { toast } = useToast();

  const fetchBalance = async () => {
    try {
      if (wallet.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    } catch (e) {
      console.log(e);
    } finally {
      toast({
        title: `SOL balance loaded successfully.`,
      });
    }
  };

  useEffect(() => {
    let accountChange: number | undefined;

    if (wallet.publicKey) {
      fetchBalance();

      accountChange = connection.onAccountChange(
        wallet.publicKey,
        (updatedInfo) => {
          const lamports = updatedInfo.lamports;
          setBalance(lamports / LAMPORTS_PER_SOL);
        }
      );
    }

    return () => {
      if (accountChange) {
        connection.removeAccountChangeListener(accountChange);
      }
    };
  }, [wallet.publicKey, connection]);

  return (
    <div className="flex justify-center mt-4 dark:text-white ">
      <div className="bg-gray-100 border-gray-300  dark:bg-zinc-800 border-2 dark:border-zinc-700 backdrop-blur-xl rounded-xl w-64 p-4">
        <div className="flex justify-center items-center space-x-2">
          <img src={solLogo} width={60} alt="Solana Logo" />

          <p>
            <p className=" flex text-left text-lg tracking-widest font-bold">
              SOLANA
              <span className=" trasnsition-all duration-150 translate-x-8 -translate-y-3 ">
                <IconRefresh
                  onClick={fetchBalance}
                  size={22}
                  className=" text-zinc-400 hover:scale-105 active:scale-95 rounded-r-xl"
                />
              </span>
            </p>
            <span className="text-center dark:text-white  text-zinc-700 text-lg font-bold">
              {balance}
            </span>
            SOL
          </p>
        </div>
      </div>
    </div>
  );
};
