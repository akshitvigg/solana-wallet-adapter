import { useState } from "react";
import { Airdrop } from "./airdrop";
import { TransferSol } from "./transferSol";
import { Getbalance } from "./getbalance";
import { Signmsg } from "./signmessage";

export const BtnsBar = () => {
  const [type, setType] = useState<string>("");

  return (
    <div>
      <div className=" bg-gray-100  dark:bg-zinc-800 rounded-md mt-6   py-2.5 w-[690px] flex justify-center">
        <button
          className={` py-2  px-10 mr-1 rounded-md ${
            type === "airdrop"
              ? " bg-white shadow-md text-black"
              : " hover:bg-gray-200 dark:hover:bg-zinc-700 dark:text-white text-gray-500"
          }`}
          onClick={() => {
            setType("airdrop");
          }}
        >
          Airdrop
        </button>
        <button
          className={` px-10 mr-1 rounded-md ${
            type === "transaction"
              ? " bg-white  shadow-md text-black"
              : "hover:bg-gray-200 dark:hover:bg-zinc-700 dark:text-white text-gray-500"
          }`}
          onClick={() => {
            setType("transaction");
          }}
        >
          Send Sol
        </button>
        <button
          className={` px-10 mr-1 rounded-md ${
            type === "sign"
              ? " bg-white  shadow-md text-black"
              : "hover:bg-gray-200 dark:hover:bg-zinc-700 dark:text-white text-gray-500"
          }`}
          onClick={() => {
            setType("sign");
          }}
        >
          Sign Message
        </button>
        <button
          className={` px-10 mr-1 rounded-md ${
            type === "balance"
              ? " bg-white  shadow-md text-black"
              : "hover:bg-gray-200 dark:hover:bg-zinc-700 dark:text-white text-gray-500"
          }`}
          onClick={() => {
            setType("balance");
          }}
        >
          Get Balance
        </button>
      </div>
      <div className=" pt-8">
        {type === "airdrop" && <Airdrop />}
        {type === "transaction" && <TransferSol />}
        {type === "balance" && <Getbalance />}
        {type === "sign" && <Signmsg />}
      </div>
    </div>
  );
};
