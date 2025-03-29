import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-start justify-center min-h-screen">
      <div className="w-full max-w-[400px] sm:max-w-[450px] px-6 py-10">
        <h1 className="text-[28px] font-semibold text-gray-900 text-left leading-snug tracking-tight">
          Signin to your <br /> PopX account
        </h1>

        <p className="text-gray-500 text-[18px] mt-2 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-4 relative">
          <fieldset className="border border-gray-300 rounded-lg px-3 pb-1 focus-within:border-[#6c25ff]">
            <legend className="text-sm text-[#6c25ff]">Email Address</legend>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full bg-transparent outline-none text-gray-900 py-1"
            />
          </fieldset>
        </div>

        <div className="mt-3 relative">
          <fieldset className="border border-gray-300 rounded-lg px-3 pb-1 focus-within:border-[#6c25ff]">
            <legend className="text-sm text-[#6c25ff]">Password</legend>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full bg-transparent outline-none text-gray-900 py-1"
            />
          </fieldset>
        </div>

        <button
          onClick={() => navigate("/profile")}
          className="w-full py-2 mt-5 bg-gray-300 text-white font-medium rounded-lg cursor-pointer"
          disabled
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
