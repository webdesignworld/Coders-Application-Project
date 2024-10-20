import React from 'react';

const CategoriesList = () => {
  const categories = ["All","Data structure", "Graphs", "Databases" ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <ul className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <li
            key={category}
            className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesList;