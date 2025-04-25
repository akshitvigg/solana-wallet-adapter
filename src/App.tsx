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
import { Toaster } from "@/components/ui/toaster";
import { TokenLaunchpad } from "./components/CreateToken";
import { useMemo, useState } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";

function App() {
  const [token, setToken] = useState(null);
  // const [mintDone, setMintDone] = useState(false);
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider
      endpoint={
        "https://solana-devnet.g.alchemy.com/v2/rcKewhEi1DhcCldkNH-Ls8SlXjTd3HIy"
      }
    >
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className=" font-poppins  transition-all duration-200 min-h-screen bg-[url(/lbg1.png)]  dark:bg-[url(/bg.png)] ">
            <Toaster />
            <Navbar />
            <div className="flex pt-24 justify-center ">
              <div>
                <p className=" text-center dark:text-white text-zinc-800 text-4xl sm:text-5xl font-bold">
                  Effortless Wallet Integration <br /> for Solana Users
                </p>
                <div className="pb-2 gap-3  sm:gap-6 pt-10 flex justify-center ">
                  <WalletMultiButton style={{ borderRadius: "8px" }} />
                  <WalletDisconnectButton style={{ borderRadius: "8px" }} />
                </div>
                <BtnsBar />
                <TokenLaunchpad
                  onTokenCreate={(tokenMint: any) => {
                    setToken(tokenMint);
                  }}
                />
                {/* {token && token.toBase58()} */}
              </div>
            </div>
            <div className=" mt-52  ">
              <p className=" text-center text-zinc-400">
                Made by{" "}
                <a
                  className=" hover:underline"
                  href="https://github.com/akshitvigg"
                >
                  Akshit
                </a>
              </p>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
