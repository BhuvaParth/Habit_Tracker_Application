import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(savedHabits);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2>

        {habits.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2">Habit Name</th>
                <th className="py-2 px-4 border-b-2">Goals</th>
                <th className="py-2 px-4 border-b-2">Start Date</th>
                <th className="py-2 px-4 border-b-2">Frequency</th>
                <th className="py-2 px-4 border-b-2">Progress</th>
                <th className="py-2 px-4 border-b-2">Streak</th>
                <th className="py-2 px-4 border-b-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {habits.map((habit, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b">{habit.habitName}</td>
                  <td className="py-2 px-4 border-b">{habit.goals}</td>
                  <td className="py-2 px-4 border-b">{habit.startDate}</td>
                  <td className="py-2 px-4 border-b">{habit.frequency}</td>
                  <td className="py-2 px-4 border-b">{habit.progress}</td>
                  <td className="py-2 px-4 border-b">{habit.streak}</td>
                  <td className="py-2 px-4 border-b">{habit.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No habits added yet!</p>
        )}
      </div>
    </div>
  );
}
