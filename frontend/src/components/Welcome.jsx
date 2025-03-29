import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

    const navigate = useNavigate()

  return (
    <div className="flex items-end justify-center min-h-screen">
      <div className="w-full max-w-[350px] lg:max-w-[600px] p-6 rounded-xl text-center">
        <h1 className="text-2xl font-semibold text-gray-900 text-left">Welcome to PopX</h1>
        <p className="text-gray-500 mt-2 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-6">
          <button onClick={()=>navigate('/signup')} className="w-full py-2 bg-[#6c25ff] text-white font-medium rounded-lg cursor-pointer">
            Create Account
          </button>
          <button onClick={()=>navigate('/login')} className="cursor-pointer w-full py-2 mt-3 bg-[#6c25ff48] text-[#1d2226] font-medium rounded-lg">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
