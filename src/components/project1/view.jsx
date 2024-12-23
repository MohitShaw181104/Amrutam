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
      <div className="flex justify-center bg-white gap-10 ">
        <div>
        {/* Left Section */}
        <div className="max-w-xl bg-white shadow-md border border-gray-300 rounded-2xl mb-8">
          {/* About Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between p-2 rounded-t-2xl bg-gradient-to-r from-yelowe">
            <h2 className="text-2xl font-title font-semibold text-gray-800 pl-10">
              A Little About Me
              </h2>
              <div className="pr-6 mt-1">
              <button className="flex items-center px-6 py-1 font-title font-semibold text-demo bg-white border border-demo rounded-lg focus:outline-none">
              Follow
              <span className="ml-2 text-xl font-bold">+</span>
              </button>
              </div>
              </div>
          <div className="pl-4 pr-4">
          <p className="text-md p-2 text-gray-400 mb-3 pl-2 pt-8 font-title font-semibold">
              Hello! I am Dr. Bruce Willis, a Gynaecologist at Sanjivni Hospital, Surat. I love to work with my hospital staff and senior doctors. Completed my graduation in Gynaecologist Medicine from the
              <button className=" text-gray-700 font-title text-semibold pt-4 text-md ">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯  <u>Read More</u></button>
            </p>
            </div>
          </div>
            {/* Languages Spoken */}
  <div className="mb-4 ">
  <div className="flex space-x-2 mt-2 pl-8">
    <span className="text-gray-700 font-medium text-lg pr-2">Language Spoken</span>

      <span className="bg-gray-100 text-lg px-4 py-1 rounded-full font-title font-semibold">English</span>
      <span className="bg-gray-100 text-lg px-4 py-1 rounded-full font-title font-semibold">Hindi</span>
      <span className="bg-gray-100 text-lg px-4 py-1 rounded-full font-title font-semibold">Telugu</span>
    </div>
  </div>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4 pl-8 pb-8 pt-4">
  <a
    href="#"
    className="text-gray-500 hover:text-gray-800"
    aria-label="Facebook"
  >
    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#808184" d="M16-0.035C7.159-0.035-0.035,7.159-0.035,16S7.159,32.035,16,32.035S32.035,24.841,32.035,16 S24.841-0.035,16-0.035z M16,30.965C7.748,30.965,1.035,24.252,1.035,16S7.748,1.035,16,1.035S30.965,7.748,30.965,16 S24.252,30.965,16,30.965z"></path> <path fill="#808184" d="M19.5,7h-2.668C13.652,7,13,8.737,13,11.345L13.002,13H11.5c-0.276,0-0.5,0.224-0.5,0.5v3 c0,0.276,0.224,0.5,0.5,0.5H13v7.5c0,0.276,0.224,0.5,0.5,0.5h3.058c0.276,0,0.5-0.224,0.5-0.5L17.06,17h2.44 c0.276,0,0.5-0.224,0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5h-2.441l0.003-1.396c0-0.673,0-0.673,0.629-0.674L19.48,11 c0.127,0.004,0.268-0.045,0.366-0.139S20,10.636,20,10.5v-3C20,7.224,19.776,7,19.5,7z M19,9.98l-1.289-0.05 c-1.521,0-1.648,0.827-1.648,1.672l-0.004,1.896c0,0.133,0.052,0.26,0.146,0.354C16.298,13.947,16.425,14,16.558,14H19v2h-2.44 c-0.276,0-0.5,0.224-0.5,0.5L16.058,24H14v-7.5c0-0.276-0.224-0.5-0.5-0.5H12v-2h1.503c0.133,0,0.26-0.053,0.354-0.147 c0.094-0.094,0.146-0.221,0.146-0.354L14,11.344C14,9.079,14.424,8,16.832,8H19V9.98z"></path> </g> </g></svg>
    </svg>
  </a>
  <a
    href="#"
    className="text-gray-500 hover:text-gray-800"
    aria-label="Instagram"
  >
    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <svg fill="#000000" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z"></path> </g></svg>
    </svg>
  </a>
  <a
    href="#"
    className="text-gray-500 hover:text-gray-800"
    aria-label="Youtube"
  >
    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#808184" d="M16-0.035C7.158-0.035-0.034,7.159-0.034,16S7.158,32.035,16,32.035S32.034,24.841,32.034,16 S24.842-0.035,16-0.035z M16,30.965C7.748,30.965,1.034,24.252,1.034,16S7.748,1.035,16,1.035S30.966,7.748,30.966,16 S24.252,30.965,16,30.965z"></path> <path fill="#808184" d="M19.525,15.616c-0.533-0.278-1.105-0.594-1.678-0.909c-1.194-0.658-2.323-1.28-3.163-1.614 c-0.153-0.062-0.327-0.042-0.465,0.05C14.082,13.237,14,13.392,14,13.558v4.987c0,0.171,0.088,0.331,0.232,0.422 c0.082,0.052,0.175,0.078,0.268,0.078c0.073,0,0.146-0.016,0.215-0.048c1.006-0.478,2.11-1.065,3.179-1.633 c0.545-0.291,1.093-0.582,1.631-0.86c0.165-0.086,0.27-0.256,0.27-0.443S19.69,15.703,19.525,15.616z M17.424,16.48 c-0.809,0.43-1.638,0.871-2.424,1.264v-3.417c0.699,0.337,1.543,0.802,2.365,1.255c0.288,0.159,0.576,0.317,0.86,0.472 C17.959,16.196,17.69,16.338,17.424,16.48z"></path> <path fill="#808184" d="M22.304,10.626c-0.812-0.293-5-0.316-6.264-0.316c-2.504,0-4.67,0.072-5.795,0.193 c-0.639,0.067-1.198,0.365-1.617,0.859c-1.176,1.383-0.925,7.562-0.412,8.97c0.265,0.725,0.769,1.214,1.498,1.454 c0.984,0.324,5.328,0.34,6.189,0.34c1.759,0,5.934-0.045,6.717-0.456c0.486-0.253,0.842-0.614,1.058-1.075 c0.728-1.561,0.68-7.022,0.087-8.56C23.503,11.355,23.011,10.881,22.304,10.626z M22.771,20.172 c-0.121,0.26-0.322,0.459-0.612,0.61c-0.353,0.167-2.664,0.344-6.256,0.344c-3.279,0-5.438-0.146-5.877-0.291 c-0.436-0.143-0.713-0.412-0.871-0.846c-0.502-1.378-0.551-7.057,0.235-7.98c0.253-0.299,0.576-0.472,0.961-0.512 c1.075-0.116,3.255-0.188,5.688-0.188c3.386,0,5.579,0.132,5.924,0.257c0.435,0.157,0.71,0.42,0.867,0.829 C23.331,13.692,23.378,18.872,22.771,20.172z"></path> </g> </g></svg>
    </svg>
  </a>
  <a
    href="#"
    className="text-gray-500 hover:text-gray-800"
    aria-label="Twitter"
  >
    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#808184" d="M16-0.035C7.159-0.035-0.035,7.159-0.035,16S7.159,32.035,16,32.035S32.035,24.841,32.035,16 S24.841-0.035,16-0.035z M16,30.965C7.748,30.965,1.035,24.252,1.035,16S7.748,1.035,16,1.035S30.965,7.748,30.965,16 S24.252,30.965,16,30.965z"></path> <path fill="#808184" d="M24.797,11.082c-0.027,0.012-0.055,0.024-0.083,0.036c0.131-0.228,0.238-0.471,0.319-0.725 c0.063-0.198-0.002-0.414-0.165-0.543c-0.163-0.129-0.388-0.145-0.566-0.039c-0.522,0.31-1.083,0.538-1.673,0.681 c-0.693-0.632-1.608-0.99-2.553-0.99c-2.086,0-3.783,1.696-3.783,3.781c0,0.066,0.001,0.131,0.005,0.197 c-2.259-0.271-4.346-1.415-5.797-3.195c-0.104-0.127-0.262-0.201-0.427-0.183c-0.164,0.013-0.31,0.105-0.393,0.247 c-0.334,0.574-0.512,1.232-0.512,1.902c0,0.667,0.15,1.29,0.432,1.832c-0.147-0.03-0.295,0.025-0.412,0.116 C9.071,14.292,9,14.458,9,14.611c0,1.157,0.547,2.218,1.422,2.921c-0.007,0.007-0.014,0.014-0.021,0.022 c-0.117,0.132-0.155,0.316-0.102,0.484c0.356,1.11,1.194,1.968,2.242,2.373c-1.063,0.542-2.3,0.752-3.487,0.616 C8.83,21,8.605,21.137,8.526,21.356c-0.078,0.219,0.005,0.463,0.202,0.589c1.587,1.017,3.42,1.554,5.302,1.554 c6.159,0,9.839-5.002,9.839-9.839c0-0.06,0-0.12-0.001-0.18c0.601-0.466,1.12-1.025,1.547-1.664c0.124-0.185,0.11-0.429-0.033-0.6 C25.239,11.046,25.001,10.993,24.797,11.082z M23.068,12.829c-0.138,0.099-0.216,0.261-0.208,0.431 c0.006,0.133,0.009,0.267,0.009,0.4c0,4.345-3.306,8.839-8.839,8.839c-1.038,0-2.059-0.182-3.023-0.534 c1.145-0.198,2.218-0.674,3.152-1.406c0.167-0.13,0.233-0.352,0.166-0.552c-0.067-0.201-0.253-0.337-0.465-0.341 c-0.928-0.017-1.766-0.488-2.266-1.227c0.246-0.015,0.482-0.056,0.742-0.126c0.224-0.061,0.376-0.268,0.368-0.5 c-0.008-0.231-0.174-0.427-0.401-0.473c-1.079-0.217-1.94-1.047-2.212-2.076c0.045,0.016,0.086,0.03,0.125,0.044 c0.251,0.09,0.45,0.162,0.828,0.173c0.231,0.001,0.423-0.135,0.492-0.348s-0.013-0.444-0.198-0.568 c-0.741-0.495-1.166-1.339-1.166-2.316c0-0.247,0.033-0.491,0.096-0.726c1.729,1.795,4.088,2.879,6.588,3.005 c0.155,0.017,0.308-0.059,0.408-0.179c0.101-0.12,0.139-0.281,0.104-0.434c-0.048-0.207-0.072-0.42-0.072-0.635 c0-1.534,1.249-2.781,2.783-2.781c0.767,0,1.507,0.32,2.031,0.879c0.118,0.125,0.292,0.181,0.462,0.148 c0.221-0.044,0.439-0.098,0.654-0.162c-0.114,0.096-0.237,0.184-0.366,0.262c-0.203,0.121-0.292,0.367-0.216,0.59 c0.077,0.223,0.303,0.363,0.532,0.335c0.101-0.012,0.202-0.026,0.302-0.042C23.345,12.622,23.209,12.728,23.068,12.829z"></path> </g> </g></svg>    </svg>
  </a>
