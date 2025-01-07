import { useWallet } from "@solana/wallet-adapter-react";
import { useRef } from "react";
import { ed25519 } from "@noble/curves/ed25519";
import bs58 from "bs58";

export const Signmsg = () => {
  const { signMessage, publicKey } = useWallet();
  const inputRef = useRef<HTMLInputElement>(null);

  const signmsg = async () => {
    if (!publicKey) {
      alert("wallet not connected ");
      return;
    }
    if (!signMessage) {
      alert("wallet does not support message signing");
      return;
    }
    const encodedmsg = new TextEncoder().encode(inputRef.current?.value);
    const signature = await signMessage(encodedmsg);

    if (!ed25519.verify(signature, encodedmsg, publicKey.toBytes())) {
      alert("message signature invalid");
    }
    alert(`message signature ${bs58.encode(signature)}`);
  };

  return (
    <div className=" text-white  mt-2">
      <p className=" text-center">Type Your Message To Be Signed</p>
      <input
        className="py-3 pl-10 outline-none w-96 bg-transparent border-zinc-700 border-2  rounded-lg "
        ref={inputRef}
        type="text"
      />
      <button onClick={signmsg} className=" bg-slate-50 text-black">
        Sign
      </button>
    </div>
  );
};
