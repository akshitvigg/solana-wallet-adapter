import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export const Getbalance = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    let accountChange: number | undefined;

    const fetchBalance = async () => {
      if (wallet.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    };
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
  }, [wallet.publicKey, connection]);

  return <div className=" text-white">{balance} SOL</div>;
};
