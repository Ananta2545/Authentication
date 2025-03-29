import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-start justify-center min-h-screen">
      <div className="w-full max-w-[400px] sm:max-w-[450px] px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-900 text-left leading-snug tracking-tight">
          Create your <br />PopX account
        </h1>

        <div className="mt-4 relative">
          <fieldset className="border border-gray-300 rounded-lg px-3 pb-1 focus-within:border-[#6c25ff]">
            <legend className="text-sm text-[#6c25ff] px-1">
              Full Name<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full bg-transparent outline-none text-gray-900 py-1"
            />
          </fieldset>
        </div>

        <div className="mt-3 relative">
          <fieldset className="border border-gray-300 rounded-lg px-3 pb-1 focus-within:border[#6c25ff]">
            <legend className="text-sm text-[#6c25ff] px-1">
              Phone number<span className="text-red-500">*</span>
            </legend>
            <input
              type="tel"
              placeholder="1234567890"
              className="w-full bg-transparent outline-none text-gray-900 py-1"
            />
          </fieldset>
        </div>

        <div className="mt-3 relative">
          <fieldset className="border border-gray-300 rounded-lg px-3 pb-1 focus-within:border-[#6c25ff]">
            <legend className="text-sm text-[#6c25ff] px-1">
              Email address<span className="text-red-500">*</span>
            </legend>
            <input
              type="email"
              placeholder="marrydoe@gmail.com"
              className="w-full bg-transparent outline-none text-gray-900 py-1"
            />
          </fieldset>
        </div>

        <div className="mt-3 relative">
          <fieldset className="border border-gray-300 rounded-lg px-3 pb-1 focus-within:border-[#6c25ff]">
            <legend className="text-sm text-[#6c25ff] px-1">
              Password<span className="text-red-500">*</span>
            </legend>
            <input
              type="password"
              placeholder="*******"
              className="w-full bg-transparent outline-none text-gray-900 py-1"
            />
          </fieldset>
        </div>

        <div className="mt-3 relative">
          <fieldset className="border border-gray-300 rounded-lg px-3 pb-1 focus-within:border-[#6c25ff]">
            <legend className="text-sm text-[#6c25ff] px-1">Company name</legend>
            <input
              type="text"
              placeholder="marryDoe Pvt Ltd"
              className="w-full bg-transparent outline-none text-gray-900 py-1"
            />
          </fieldset>
        </div>

        <div className="mt-4">
        <p className="text-sm font-medium text-gray-700">
            Are you an Agency?<span className="text-red-500">*</span>
        </p>
            <div className="flex items-center gap-4 mt-2">
                <label className="flex items-center space-x-2 text-[#1d2226] leading-[17px]">
                <input
                    type="radio"
                    name="agency"
                    className="accent-[#6c25ff] w-4 h-4 mr-2 cursor-pointer"
                />
                <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2 text-gray-700">
                <input
                    type="radio"
                    name="agency"
                    value='yes'
                    className="accent-[#6c25ff] w-4 h-4 mr-2 cursor-pointer"
                />
                <span>No</span>
                </label>
            </div>
        </div>


        <button
          onClick={() => navigate("/profile")}
          className="mt-25 w-full py-3 bg-[#6c25ff] text-white font-medium rounded-lg hover:bg-[#6c25ff] transition duration-200"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
