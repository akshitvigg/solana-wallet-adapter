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
import { Navbar } from "./components/navbar";
import { BtnsBar } from "./components/btnsBar";

function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className=" font-poppins  transition-all duration-200 min-h-screen bg-[url(/lbg1.png)]  dark:bg-[url(/bg.png)] ">
            <Navbar />
            <div className="flex pt-24 justify-center ">
              <div>
                <p className=" text-center dark:text-white text-zinc-800 text-5xl font-bold">
                  Effortless Wallet Integration <br /> for Solana Users
                </p>
                <div className="pb-2 gap-6 pt-10 flex justify-center ">
                  <WalletMultiButton style={{ borderRadius: "8px" }} />
                  <WalletDisconnectButton style={{ borderRadius: "8px" }} />
                </div>
                <BtnsBar />
              </div>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
