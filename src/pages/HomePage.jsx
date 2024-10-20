import React from "react";
import ChallengesList from "../components/ChallengesList";
import TrendingCategoriesBox from "../components/TrendingCategoriesBox";
import TopKCodersList from "../components/TopKCodersList";

const HomePage = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-7xl  flex gap-8">
          <div className="flex flex-col space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">

                
              <h1 className="text-2xl font-bold mb-4 text-gray-800">
                Challenges
              </h1>
              <p className="mb-4">Select Category</p>
              <button className="category-button bg-blue-500 text-white font-bold py-2 px-2 m-2 rounded-full hover:bg-blue-600 text-left">
                All
              </button>

              <button className="category-button bg-blue-500 text-white font-bold py-2 px-2 m-2 rounded-full hover:bg-blue-600 text-left">
                Data Structures
              </button>

              <button className="category-button bg-blue-500 text-white font-bold py-2 px-2 rounded-full hover:bg-blue-600 text-left">
                Math
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ChallengesList />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <div className="bg-white p-4 rounded-lg shadow-lg w-64">
              <TrendingCategoriesBox />
            </div>

            
            <div className="bg-white p-4 rounded-lg shadow-lg w-64">
              <TopKCodersList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
