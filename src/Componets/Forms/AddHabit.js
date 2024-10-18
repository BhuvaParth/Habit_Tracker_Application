import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddHabit() {
  const [habitName, setHabitName] = useState("");
  const [goals, setGoals] = useState("");
  const [startDate, setStartDate] = useState("");
  const [frequency, setFrequency] = useState("");
  const [progress, setProgress] = useState(0);
  const [streak, setStreak] = useState(0);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!habitName || !goals || !startDate || !frequency || !status) {
      setError("All fields are required");
      return;
    }

    setError("");

    const newHabit = {
      habitName,
      goals,
      startDate,
      frequency,
      progress,
      streak,
      status,
    };

    const existingHabits = JSON.parse(localStorage.getItem("habits")) || [];
    existingHabits.push(newHabit);
    localStorage.setItem("habits", JSON.stringify(existingHabits));

    navigate("/userdashboard");

    setHabitName("");
    setGoals("");
    setStartDate("");
    setFrequency("");
    setProgress(0);
    setStreak(0);
    setStatus("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Habit</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Habit Name</label>
          <input
            type="text"
            placeholder="Habit Name"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            className="w-full p-2 border border-black placeholder-black rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Goals</label>
          <input
            type="text"
            placeholder="Goals"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            className="w-full p-2 border border-black placeholder-black rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Start Date</label>
          <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border border-black placeholder-black rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Frequency</label>
          <input
            type="text"
            placeholder="Frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full p-2 border border-black placeholder-black rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Progress</label>
          <input
            type="number"
            placeholder="Progress"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-full p-2 border border-black placeholder-black rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Streak</label>
          <input
            type="number"
            placeholder="Streak"
            value={streak}
            onChange={(e) => setStreak(Number(e.target.value))}
            className="w-full p-2 border border-black placeholder-black rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border border-black placeholder-black rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="paused">Paused</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Add Habit
        </button>
      </form>
    </div>
  </div>
  );
}
