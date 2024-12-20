import React from "react";

const View = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <header className="flex items-center justify-between px-10 py-4 bg-yellow-50">
        <div>
          <img
            src="src/assets/image 45.png"
            alt="Amrutam Logo"
            className="h-10 px-12"
          />
        </div>
        <nav className="space-x-16 px-20">
          <a
            href="#"
            className="font-semibold text-gray-700 text-lg hover:text-green-800"
          >
            Home
          </a>
          <a
            href="#"
            className="text-green-800 hover:text-demo text-lg font-bold"
          >
            Find Doctors
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-green-800 text-lg font-semibold"
          >
            About Us
          </a>
        </nav>
        <div className="space-x-4 pr-20">
          <button className="px-4 py-2 text-demo border border-demo text-lg rounded-lg font-semibold">
            Login
          </button>
          <button className="px-4 py-2 text-white bg-demo rounded-lg text-lg">
            Sign-up
          </button>
        </div>
      </header>

      {/* Profile Section */}
      <div className="max-w-8xl mx-auto bg-white rounded-lg p-16 px-40">
        {/* Background Section */}
        <div className="border border-gray-300 rounded-t-xl">
          <div
            className="relative h-28 w-auto rounded-t-lg"
            style={{
              backgroundImage: "url('src/assets/bgimg.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Profile Info */}
            <div className="absolute top-20 left-6 flex items-center space-x-6 z-10">
              <img
                src="src/assets/doctor2.svg"
                alt="Dr. Bruce Willis"
                className="w-40 h-40 rounded-full border-1 border-white"
              />
              <div className="pt-14">
                <h1 className="text-xl font-semibold font-title flex items-center">
                  Dr. Bruce Willis
                  <span className="ml-2">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.4898 2 2 6.4898 2 12C2 17.5102 6.4898 22 12 22C17.5102 22 22 17.5102 22 12C22 6.4898 17.5102 2 12 2ZM15.5714 10.4694L11.4898 14.551C11.2857 14.6531 11.1837 14.7551 10.9796 14.7551C10.7755 14.7551 10.5714 14.6531 10.4694 14.551L8.42857 12.5102C8.12245 12.2041 8.12245 11.6939 8.42857 11.3878C8.73469 11.0816 9.2449 11.0816 9.55102 11.3878L11.0816 12.9184L14.6531 9.34694C14.9592 9.04082 15.4694 9.04082 15.7755 9.34694C15.8776 9.7551 15.8776 10.1633 15.5714 10.4694Z"
                        fill="#030D45"
                      ></path>
                    </svg>
                  </span>
                </h1>
                <p className="text-demo font-semibold">Gynecologist</p>
                <div className="flex items-center text-yellow-500 mt-1">
                  <span className="font-medium text-gray-700">4.2</span>
                  <span className="ml-1">⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Button Section */}
          <div className="relative flex justify-end items-center px-6 bg-whte h-40 pr-20">
            {/* Stats */}
            <div className="flex space-x-20 pr-20">
              <div className="text-center">
                <p className="text-demo font-semibold">Followers</p>
                <h2 className="text-xl font-bold">850</h2>
              </div>
              <div className="text-center">
                <p className="text-demo font-semibold">Following</p>
                <h2 className="text-xl font-bold">18K</h2>
              </div>
              <div className="text-center">
                <p className="text-demo font-semibold">Posts</p>
                <h2 className="text-xl font-bold">250</h2>
              </div>
            </div>
            {/* Appointment Button */}
            <button className="bg-demo font-semibold text-white text-xl font-title px-8 py-4 rounded-md hover:bg-green-700">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Appointment Booking Section */}
      <div className="flex flex-col md:flex-row p-6 bg-gray-50 gap-6">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6">
          {/* About Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">A Little About Me</h2>
            <p className="text-sm text-gray-700">
              Hello! I am Dr. Bruce Willis, a Gynaecologist at Sanjivni Hospital, Surat. I love to work with my hospital staff and senior doctors. Completed my graduation in Gynaecologist Medicine from the...
              <button className="text-blue-500 text-sm">Read More</button>
            </p>
            <div className="flex mt-3 space-x-3">
              <span className="text-gray-600 font-medium">Language Spoken:</span>
              <span className="text-sm">English, Hindi, Telugu</span>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-gray-500">FB</a>
              <a href="#" className="text-gray-500">IG</a>
              <a href="#" className="text-gray-500">TW</a>
            </div>
          </div>

          {/* Specialization Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">I Specialize In</h2>
            <div className="grid grid-cols-2 gap-3">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded">Women's Health</span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded">Skin Care</span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded">Immunity</span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded">Hair Care</span>
            </div>
          </div>

          {/* Concerns Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">The Concerns I Treat</h2>
            <div className="grid grid-cols-2 gap-3">
              {["Skin Treatment", "Pregnancy", "Period Doubts", "Endometriasis", "Pelvic Pain", "Ovarian Cysts"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xl font-semibold mb-2">My Work Experience</h2>
            <p className="text-sm">
              I have been in practice for: <strong>7+ years</strong>
            </p>
            <ul className="list-disc list-inside mt-3">
              <li>
                <span className="font-medium">Midtown Medical Clinic</span> (2016-PRESENT)
              </li>
              <li>
                <span className="font-medium">Midtown Medical Clinic</span> (2010-2015)
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Appointment Fee</h2>
          <p className="text-lg text-green-700 font-bold">₹699.00</p>

          {/* Mode of Session */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Select your mode of session</h3>
            <div className="flex space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded">In-Clinic</button>
              <button className="px-4 py-2 bg-green-500 text-white rounded">Video</button>
              <button className="px-4 py-2 border border-gray-300 rounded">Chat</button>
            </div>
          </div>

          {/* Time Slot */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Pick a time slot</h3>
            <div className="flex space-x-3">
              {["Mon, 10 Oct", "Tue, 11 Oct", "Wed, 12 Oct"].map((date) => (
                <button key={date} className="px-4 py-2 border border-gray-300 rounded">
                  {date}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <h4 className="text-md font-medium">Morning</h4>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {["09:00 AM", "09:30 AM", "10:00 AM"].map((time) => (
                  <button
                    key={time}
                    className="px-4 py-2 border border-gray-300 rounded"
                  >
                    {time}
                  </button>
                ))}
              </div>

              <h4 className="text-md font-medium mt-4">Evening</h4>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {["04:00 PM", "04:15 PM", "04:30 PM"].map((time) => (
                  <button
                    key={time}
                    className="px-4 py-2 border border-gray-300 rounded"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button className="w-full mt-6 py-2 bg-green-600 text-white font-medium rounded">
            Make An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
