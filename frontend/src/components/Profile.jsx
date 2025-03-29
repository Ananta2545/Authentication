import image from "../assets/professionalGirl.jpg";

const Profile = () => {
  return (
    <div className="w-full max-w-[400px] sm:max-w-[450px] mx-auto rounded-lg">
      <div className="p-4 bg-white shadow-md">
        <h2 className="text-lg font-semibold text-gray-900">Account Settings</h2>
      </div>

      <div className="p-6 flex items-start space-x-4">
        <div className="relative w-14 h-14">
          <img
            src={image}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#6C25FF] rounded-full flex items-center justify-center cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-white w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path>
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Marry Doe</h3>
          <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="px-6 pb-6 text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam.
      </p>
      <div className="border-t-2 border-dashed border-gray-300 mt-6"></div>
      <div className="border-t-2 border-dashed border-gray-300 mt-55"></div>

    </div>
  );
};

export default Profile;
