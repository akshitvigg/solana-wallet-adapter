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

function App() {
  return (
    <ConnectionProvider
      endpoint={
        "https://shape-mainnet.g.alchemy.com/v2/bGqAplTTOOO24SOQZtONwbS7I4jC9K2u"
      }
    >
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className=" h-screen flex items-center justify-center bg-[#0b0a0a]  ">
            <div>
              <div className="pb-3 gap-2 flex">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <Airdrop />
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