</div>


        </div>

          {/* Specialization Section */}
          <div className="flex gap-6 max-w-xl mx-auto bg-white border border-gray-300 shadow-md rounded-2xl mb-8">
          <div className="mb-6">
          <div className="flex items-center justify-between p-3 rounded-t-2xl bg-gradient-to-r from-yelowe">
          <h2 className="text-2xl font-title font-semibold text-gray-800 pl-10">I Specialize In</h2>
          </div>
          <div className="grid grid-cols-5 gap-4 pl-8">
  {/* Women's Health */}
  <div className="flex flex-col items-center pt-6 bg-white ">
    <img
      src="src\assets\wh.svg"
      alt="Women's Health"
      className="w-24 h-24"
    />
    <span className="text-black font-medium font-title whitespace-nowrap">Women's Health</span>
  </div>

  {/* Skin Care */}
  <div className="flex flex-col items-center pt-6 bg-white ">
    <img
      src="src\assets\sc.svg"
      alt="Skin Care"
      className="w-24 h-24"
    />
    <span className="text-black font-medium font-title whitespace-nowrap">Skin Care</span>
  </div>

  {/* Immunity */}
  <div className="flex flex-col items-center pt-6 bg-white ">
    <img
      src="src\assets\imm.svg"
      alt="Immunity"
      className="w-24 h-24"
    />
    <span className="text-black font-medium font-title whitespace-nowrap0">Immunity</span>
  </div>

  {/* Hair Care */}
  <div className="flex flex-col items-center pt-6 bg-white">
    <img
      src="src\assets\hc.svg"
      alt="Hair Care"
      className="w-24 h-24"
    />
    <span className="text-black font-medium font-title whitespace-nowrap">Hair Care</span>
  </div>
