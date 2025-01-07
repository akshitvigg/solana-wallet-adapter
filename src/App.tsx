import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Airdrop } from "./components/airdrop";
import { Getbalance } from "./components/getbalance";
import { TransferSol } from "./components/transferSol";
import { Signmsg } from "./components/signmessage";
import { useState } from "react";

function App() {
  const [type, setType] = useState("");
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className=" font-poppins  min-h-screen flex pt-44 justify-center bg-[url(../public/bg.png)] ">
            <div className=" ">
              <p className=" text-white text-4xl font-bold">
                Best Wallet adapter you will ever use
              </p>
              <div className="pb-2 gap-6 pt-10 flex justify-center ">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <div className=" bg-zinc-800 rounded-md mt-6   py-2.5 w-[690px] flex justify-center">
                <button
                  className={` py-2 px-10 mr-1 rounded-md ${
                    type === "airdrop"
                      ? " bg-white text-black"
                      : "hover:bg-zinc-700 text-white"
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
                      ? " bg-white text-black"
                      : "hover:bg-zinc-700 text-white"
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
                      ? " bg-white text-black"
                      : "hover:bg-zinc-700 text-white"
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
                      ? " bg-white text-black"
                      : "hover:bg-zinc-700 text-white"
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
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
