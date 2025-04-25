import {
  createInitializeMint2Instruction,
  getMinimumBalanceForRentExemptMint,
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";

export const TokenLaunchpad = ({ onTokenCreate }: any) => {
  const { connection } = useConnection();
  const wallet = useWallet();

  async function createtoken() {
    const mintKeypair = Keypair.generate();
    const lamports = await getMinimumBalanceForRentExemptMint(connection);

    const transaction = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: wallet.publicKey!,
        newAccountPubkey: mintKeypair.publicKey,
        space: MINT_SIZE,
        lamports,
        programId: TOKEN_PROGRAM_ID,
      }),
      createInitializeMint2Instruction(
        mintKeypair.publicKey,
        9,
        wallet.publicKey!,
        wallet.publicKey,
        TOKEN_PROGRAM_ID
      )
    );

    transaction.feePayer = wallet.publicKey!;
    transaction.recentBlockhash = await (
      await connection.getLatestBlockhash()
    ).blockhash;
    transaction.partialSign(mintKeypair);

    await wallet.sendTransaction(transaction, connection);
    console.log(`Token mint at ${mintKeypair.publicKey.toBase58()}`);
    onTokenCreate(mintKeypair.publicKey);
  }
  return (
    <div className=" text-white gap-2 flex justify-center ">
      <div className=" space-y-2">
        <input
          className="py-3 pl-10 outline-none sm:w-[350px] w-56 bg-white backdrop-blur-xl dark:bg-zinc-800/70 dark:border-zinc-700 border-gray-300 border-2  rounded-lg "
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          className="py-3 pl-10 outline-none sm:w-[350px] w-56 bg-white backdrop-blur-xl dark:bg-zinc-800/70 dark:border-zinc-700 border-gray-300 border-2  rounded-lg "
          type="text"
          placeholder="Symbol"
        />
      </div>
      <div className=" space-y-2">
        <input
          className="py-3 pl-10 outline-none sm:w-[350px] w-56 bg-white backdrop-blur-xl dark:bg-zinc-800/70 dark:border-zinc-700 border-gray-300 border-2  rounded-lg "
          type="text"
          placeholder="IMAGE URL"
        />
        <br />
        <input
          className="py-3 pl-10 outline-none sm:w-[350px] w-56 bg-white backdrop-blur-xl dark:bg-zinc-800/70 dark:border-zinc-700 border-gray-300 border-2  rounded-lg "
          type="text"
          placeholder="initial supply"
        />
      </div>
      <br />
      <button
        className="sm:ml-3 ml-2 text-xl text-white hover:bg-[#1a1f2e] font-medium rounded-lg bg-[#512da8] px-10 py-2.5 sm:px-12"
        onClick={createtoken}
      >
        Create
      </button>
    </div>
  );
};
