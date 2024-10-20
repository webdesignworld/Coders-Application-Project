import React from 'react';
import leaders from '../leaderboard.json';

const Leaderboard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Leaderboard</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 border-b text-left text-gray-600 font-semibold">Rank</th>
            <th className="py-3 px-4 border-b text-left text-gray-600 font-semibold">Name</th>
            <th className="py-3 px-4 border-b text-left text-gray-600 font-semibold">Score</th>
            <th className="py-3 px-4 border-b text-left text-gray-600 font-semibold">Solved Challenges</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader) => (
            <tr key={leader.id} className="hover:bg-gray-50 transition-colors duration-200">
              <td className="py-3 px-4 border-b">{leader.rank}</td>
              <td className="py-3 px-4 border-b">{`${leader.firstName} ${leader.lastName}`}</td>
              <td className="py-3 px-4 border-b">{leader.score}</td>
              <td className="py-3 px-4 border-b">{leader.solvedChallenges}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
