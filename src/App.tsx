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
          <div className=" min-h-screen flex items-center justify-center bg-[url(../public/bg.png)] ">
            <div className=" ">
              <div className="pb-2 gap-2 flex justify-center ">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <div className=" bg-zinc-800 rounded-md  py-1.5 w-[655px] flex justify-center">
                <button
                  className=" py-2 px-10 mr-1 rounded-md hover:bg-zinc-700 text-white active:bg-white active:text-black a "
                  onClick={() => {
                    setType("airdrop");
                  }}
                >
                  airdrop
                </button>
                <button
                  className=" px-10 mr-1 rounded-md hover:bg-zinc-700 text-white "
                  onClick={() => {
                    setType("transaction");
                  }}
                >
                  transaction
                </button>
                <button
                  className=" px-10 mr-1 rounded-md hover:bg-zinc-700 text-white "
                  onClick={() => {
                    setType("sign");
                  }}
                >
                  sign message
                </button>
                <button
                  className=" px-10 mr-1 rounded-md hover:bg-zinc-700 text-white "
                  onClick={() => {
                    setType("balance");
                  }}
                >
                  getBalance
                </button>
              </div>
              {type === "airdrop" && <Airdrop />}
              {type === "transaction" && <TransferSol />}
              {type === "balance" && <Getbalance />}
              {type === "sign" && <Signmsg />}
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
