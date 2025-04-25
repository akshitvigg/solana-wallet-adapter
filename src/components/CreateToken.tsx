import {
  getMinimumBalanceForRentExemptAccount,
  getMinimumBalanceForRentExemptMint,
} from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair } from "@solana/web3.js";

export const TokenLaunchpad = () => {
  const { connection } = useConnection();
  const wallet = useWallet();

  async function createtoken() {
    const mintKeypair = Keypair.generate();
    const lamports = await getMinimumBalanceForRentExemptMint(connection);
  }
  return <div className=" text-white"></div>;
};
