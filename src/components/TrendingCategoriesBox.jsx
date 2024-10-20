import React from 'react';

const TrendingCategoriesBox = () => {
  const trendingCategories = [
    { category: "Graphs", count: 100 },
    { category: "Stacks", count: 45 },
    { category: "Algorithms", count: 20 },
    { category: "Databases", count: 3 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md px-6 py-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Trending Categories</h2>
      <ul className="list-none space-y-4">
        {trendingCategories.map((category, index) => (
          <li
            key={index}
            className="flex items-center justify-between py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            <span className="text-lg font-medium text-gray-700">{category.category}</span>
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${
                category.count > 50 ? 'bg-green-200 text-green-800' :
                category.count > 20 ? 'bg-yellow-200 text-yellow-800' :
                'bg-red-200 text-red-800'
              }`}
            >
              {category.count} 
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCategoriesBox;