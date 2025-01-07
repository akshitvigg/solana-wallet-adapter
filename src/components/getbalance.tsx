import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";
import solLogo from "/solLogo.png";
import { IconRefresh } from "@tabler/icons-react";

export const Getbalance = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState<number>(0);

  const fetchBalance = async () => {
    try {
      if (wallet.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    } catch (e) {
      console.log(e);
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
    <div className="flex justify-center mt-4 text-white">
      <div className="bg-zinc-800 border-2 border-zinc-700 backdrop-blur-xl rounded-xl w-64 p-4">
        <div className="flex justify-center items-center space-x-2">
          <img src={solLogo} width={60} alt="Solana Logo" />

          <p>
            <p className=" flex text-left text-lg tracking-widest font-bold">
              SOLANA
              <span className=" trasnsition-all duration-150 translate-x-8 -translate-y-3 ">
                <IconRefresh
                  onClick={fetchBalance}
                  size={22}
                  className=" hover:scale-105 active:scale-95 rounded-r-xl"
                />
              </span>
            </p>
            <span className="text-center text-lg font-bold">{balance}</span> SOL
          </p>
        </div>
      </div>
    </div>
  );
};