</div>

          </div>
          </div>

          {/* Concerns Section */}
          <div className="flex gap-6 max-w-xl  bg-white border border-gray-300 shadow-md rounded-2xl mb-8">
          <div className="mb-6 ">
          <div className="flex items-center justify-between p-3 rounded-t-2xl bg-gradient-to-r from-yelowe">
          <h2 className="text-2xl font-title font-semibold text-gray-800 pl-10">The Concerns I Treat</h2>
          </div>
          <section className="px-8 py-2 pt-6 bg-white">
          <div className="flex flex-wrap justify-start gap-3">
          {/* Filter Tag */}
          <div className="flex items-center px-4 py-2 text-md text-demo font-bold font-title bg-gray-100 border rounded-full shadow-sm">
          Skin Treatment
              </div>
              <div className="flex items-center px-4 py-2 text-md text-demo font-bold font-title bg-gray-100 border rounded-full shadow-sm">
                Pregnancy
              </div>
              <div className="flex items-center px-4 py-2 text-md text-demo font-bold font-title bg-gray-100 border rounded-full shadow-sm">
                Period Doubts
              </div>
              <div className="flex items-center px-4 py-2 text-md text-demo font-bold font-title bg-gray-100 border rounded-full shadow-sm">
                Endometriosis
              </div>
              <div className="flex items-center px-4 py-2 text-md text-demo font-bold font-title bg-gray-100 border rounded-full shadow-sm">
                Pelvic Pain
              </div>
              <div className="flex items-center px-4 py-2 text-md text-demo font-bold font-title bg-gray-100 border rounded-full shadow-sm">
                Ovarian Cysts
              </div>
              <div className="flex items-center px-4 py-2 text-md text-demo font-bold font-title bg-gray-100 border rounded-full shadow-sm">
                + 5 More
              </div>
            </div>
          </section>
          </div>
          </div>

          {/* Work Experience */}
          <div className=" max-w-xl mx-auto bg-white shadow-md border border-gray-300 rounded-2xl mb-8 pb-6">
          <div className="flex items-center justify-between p-3 rounded-t-2xl bg-gradient-to-r from-yelowe">
          <h2 className="text-2xl font-title font-semibold text-gray-800 pl-10">My Work Experience</h2>
          </div>
  <p className="text-lg font-title font-bold text-demo pt-6 pl-6">
    I HAVE BEEN IN PRACTICE FOR : <strong className="text-demo">7+ YEARS</strong>
  </p>
  <hr className="my-4 ml-6 mr-36 border-gray-300" />
  <ul className="space-y-4 pl-8  ">
    <li className="flex items-center justify-between pr-24">
      <div className="flex items-center">
        <img
          src="src\assets\hos.svg" 
          alt="Icon"
          className="w-12 h-12 mr-5"
        />
        <div>
          <span className="font-medium block">Midtown Medical Clinic</span>
          <span className="text-gray-400 text-sm font-semibold">Senior doctor</span>
        </div>
      </div>
      <div className="text-md pb-6 text-gray-500">2016-PRESENT</div>
    </li>
    <li className="flex items-center justify-between pr-28">
      <div className="flex items-center">
        <img
          src="src\assets\hos.svg" 
          alt="Icon"
          className="w-12 h-12 mr-5"
        />
        <div>
          <span className="font-medium block">Midtown Medical Clinic</span>
          <span className="text-gray-400 text-sm font-semibold">Senior doctor</span>
        </div>
      </div>
      <div className="text-md pb-6 text-gray-500">2010-2015</div>
    </li>
  </ul>
          </div>
          {/* Featured Review */}
          <div className="max-w-xl mx-auto bg-white shadow-md border border-gray-300 rounded-2xl mb-24 pb-6">
          <div className="flex items-center justify-between p-3 rounded-t-2xl bg-gradient-to-r from-yelowe">
          <h2 className="text-2xl font-title font-semibold text-gray-800 pl-10">Featured Reviews (102)</h2>
          </div>
        <div className="space-y-4">
        {/* Review 1 */}
        <div className="flex flex-col bg-gray-50 p-8 border m-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
        <div className="flex items-center">
          <img
            src="src\assets\rev.svg" 
            alt="User Avatar"
            className="w-14 h-14 rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-xl font-title">Alicent Hightower</h3>
            <p className="text-gray-400 text-sm font-semibold">Consulted for Skin care</p>
          </div>
        </div>
        <p className="text-md text-gray-400">20 January 2023</p>
        </div>
        <div className="flex items-center mt-2">
        <span className="ml-1">⭐⭐⭐⭐⭐</span>
        </div>
        <p className="text-sm font-medium mt-2 text-gray-700">
        Might be bit early to confirm but yes I can see noticeable difference in
        my hairfall. Will write again after using it for longer periods.
        </p>
        </div>
          {/* Review 2 */}
        <div className="flex flex-col bg-gray-50 p-8 m-6 border rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
        <div className="flex items-center">
          <img
            src="src\assets\rev.svg" 
            alt="User Avatar"
            className="w-14 h-14 rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-xl font-title">Alicent Hightower</h3>
            <p className="text-gray-400 text-sm font-semibold">Consulted for Pregnancy</p>
          </div>
          </div>
        <p className="text-md text-gray-400">20 January 2023</p>
          </div>
          <div className="flex items-center mt-2">
        <span className="ml-1">⭐⭐⭐⭐⭐</span>
        </div>
          <p className="text-sm font-medium mt-2 text-gray-700">
        Might be bit early to confirm but yes I can see noticeable difference in
        my hairfall. Will write again after using it for longer periods.
        </p>
        </div>
        </div>
        </div>
        </div>

        {/* Right Section */}
        <div className="bg-white w-full max-w-xl ">
        {/* Appointment Fee */}
        <div className="border border-gray-300 shadow-md p-6 rounded-3xl">
  <div className="flex justify-between items-center p-6 py-4 border rounded-2xl border-gray-300">
  <h2 className="text-lg font-semibold font-title">Appointment Fee</h2>
  <p className="text-xl font-semibold text-demo">₹699.00</p>
