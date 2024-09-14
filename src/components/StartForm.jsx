import { useNavigate } from "react-router-dom";

const StartForm = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-[500px] w-full flex flex-col justify-center gap-5 items-center">
      <button
        className=" text-2xl border-2 px-3 py-2 rounded-2xl bg-blue-500 text-white hover:bg-blue-400 shadow-md"
        onClick={() => navigate("/multiplayer")}
      >
        Multiplayer
      </button>
      <button
        className=" text-2xl border-2 px-3 py-2 rounded-2xl bg-red-500 text-white hover:bg-red-400 shadow-md"
        onClick={() => navigate("/computer")}
      >
        vs Computer
      </button>
    </div>
  );
};

export default StartForm;
