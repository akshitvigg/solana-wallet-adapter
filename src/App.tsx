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

function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className=" h-screen flex items-center justify-center bg-[#0b0a0a]  ">
            <div>
              <div className="pb-2 gap-2 flex">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <Airdrop />
              <TransferSol />
              <Getbalance />
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
