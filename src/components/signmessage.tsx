import { useWallet } from "@solana/wallet-adapter-react";

export const Signmsg = () => {
  const { signMessage, publicKey } = useWallet();

  const signmsg = () => {
    if (!publicKey) {
      alert("wallet not connected ");
      return;
    }
    if (!signMessage) {
      alert("wallet does not support message signing");
      return;
    }
  };

  return;
  <div>
    <input type="text" name="" id="" />
    <button>Sign</button>
  </div>;
};