</div>


  {/* Mode of Session */}
  <div className="mt-10">
  <div className="flex items-center mb-10">
    <h3 className="text-xl font-bold font-title mx-2 whitespace-nowrap">Select your mode of session</h3>
    <div className="flex-1 h-px bg-gray-300"></div>
  </div>
  <div className="flex space-x-6">
    {/* In-Clinic Option */}
    <button className="flex-1 py-4 font-title  border border-gray-300 rounded-lg text-center">
      <p className="text-md font-bold text-gray-700">In-Clinic</p>
      <p className="text-sm font-semibold text-gray-500">45 Mins</p>
    </button>

    {/* Video Option (Selected) */}
    <button className="flex-1 py-4 font-title  border border-demo bg-gren rounded-lg text-center">
    <div className="flex items-center pl-14">
  <p className="text-md font-bold text-demo">Video</p>
  <img
    src="src\assets\tick.svg" 
    alt="Tick Icon"
    className="w-4 h-4 ml-2"
    />
    </div>

      <p className="text-sm font-semibold text-gray-500">45 Mins</p>
    </button>

    {/* Chat Option */}
    <button className="flex-1 py-4 font-title  border border-gray-300 rounded-lg text-center">
      <p className="text-md font-bold text-gray-700">Chat</p>
      <p className="text-sm font-semibold text-gray-500">10 Mins</p>
    </button>
  </div>
