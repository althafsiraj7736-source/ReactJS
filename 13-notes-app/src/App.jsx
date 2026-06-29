import { useState } from "react";
import { Trash2 } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !note.trim()) {
      alert("Please fill all fields.");
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      note,
    };

    setNotes((prev) => [...prev, newNote]);

    setTitle("");
    setNote("");
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-black text-white lg:flex">
      {/* Left Section */}
      <form
        onSubmit={submitHandler}
        className="lg:w-1/2 p-10 flex flex-col gap-5"
      >
        <h1 className="text-4xl font-bold mb-4">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Note Heading"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-2 border-gray-500 rounded-lg p-4 bg-transparent outline-none focus:border-blue-500 transition"
        />

        <textarea
          placeholder="Write Details..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full h-48 border-2 border-gray-500 rounded-lg p-4 resize-none bg-transparent outline-none focus:border-blue-500 transition"
        />

        <button
          type="submit"
          className="w-fit bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-300 px-8 py-4 rounded-lg font-semibold"
        >
          ADD NOTE
        </button>
      </form>

      {/* Right Section */}
      <div className="lg:w-1/2 lg:border-l border-gray-700 p-10">
        <h1 className="text-4xl font-bold mb-8">Recent Notes</h1>

        {notes.length === 0 ? (
          <div className="h-80 flex items-center justify-center text-gray-500 text-lg">
            No Notes Added Yet 📒
          </div>
        ) : (
          <div className="flex flex-wrap gap-6 overflow-y-auto max-h-[80vh] pr-2">
            {notes.map((item) => (
              <div
                key={item.id}
                className="relative w-56 h-64 p-5 rounded-xl bg-white text-black shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 bg-cover"
                style={{
                  backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprLtbfR7pNrP2llW86CO0bQzI8hcYame5ipuIVdOp_Q&s=10')",
                }}
              >
                <button
                  onClick={() => deleteNote(item.id)}
                  className="absolute top-3 right-3 text-red-600 hover:scale-110 transition"
                >
                  <Trash2 size={20} />
                </button>

                <h2 className="text-xl font-bold break-words">
                  {item.title}
                </h2>

                <p className="mt-3 text-gray-700 break-words line-clamp-5">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;