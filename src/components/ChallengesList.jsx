
import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRegHourglass } from "react-icons/fa";
import challenges from "../challenges.json";

const getStatusIcon = (status) => {
  let icon, description;
  switch (status) {
    case "Completed":
      icon = <BsCheck2Circle className="text-green-500" />;
      description = "This challenge is completed.";
      break;
    case "Attempted":
      icon = <LuFileSpreadsheet className="text-yellow-500" />;
      description = "This challenge is attempted.";
      break;
    case "Pending":
      icon = <FaRegHourglass className="text-red-500" />;
      description = "This challenge is pending.";
      break;
    default:
      icon = null;
      description = "";
  }
  return { icon, description };
};

const ChallengesList = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="max-h-72 overflow-y-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Difficulty</th>
              <th className="p-3 text-left">Solution Rate</th>
            </tr>
          </thead>
          <tbody>
            {challenges.map((challenge) => {
              const { icon, description } = getStatusIcon(challenge.status);

              return (
                <tr key={challenge.id} className="border-b">
                  <td className="p-3">
                    <div className="flex flex-col items-center">
                      <span className="mb-1">{challenge.status}</span>
                      {icon}
                      <div className="relative group">
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">{challenge.title}</td>
                  <td className="p-3">{challenge.category}</td>
                  <td className="p-3">
                    <span
                      className={`font-semibold ${
                        challenge.difficulty === "Easy"
                          ? "bg-green-500 text-white px-2 py-1 rounded-full"
                          : challenge.difficulty === "Moderate"
                          ? "bg-amber-500 text-white px-2 py-1 rounded-full"
                          : challenge.difficulty === "Hard"
                          ? "bg-red-500 text-white px-2 py-1 rounded-full"
                          : ""
                      }`}
                    >
                      {challenge.difficulty}
                    </span>
                  </td>
                  <td className="p-3">{challenge.solutionRate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChallengesList;
