import React from 'react'
import coders from '../coders.json'

const TopKCodersList = () => {

  return (

    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Top 4 Coders</h2>
    {coders.map((coder) => (
      <div key={coder.id} className="flex items-center justify-between py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
        
           <img className="w-8 h-8 rounded-full" src={coder.avatarUrl} alt={`${coder.firstName} ${coder.lastName}`} />
        <span>{coder.firstName} {coder.lastName}</span> 
        <span>Score: {coder.score}</span>
      </div>
    ))}
  </div>
  )}

export default TopKCodersList;