</div>


  {/* Time Slot */}
  <div className="mt-10">
  <div className="flex items-center mb-8 pr-2">
  <h3 className="text-xl font-bold font-title mx-2 whitespace-nowrap">Pick a Time Slot</h3>
  <div className="flex-1 h-px bg-gray-300"></div>
  <div className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-400 ml-2">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-black"
    >
      <path
        d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </div>
</div>

<div className="flex items-center justify-between border border-gray-300 rounded-2xl px-4 py-6 max-w-xl">
  {/* Left Arrow */}
  <button className="text-gray-600 hover:text-black">
  <svg
    fill="#808080"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
    xmlSpace="preserve"
    className="w-8 h-8"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <path
          d="M44.942,50.412l14.037-15.487c0.742-0.818,0.68-2.083-0.139-2.824c-0.817-0.742-2.083-0.679-2.824,0.139L40.784,49.044 c-0.409,0.451-0.565,1.038-0.493,1.598c-0.016,0.564,0.196,1.131,0.647,1.539L57.74,67.412c0.383,0.348,0.864,0.519,1.344,0.519 c0.545,0,1.087-0.222,1.482-0.657c0.741-0.818,0.68-2.083-0.139-2.824L44.942,50.412z"
        ></path>
        <path
          d="M84.133,49.756c0-18.448-15.01-33.457-33.458-33.457S17.218,31.308,17.218,49.756c0,18.449,15.009,33.458,33.457,33.458 S84.133,68.205,84.133,49.756z M50.675,79.214c-16.243,0-29.457-13.215-29.457-29.458c0-16.242,13.214-29.457,29.457-29.457 c16.243,0,29.458,13.215,29.458,29.457C80.133,65.999,66.918,79.214,50.675,79.214z"
        ></path>
      </g>
    </g>
  </svg>
