import React from 'react';
import { FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AuthNavbar = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-900 text-white shadow-md">
      <div className="text-2xl font-bold">
        <Link to="/" className="hover:text-blue-300 transition-colors">Coders Application</Link>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/signin" className="flex items-center text-lg hover:text-blue-300 transition-colors">
              <FaSignInAlt className="mr-2" /> Log in
            </Link>
          </li>
          <li>
            <Link to="/signup" className="flex items-center text-lg hover:text-blue-300 transition-colors">
              <FaUser className="mr-2" /> Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AuthNavbar;

