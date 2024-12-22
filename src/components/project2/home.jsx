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

      {/* Extra Section */}
      <div className="bg-yelow">
        <div className="max-w-screen-xl mx-auto grid grid-cols-4 md:grid-cols-4  text-left">
          <div className="flex flex-col-2 items-center border-x-2 border-yellow-100 py-2">
            <img src="src\assets\chatic.svg" alt="Consultations Icon" className="w-26 h-26 mt-3" />
            <h3 className="text-md text-demo font-title font-bold text-wrap ">Convenient Online & <br /> In-Clinic Consultations</h3>
          </div>
          <div className="flex flex-col-2 items-center border-x-2 border-yellow-100 py-2">
            <img src="src\assets\secic.svg" alt="Safssse Treatment Icon" className="w-26 h-26 mt-3" />
            <h3 className="text-md text-demo font-title font-bold ">Safe And Effective Treatment</h3>
          </div>
          <div className="flex flex-col-2 items-center border-x-2 border-yellow-100 py-2">
            <img src="src\assets\docic.svg" alt="Practitioners Icon" className="w-26 h-26 mt-3" />
            <h3 className="text-md text-demo font-title font-bold">Experienced Ayurvedic Practitioners</h3>
          </div>
          <div className="flex flex-col-2 items-center border-x-2 border-yellow-100 py-2">
            <img src="src\assets\planic.svg" alt="Treatment Plans Icon" className="w-26 h-26 mt-3" />
            <h3 className="text-md text-demo font-title font-bold ">Personalized Treatment Plans & Guidance</h3>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="bg-white py-16 px-8">
      <h2 className="text-5xl text-center font-bold text-demo mb-4 underline decoration-gre">Discover Ayurveda's Magic With Us</h2>
      <h1 className="text-center text-xl text-gray-500 max-w-4xl mx-auto mb-12 pt-4">
        Ayurvedic treatment aims to balance your body and mind, bringing harmony <br /> and vitality. It's like a journey to better health using ancient wisdom, <br /> a totally effective approach for a better life.
      </h1>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
  {/* Central Image */}
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="relative">
      <img
        src="src/assets/yoga.svg"
        alt="Meditation Image"
        className="w-[200px] h-[200px] relative z-10"
      />
    </div>
  </div>

  {/* Top Row: Cards 1, 2, 3 */}
  <div className='flex-rows-3'>
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
      <img src="src/assets/pw.svg" alt="Personalized Wellness" className="w-24 h-24" />
    </div>
    <h3 className="text-xl font-bold mb-2">Personalized Wellness</h3>
    <p className="text-gray-700">
      Get treatments tailored just for you based on your individual doshas (body type).
    </p>
  </div>

  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
      <img src="src/assets/fp.svg" alt="Focus on Prevention" className="w-24 h-24" />
    </div>
    <h3 className="text-xl font-bold mb-2">Focus on Prevention</h3>
    <p className="text-gray-700">Stop problems even before they start.</p>
  </div>

  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
      <img src="src/assets/hh.svg" alt="Holistic Healing" className="w-24 h-24" />
    </div>
    <h3 className="text-xl font-bold mb-2">Holistic Healing</h3>
    <p className="text-gray-700">Fix the root problem for long-lasting health.</p>
  </div>
  </div>

  {/* Bottom Row: Cards 4, 5, 6 */}
  <div className="flex-rows-3">
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
      <img src="src/assets/nr.svg" alt="Natural Remedies" className="w-24 h-24" />
    </div>
    <h3 className="text-xl font-bold mb-2">Natural Remedies</h3>
    <p className="text-gray-700">Using herbs and natural therapies for healing.</p>
  </div>

  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
      <img src="src/assets/mc.svg" alt="Mind-Body Connection" className="w-24 h-24" />
    </div>
    <h3 className="text-xl font-bold mb-2">Mind-Body Connection</h3>
    <p className="text-gray-700">Keep your mind and body in sync for a happy life.</p>
  </div>

  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
      <img src="src/assets/bi.svg" alt="Boosting Immunity" className="w-24 h-24" />
    </div>
    <h3 className="text-xl font-bold mb-2">Boosting Immunity</h3>
    <p className="text-gray-700">Stay strong and healthy for life, not just for today.</p>
  </div>
  </div>
</div>

  </div>
</div>
  );
};

export default Home;