</button>


  {/* Slot Buttons */}
  <div className="flex justify-center items-center gap-x-2">
    <button className="py-4 px-6 border border-demo rounded-2xl bg-gren text-demo font-title font-bold text-md hover:shadow-md whitespace-nowrap">
      Mon, 10 Oct
      <div className="text-md font-semibold text-gray-500">10 slots</div>
    </button>
    <button className="py-4 px-6 border border-gray-300 rounded-2xl bg-white text-black text-md font-semibold hover:shadow-md whitespace-nowrap">
      Tue, 11 Oct
      <div className="text-md font-semibold text-red-600">02 slots</div>
    </button>
    <button className="py-4 px-6 border border-gray-300 rounded-2xl bg-white text-black text-md font-semibold hover:shadow-md whitespace-nowrap">
      Wed, 12 Oct
      <div className="text-md font-semibold text-yellow-500">05 slots</div>
    </button>
  </div>

  {/* Right Arrow */}
  <button className="text-gray-600 hover:text-black ">
  <svg
    fill="#808080"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    enable-background="new 0 0 100 100"
    xml:space="preserve"
    transform="rotate(180)"
    className="w-8 h-8  "
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <path d="M44.942,50.412l14.037-15.487c0.742-0.818,0.68-2.083-0.139-2.824c-0.817-0.742-2.083-0.679-2.824,0.139L40.784,49.044 c-0.409,0.451-0.565,1.038-0.493,1.598c-0.016,0.564,0.196,1.131,0.647,1.539L57.74,67.412c0.383,0.348,0.864,0.519,1.344,0.519 c0.545,0,1.087-0.222,1.482-0.657c0.741-0.818,0.68-2.083-0.139-2.824L44.942,50.412z"></path>
        <path d="M84.133,49.756c0-18.448-15.01-33.457-33.458-33.457S17.218,31.308,17.218,49.756c0,18.449,15.009,33.458,33.457,33.458 S84.133,68.205,84.133,49.756z M50.675,79.214c-16.243,0-29.457-13.215-29.457-29.458c0-16.242,13.214-29.457,29.457-29.457 c16.243,0,29.458,13.215,29.458,29.457C80.133,65.999,66.918,79.214,50.675,79.214z"></path>
      </g>
    </g>
  </svg>
</button>

</div>


    <div className="mt-4">
      {/* Morning Slots */}
      <h4 className="text-lg font-bold pl-6 pt-4 font-title ">Morning</h4>
      <div className="grid grid-cols-4 gap-3 mt-3">
        {["09:00 AM", "09:30 AM", "10:00 AM", "10:15 AM", "10:45 AM", "11:00 AM"].map((time, index) => (
          <button
            key={time}
            className={`py-5 px-3 border border-gray-300 rounded-3xl text-md ${
              index === 5 ? "bg-demo text-white" : ""
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      {/* Evening Slots */}
      <h4 className="text-lg font-bold pl-6 pt-4 font-title ">Evening</h4>
      <div className="grid grid-cols-4 gap-3 mt-3">
        {["04:00 PM", "04:15 PM", "04:30 PM", "04:45 PM", "05:15 PM"].map((time, index) => (
          <button
            key={time}
            className={`py-5 px-3 border border-gray-300 rounded-3xl text-md ${
              index === 5 ? "bg-demo text-white" : ""
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Submit Button */}
  <div className="flex justify-center items-center">
  <button className=" mt-6 py-4 px-32 bg-demo text-white font-semibold text-xl font-title rounded-lg">
    Make An Appointment
    </button>
    </div>
        </div>
        </div>
        </div>
      </div>
  );
};

export default View;
