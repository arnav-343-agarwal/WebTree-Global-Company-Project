import { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 to-purple-700 py-4 px-8 flex justify-between items-center shadow-md">
      <div>
        <h1 className="text-white text-2xl font-bold">Arnav Agarwal</h1>
        <p className="text-gray-200 text-sm">Full Stack Developer | Problem Solver | ML Enthusiast</p>
      </div>
      <div className="flex space-x-6">
        <a href="https://github.com/arnav-343-agarwal" target="_blank" className="text-gray-200 hover:text-white transition">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/arnav-agarwal-b6334a247/" target="_blank" className="text-gray-200 hover:text-white transition">
          LinkedIn
        </a>
        <a href="Arnav Resume Official.pdf" download className="text-gray-200 hover:text-white transition">
          Download Resume
        </a>
      </div>
    </nav>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = () => {
    setLoading(true);
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
      });
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mt-16">WebTree Global Private Limited</h1>
        <p className="text-lg mt-2 text-gray-300">Full Stack Development Internship</p>
        <button 
          onClick={fetchUser} 
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
        >
          Fetch Profile
        </button>
        {loading && (
          <div className="mt-6 text-gray-300 flex items-center space-x-2">
            <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
            <p>Fetching user details...</p>
          </div>
        )}
        {user && !loading && (
          <div className="relative bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20 rounded-xl p-6 flex items-center w-[450px] mt-8 hover:scale-105 transition-transform duration-300">
            <img
              src={user.picture.large}
              alt="User"
              className="w-24 h-24 rounded-lg border-2 border-white shadow-lg transition-transform duration-300 hover:scale-110"
            />
            <div className="ml-6">
              <p className="text-xl font-semibold tracking-wide">{user.name.first} {user.name.last}</p>
              <p className="text-gray-300 text-sm mt-1 uppercase">{user.gender}</p>
              <p className="text-gray-200 text-sm mt-1">{user.phone}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
