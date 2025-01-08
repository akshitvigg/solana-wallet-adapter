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
          <div className=" font-poppins  min-h-screen bg-[url(/lbg1.png)]  dark:bg-[url(/bg.png)] ">
            <Navbar />
            <div className="flex pt-24 justify-center ">
              <div>
                <p className=" dark:text-white text-black text-4xl font-bold">
                  Best Wallet adapter you will ever use
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
