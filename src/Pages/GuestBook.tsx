import GuestForm from "@/components/GuestForm";

const Guestbook: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white font-[Outfit]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            📓 Guestbook
          </h1>
          <p className="text-gray-400 text-lg">
            Leave a message or doodle and it'll be pinned on the board!
          </p>
        </div>

        <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 shadow-xl backdrop-blur-md">
          <GuestForm />
        </div>
      </div>
    </div>
  );
};

export default Guestbook;
