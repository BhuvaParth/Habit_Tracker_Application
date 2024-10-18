import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditHabit() {
  const location = useLocation();
  const navigate = useNavigate();
  const { habit, index } = location.state;

  const [habitName, setHabitName] = useState(habit.habitName);
  const [goals, setGoals] = useState(habit.goals);
  const [startDate, setStartDate] = useState(habit.startDate);
  const [frequency, setFrequency] = useState(habit.frequency);
  const [progress, setProgress] = useState(habit.progress);
  const [streak, setStreak] = useState(habit.streak);
  const [status, setStatus] = useState(habit.status);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedHabit = {
      habitName,
      goals,
      startDate,
      frequency,
      progress,
      streak,
      status,
    };

    const habits = JSON.parse(localStorage.getItem("habits")) || [];
    habits[index] = updatedHabit; 
    localStorage.setItem("habits", JSON.stringify(habits));

    navigate("/userdashboard"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Habit</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="habitName">Habit Name</label>
            <input
              id="habitName"
              type="text"
              placeholder="Habit Name"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              className="w-full p-2 border border-black placeholder-black rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="goals">Goals</label>
            <input
              id="goals"
              type="text"
              placeholder="Goals"
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              className="w-full p-2 border border-black placeholder-black rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="startDate">Start Date</label>
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border border-black placeholder-black rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="frequency">Frequency</label>
            <input
              id="frequency"
              type="text"
              placeholder="Frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full p-2 border border-black placeholder-black rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="progress">Progress</label>
            <input
              id="progress"
              type="number"
              placeholder="Progress"
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="w-full p-2 border border-black placeholder-black rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="streak">Streak</label>
            <input
              id="streak"
              type="number"
              placeholder="Streak"
              value={streak}
              onChange={(e) => setStreak(Number(e.target.value))}
              className="w-full p-2 border border-black placeholder-black rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border border-black placeholder-black rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="paused">Paused</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
