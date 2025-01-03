export const Airdrop = () => {
  return (
    <div className=" text-white">
      <input className=" rounded-sm p-1.5" type="text" placeholder="SOL" />
      <button
        className="  rounded-sm bg-[#512da8] p-1.5 px-7"
        onClick={() => {
          alert("sended");
        }}
      >
        Send
      </button>
    </div>
  );
};
