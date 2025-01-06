import { useWallet } from "@solana/wallet-adapter-react";
import { useRef } from "react";

export const Signmsg = () => {
  const { signMessage, publicKey } = useWallet();
  const inputRef = useRef<HTMLInputElement>(null);

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
    <input ref={inputRef} type="text" name="" id="" />
    <button>Sign</button>
  </div>;
};
