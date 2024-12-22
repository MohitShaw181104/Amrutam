import React from 'react';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <nav className="bg-yelow py-10 "></nav>

      <div className="relative bg-red-800">
        {/* Left Image */}
        <div className="absolute left-0 top-0 h-full w-1/2 ">
          <img 
            src="src/assets/left.svg" 
            alt="Left Image" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="absolute right-0 top-0 h-full w-1/2">
          <img 
            src="src/assets/right.svg" 
            alt="Right Image" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-start pl-28 pt-32 pb-28">
            <div className="bg-brown text-yelow w-full rounded-md ">
              <h1 className="text-3xl font-title text-yelow mb-2 ml-2">
                Namaste, Welcome to Amrutam
              </h1>
              <h2 className="text-5xl text-white font-bold mb-4 mt-6 p-2">
                Step into Holistic Healing with <span className="text-yelow"> <u>Ayurveda</u></span>
              </h2>
              <h2 className="text-5xl text-white font-bold mb-6 ml-2">
                Book Consultation With Certified Experts.
              </h2>
              <div className="text-xl text-yelow font-semibold ml-2">
                Dive into the world of ayurveda and experience personalized health solutions and 
              </div> 
              <div className="text-xl font-semibold mb-6 text-yelow ml-2">
                holistic guidance from trusted Ayurvedic doctors anytime, anywhere.
              </div>
              <div className="pt-6 ml-2">
                <button className="bg-demo font-semibold text-white text-xl font-title px-8 py-5 rounded-2xl hover:bg-green-700">
                  BOOK AN APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay to Darken Background for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black opacity-80"></div>
      </div>

      {/* New Section */}
      <div className="bg-yelow py-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 text-center">
          <div className="flex flex-col items-center">
            <img src="src\assets\chatic.svg" alt="Consultations Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Convenient Online & In-Clinic Consultations</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src="src\assets\secic.svg" alt="Safe Treatment Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe And Effective Treatment</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src="src\assets\docic.svg" alt="Practitioners Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experienced Ayurvedic Practitioners</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src="src\assets\planic.svg" alt="Treatment Plans Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Treatment Plans & Guidance</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
