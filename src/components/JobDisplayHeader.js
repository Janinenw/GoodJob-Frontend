import React from 'react';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 m-10 rounded-xl shadow-lg flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold mb-2 tracking-wider text-center">
        You get a job, you get a job, you get a job!!!
      </h2>
      <p className="text-lg text-blue-200 italic text-center">
        - Maybe Oprah at some point.
      </p>
    </div>
  );
};

export default Header;