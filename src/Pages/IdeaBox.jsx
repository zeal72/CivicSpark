import { useState } from "react";

export default function IdeaBox() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Public Health");
  const [suggestion, setSuggestion] = useState("");
  const [image, setImage] = useState(null);

  const [ideas, setIdeas] = useState([
    {
      title: "More Waste Bins",
      author: "John D.",
      body: "We need better waste disposal bins around Ariaria.",
    },
    {
      title: "Solar Lights in Aba South",
      author: "Ada U.",
      body: "Please install solar-powered street lights in rural areas.",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIdea = {
      title,
      author: "You",
      body: suggestion,
    };

    setIdeas([newIdea, ...ideas]);

    // Reset form
    setTitle("");
    setCategory("Public Health");
    setSuggestion("");
    setImage(null);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 flex items-center justify-center">Idea Box</h1>
      <p className="text-gray-800 mb-6 flex items-center justify-center font-bold text-center">
        Suggest ideas that could help your community or the state. Your voice matters.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="text"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        >
          <option>Public Health</option>
          <option>Security</option>
          <option>Education</option>
          <option>Road Infrastructure</option>
          <option>Youth Empowerment</option>
          <option>Other</option>
        </select>

        <textarea
          placeholder="Write your suggestion..."
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded h-32 resize-none"
        ></textarea>

        <div>
          <label className="block mb-1 text-sm font-medium">Upload Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
						className="border cursor-pointer py-3 px-1 w-48 rounded bg-gray-200"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Submit Suggestion
        </button>
      </form>

      <hr className="my-8" />

      <h2 className="text-xl font-semibold mb-4">Recent Suggestions</h2>
      <div className="space-y-4">
        {ideas.map((idea, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-lg font-bold text-green-700">{idea.title}</h3>
            <p className="text-sm text-gray-500 mb-1">by {idea.author}</p>
            <p>{idea.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
