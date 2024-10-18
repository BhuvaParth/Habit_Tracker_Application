import React from "react";
import { Link } from "react-router-dom";

export default function Header({ handleLogout, currentRole }) {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link className="flex items-center">
                <span className="text-black text-lg font-bold">Project Ecom</span>
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {currentRole === "user" && (
                    <Link
                      to="/addhabit"
                      className="ml-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black"
                    >
                      Add Habit
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="ml-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
