import React from "react";

const stats = [
  { title: "Total Users", value: "1,204", color: "bg-blue-500" },
  { title: "Revenue", value: "$23,890", color: "bg-green-500" },
  { title: "Pending Orders", value: "87", color: "bg-yellow-500" },
  { title: "Errors", value: "3", color: "bg-red-500" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">DashboardX</h1>
        <span className="text-sm text-gray-600">Gunj Mehta (Admin)</span>
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg shadow p-4 text-white ${item.color}`}
            >
              <h3 className="text-lg">{item.title}</h3>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
