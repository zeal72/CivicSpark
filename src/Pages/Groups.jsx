import { useState } from "react";
import abiatech from "../assets/abiatech.png";
import business from "../assets/business.png";
import umuahia from "../assets/umuahia.jpg";
import health from "../assets/health.jpg";


const mockGroups = [
  {
    id: 1,
    name: "Abia State Technology",
    image: abiatech, // Replace with actual image
    members: 158000,
  },
  {
    id: 2,
    name: "Abia Business Network",
    image: business,
    members: 98200,
  },
  {
    id: 3,
    name: "Umuahia Developers",
    image: umuahia,
    members: 45600,
  },
  {
    id: 4,
    name: "Health Workers in Abia",
    image: health,
    members: 73200,
  },
];

export default function Groups() {
  const [search, setSearch] = useState("");
  // const navigate = useNavigate();

  const filteredGroups = mockGroups.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Discover Groups</h1>

      <input
        type="text"
        placeholder="Search groups..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 mb-6 border rounded-md outline-none focus:ring-2 focus:ring-green-500"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredGroups.map((group) => (
          <div
            key={group.id}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-gray-200"
          >
            <img
              src={group.image}
              alt={group.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{group.name}</h2>
              <p className="text-sm text-gray-500">
                {group.members.toLocaleString()} Members
              </p>
              <button
                className="mt-3 inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
              >
                View Group
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
