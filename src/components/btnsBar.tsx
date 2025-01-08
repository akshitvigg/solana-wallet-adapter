import { useState } from "react";
import { Airdrop } from "./airdrop";
import { TransferSol } from "./transferSol";
import { Getbalance } from "./getbalance";
import { Signmsg } from "./signmessage";

export const BtnsBar = () => {
  const [type, setType] = useState("");

  return (
    <div className="w-full">
      <div className="bg-gray-100 sm:ml-0 sm:mr-0 ml-3 mr-4 dark:bg-zinc-800 rounded-md mt-6 py-2.5">
        <div className="grid grid-cols-2 md:flex md:justify-center gap-2 px-2">
          <button
            className={`py-2 px-4 md:px-10 rounded-md ${
              type === "airdrop"
                ? "bg-white shadow-md text-black"
                : "hover:bg-gray-200 dark:hover:bg-zinc-700 dark:text-white text-gray-500"
            }`}
            onClick={() => {
              setType("airdrop");
            }}
          >
            Airdrop
          </button>
          <button
            className={`py-2 px-4 md:px-10 rounded-md ${
              type === "transaction"
                ? "bg-white shadow-md text-black"
                : "hover:bg-gray-200 dark:hover:bg-zinc-700 dark:text-white text-gray-500"
            }`}
            onClick={() => {
              setType("transaction");
            }}
          >
            Send Sol
          </button>
          <button
            className={`py-2 px-4 md:px-10 rounded-md ${
              type === "sign"
                ? "bg-white shadow-md text-black"
                : "hover:bg-gray-200 dark:hover:bg-zinc-700 dark:text-white text-gray-500"
            }`}
            onClick={() => {
              setType("sign");
            }}
          >
            Sign Message
          </button>
          <button
            className={`py-2 px-4 md:px-10 rounded-md ${
              type === "balance"
                ? "bg-white shadow-md text-black"
                : "hover:bg-gray-200 dark:hover:bg-zinc-700 dark:text-white text-gray-500"
            }`}
            onClick={() => {
              setType("balance");
            }}
          >
            Get Balance
          </button>
        </div>
      </div>
      <div className="pt-8 mb-16">
        {type === "airdrop" && <Airdrop />}
        {type === "transaction" && <TransferSol />}
        {type === "balance" && <Getbalance />}
        {type === "sign" && <Signmsg />}
      </div>
    </div>
  );
};
