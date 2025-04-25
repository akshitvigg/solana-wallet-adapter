import {
  createAssociatedTokenAccountInstruction,
  createMintToInstruction,
  getAssociatedTokenAddressSync,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction } from "@solana/web3.js";
export const MintToken = ({ mintAddress, onDone }: any) => {
  const { connection } = useConnection();
  const wallet = useWallet();

  async function mint() {
    const associatedToken = getAssociatedTokenAddressSync(
      mintAddress,
      wallet.publicKey!,
      false,
      TOKEN_PROGRAM_ID
    );

    console.log(associatedToken);

    const transaction = new Transaction().add(
      createAssociatedTokenAccountInstruction(
        wallet.publicKey!,
        associatedToken,
        wallet.publicKey!,
        mintAddress,
        TOKEN_PROGRAM_ID
      )
    );

    await wallet.sendTransaction(transaction, connection);

    const mintTransaction = new Transaction().add(
      createMintToInstruction(
        mintAddress,
        associatedToken,
        wallet.publicKey!,
        1000000000,
        [],
        TOKEN_PROGRAM_ID
      )
    );

    await wallet.sendTransaction(mintTransaction, connection);
    onDone();
  }
  return (
    <div className=" text-white">
      {" "}
      <input
        className="py-3 pl-10 outline-none sm:w-[350px] w-56 bg-white backdrop-blur-xl dark:bg-zinc-800/70 dark:border-zinc-700 border-gray-300 border-2  rounded-lg "
        type="text"
        placeholder="Symbol"
      />
      <button
        className="sm:ml-3 ml-2 text-xl text-white hover:bg-[#1a1f2e] font-medium rounded-lg bg-[#512da8] px-10 py-2.5 sm:px-12"
        onClick={mint}
      >
        Mint
      </button>
    </div>
  );
};
