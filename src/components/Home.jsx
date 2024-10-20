import CategoriesList from "./components/CategoriesList";
import ChallengesList from "./components/ChallengesList";
import TrendingCategoriesBox from "./components/TrendingCategoriesBox";

import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100  p-6 rounded-lg shadow-lg max-w-xs">
  <h1 className="text-2xl font-bold mb-4 text-gray-800">Challenges</h1>
  <p className="mb-4">Select Category</p>
  <div className="flex flex-col gap-3">
    <button className="category-button bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 text-left">
      All
    </button>
    <button className="category-button bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 text-left">
      Data Structures
    </button>
    <button className="category-button bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 text-left">
      Math
    </button>
  </div>
</div> 

    </>
  );
};

export default Home;



