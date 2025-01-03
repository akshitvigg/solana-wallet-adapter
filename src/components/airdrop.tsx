export const Airdrop = () => {
  return (
    <div>
      <input type="text" placeholder="SOL" />
      <button
        onClick={() => {
          alert("sended");
        }}
      >
        Send
      </button>
    </div>
  );
};
