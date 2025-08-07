import { useState } from "react";
import DoodleCanvas from "./DoodleCanvas";

const GuestForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [doodle, setDoodle] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const guestEntry = {
      name,
      message,
      doodle,
      createdAt: new Date().toISOString(),
    };
    console.log("Guest Entry →", guestEntry);
    // You can send this to the backend later
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-[Outfit] ">
      <DoodleCanvas onDraw={(dataUrl) => setDoodle(dataUrl)} />
      <input
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded bg-white border border-gray-300"
      />
      <textarea
        placeholder="Write your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 rounded bg-white border border-gray-300 h-24"
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default GuestForm;
