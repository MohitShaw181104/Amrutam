import React from 'react';

const Home = () => {
  const doctors = [
    {
      name: 'Dr. Vaishali Sharma',
      specialization: 'Skin Specialist',
      experience: '25  years of Experience',
      rating: '4.5',
      imgSrc: 'src/assets/doctorimg.svg',
      prof:'Ayurveda Practitioner (BAMS, MD)',
    },
    {
      name: 'Dr. Vaishali Sharma',
      specialization: 'Skin Specialist',
      experience: '25 years of Experience',
      rating: '4.5',
      imgSrc: 'src/assets/doctorimg.svg',
      prof:'Ayurveda Practitioner (BAMS, MD)',
    },
    {
      name: 'Dr. Vaishali Sharma',
      specialization: 'Skin Specialist',
      experience: '25 years of Experience',
      rating: '4.5',
      imgSrc: 'src/assets/doctorimg.svg',
      prof:'Ayurveda Practitioner (BAMS, MD)',
    },
  ];
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
        className="max-w-full max-h-full relative z-10"
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
  </div>

  {/* Unique Ayurveda Section */}
<div className="bg-yelow py-16 px-8">
  <h2 className="text-5xl text-center font-bold text-demo mb-14 underline decoration-gre">
    What sets Ayurvedic consultations apart?
  </h2>
  <div className="max-w-screen-xl mx-auto">
    {/* Row 1 */}
<div className="flex flex-wrap justify-between mb-4 gap-1">
  <div
    className="bg-gray-100 p-10 rounded-3xl border-t-4 shadow-lg border-t-demo text-center"
    style={{ maxWidth: "40%" }}
  >
    <h3 className="text-3xl text-demo font-hindi font-medium mb-6 mt-4">
      स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।
    </h3>
    <p className="text-demo font-title font-semibold">
      [Meaning: The Goal of Ayurveda is to maintain the health of a healthy
      person and to cure the disease of a diseased person.]
    </p>
  </div>
  <div
  className=" rounded-lg text-center"
  style={{ maxWidth: "35%" }}
>
  <img
    src="src\\assets\\hairs.svg"
    alt="Ayurvedic treatments"
    className="mx-auto  rounded"
    style={{ width: "100%", height: "100%" }}
  />
</div>

<div
    className="bg-gray-100 p-10 rounded-3xl border-t-4 shadow-lg border-t-demo text-left"
    style={{ maxWidth: "26%" }}
  >
    <h3 className="text-2xl text-demo font-title font-bold mb-6 mt-4">Precise Diagnosis</h3>
    <p className="text-gray-600 text-lg">
      Ayurveda's core principles revolve around Vata, Pitta, and Kapha
      doshas, guiding you with precise diagnosis and treatment.
    </p>
  </div>
</div>


    {/* Row 2 */}
    <div className="flex flex-wrap justify-between items-center">
    <div
    className="bg-gray-100 p-8 rounded-lg shadow-lg text-left border-t-4 border-t-demo"
    style={{ maxWidth: "24%" }}
  >
    <h3 className="text-2xl text-demo font-title font-bold mb-6 mt-4">Zero Side-Effects</h3>
    <p className="text-gray-600 text-lg">
      Ayurvedic treatments are devoid of chemicals and are based completely
      on natural herbs.
    </p>
  </div>
  <div
  className=" rounded-lg text-center"
  style={{ maxWidth: "26%" }}
>
  <img
    src="src\\assets\\prod.svg"
    alt="Ayurvedic treatments"
    className="mx-auto  rounded"
    style={{ width: "100%", height: "100%" }}
  />
</div>
  <div
    className="bg-gray-100 p-8 rounded-lg shadow-lg text-center border-t-4 border-t-demo"
    style={{ maxWidth: "24%" }}
  >
    <h3 className="text-2xl text-demo font-title font-bold mb-6 mt-4">Individual Treatment</h3>
    <p className="text-gray-600 text-lg text-left">
    All Treatments are personalized based on a person's unique constitution and health concerns.
    </p>
  </div>
  <div
  className=" rounded-lg text-center"
  style={{ maxWidth: "26%" }}
  >
  <img
    src="src\\assets\\mod.svg"
    alt="Ayurvedic treatments"
    className="mx-auto  rounded"
    style={{ width: "100%", height: "100%" }}
  />
  </div>
    </div>
  </div>
  </div>


    {/* Harmony Section */}
    <div
  className="bg-cover bg-center text-black text-center py-16 mb-12 flex justify-center items-center"
  style={{
    backgroundImage: `url('/src/assets/harmony.svg')`,
    height: "620px",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "overlay",
  }}
>
  <div>
    <h2 className="text-6xl font-semibold mb-6 text-yelow font-sans">
      <div>Ready to restore harmony in</div>
      <div className="mt-6">your mind, body, and spirit?</div>
    </h2>
    <button className="bg-demo font-semibold text-white text-2xl mt-8 font-title px-8 py-5 rounded-2xl hover:bg-green-700">
      Book a consultation
    </button>
  </div>
</div>

<div className="h-screen">
  <div className="bg-white py-16 px-8">
    <h2 className="text-5xl text-center font-bold text-demo mb-4 underline decoration-gre">
      Our Ayurvedic Approach
    </h2>
    <h1 className="text-center text-xl text-gray-700 max-w-4xl mx-auto mb-20 pt-4">
      At Amrutam we follow a unique and personalized approach to healing. Our expert <br />
      practitioners begin each treatment process by conducting a thorough analysis of the <br />
      patient’s body type, medical history, and current health conditions.
    </h1>

    <div className="flex flex-wrap justify-center gap-6 items-stretch">
      {[
        { number: "1", title: "Make Appointment", text: "You must make an appointment in advance, to choose the service and date." },
        { number: "2", title: "Consultations", text: "The next stage involves a thorough consultation with an Ayurveda practitioner." },
        { number: "3", title: "Treatment Planning", text: "The Ayurvedic practitioner creates a personalized treatment plan for you." },
        { number: "4", title: "Maintenance", text: "These visits allow for assessment of progress, adjustments to the treatment." }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-yelow p-8 rounded-3xl border-t-4 shadow-lg border-t-demo text-center flex flex-col"
          style={{ maxWidth: "20%", minHeight: "300px" }}
        >
          <div className="flex items-center mb-6 pl-14">
            <div className="flex items-center justify-center border-2 border-demo w-24 h-24 bg-demo bg-opacity-65 rounded-full text-white text-5xl font-bold">
              {item.number}
            </div>
          </div>
          <h3 className="text-2xl text-demo font-bold mb-4 flex justify-center items-center">{item.title}</h3>
          <p className="text-gray-600 text-lg">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</div>

{/* New Section: Customer Stories */}
<div className="bg-yelow h-screen py-16 px-8">
    <h2 className="text-5xl text-center font-bold text-demo mb-14 underline decoration-gre">
      Stories from our valued customers!
    </h2>
    <div className="flex justify-center gap-12 p-10">
        {[
            { type: "Skin", name: "Sophie Moore", location: "Chennai", date: "17/02/24", review: "One of a kind service", bgColor: "#e8e6fc" },
            { type: "Hair", name: "Sophie Moore", location: "Mumbai", date: "17/02/24", review: "One of a kind service", bgColor: "#ecfbea" },
            { type: "Hair", name: "Sophie Moore", location: "Chennai", date: "17/02/24", review: "One of a kind service", bgColor: "#ecfbea" }
        ].map((item, index) => (
            <div
                key={index}
                className="bg-white rounded-2xl shadow-2xl border border-gray-300"
                style={{ width: "400px", height: "360px" }}
            >
                {/* Top Banner */}
                <div
                    className="text-lg font-bold font-title text-gray-900 py-3 px-5 rounded-t-2xl"
                    style={{ backgroundColor: item.bgColor }}
                >
                    Consulted for {item.type}
                </div>
                {/* Profile and Location */}
                <div className="p-6">
                    <div className="flex items-center mb-2">
                        <div className="w-14 h-14 bg-gray-600 rounded-full mr-4"></div>
                        <div>
                            <div className="text-lg font-title text-gray-700 font-semibold">{item.name}</div>
                            <div className="text-md font-title text-gray-500">{item.location}</div>
                        </div>
                        <div className="text-md font-title text-gray-700 pl-10 pb-4">{item.date}</div>
                    </div>
                    {/* Star Rating */}
                    <div className="text-yellow-500 text-2xl">★★★★★</div>
                    {/* Review */}
                    <div className="text-2xl font-semibold mb-2">"{item.review}"</div>
                    {/* Description */}
                    <p className="text-gray-600 text-medium text-lg leading-relaxed">
                        Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit.
                    </p>
                </div>
            </div>
        ))}
    </div>
    {/* Dots Indicator */}
    <div className="flex justify-center mt-6">
        {[0, 1, 2].map((dotIndex) => (
            <div
                key={dotIndex}
                className={`w-3 h-3 rounded-full mx-4 ${dotIndex === 0 ? "bg-demo" : "bg-gray-400"}`}
            ></div>
        ))}
    </div>
</div>


      {/*Ayurvedic Experts */}
      <div className="bg-white h-screen py-16 px-8 relative">
  <h2 className="text-5xl text-center font-bold text-demo mb-14 underline decoration-gre">
    Meet Our Ayurveda Experts
  </h2>
  <section className="px-60 py-6 bg-white relative">
    {/* Left Arrow */}
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
      <button
        className="pl-20 pb-40 rounded-full text-white transition duration-300"
        onClick={() => console.log('Navigate left')}
      >
        <svg
          fill="#BCBCBC"
          height="70px"
          width="70px"
          opacity="1"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 490.4 490.4"
          xml:space="preserve"
        >
          <g>
            <g>
              <path d="M245.2,490.4c135.2,0,245.2-110,245.2-245.2S380.4,0,245.2,0S0,110,0,245.2C0,380.4,110,490.4,245.2,490.4z M245.2,24.5 c121.7,0,220.7,99,220.7,220.7s-99,220.7-220.7,220.7s-220.7-99-220.7-220.7S123.5,24.5,245.2,24.5z"></path>
              <path d="M198.9,322.8c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-48-48h183.4c6.8,0,12.3-5.5,12.3-12.3 s-5.5-12.3-12.3-12.3H168.3l48-48c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-68.9,68.9c-4.8,4.8-4.8,12.5,0,17.3L198.9,322.8z"></path>
            </g>
          </g>
        </svg>
      </button>
    </div>

    {/* Right Arrow */}
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
      <button
        className="pr-20 pb-40 rounded-full text-white transition duration-300"
        onClick={() => console.log('Navigate right')}
      >
        <svg
          fill="#BCBCBC"
          height="70px"
          width="70px"
          opacity="1"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 490.4 490.4"
          xml:space="preserve"
          transform="rotate(180)"
        >
          <g>
            <g>
              <path d="M245.2,490.4c135.2,0,245.2-110,245.2-245.2S380.4,0,245.2,0S0,110,0,245.2C0,380.4,110,490.4,245.2,490.4z M245.2,24.5 c121.7,0,220.7,99,220.7,220.7s-99,220.7-220.7,220.7s-220.7-99-220.7-220.7S123.5,24.5,245.2,24.5z"></path>
              <path d="M198.9,322.8c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-48-48h183.4c6.8,0,12.3-5.5,12.3-12.3 s-5.5-12.3-12.3-12.3H168.3l48-48c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-68.9,68.9c-4.8,4.8-4.8,12.5,0,17.3L198.9,322.8z"></path>
            </g>
          </g>
        </svg>
      </button>
    </div>

    {/* Doctor Cards */}
    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
      {doctors.map((doctor, index) => (
        <div
          className="flex flex-col justify-between px-6 py-12 pb-12 bg-beige rounded-3xl border border-gray-200 shadow-lg text-center bg-yelow relative"
          key={index}
        >
          {/* Doctor Image */}
          <div className="relative w-36 h-36 mx-auto">
            <img
              src={doctor.imgSrc}
              alt={doctor.name}
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute bottom-0 left-10 bg-black text-white px-4 py-1 rounded-2xl text-sm font-medium flex items-center">
              {doctor.rating} <span className="text-yellow-500 ml-1">★</span>
            </div>
          </div>

          {/* Doctor Details */}
      <h3 className="text-lg pt-4 font-bold font-title text-gray-800 pb-2">
          {doctor.name}
        </h3>
        <h3 className="text-sm font-bold font-title text-gray-500 pb-2">
          {doctor.prof}
        </h3>
        <div className='flex justify-center items-left pb-6'>
        <div className='space-y-2 '>
        <div className="flex items-center space-x-2">
        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <svg fill="#3A643B" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M197.769 791.767l60.672-286.853c2.341-11.066-4.733-21.934-15.799-24.275s-21.934 4.733-24.275 15.799l-60.672 286.853c-2.341 11.066 4.733 21.934 15.799 24.275s21.934-4.733 24.275-15.799zm571.063-286.786l61.778 287.068c2.38 11.058 13.273 18.093 24.33 15.713s18.093-13.273 15.713-24.33l-61.778-287.068c-2.38-11.058-13.273-18.093-24.33-15.713s-18.093 13.273-15.713 24.33z"></path><path d="M967.45 386.902L535.9 208.126c-10.609-4.399-30.569-4.442-41.207-.088L57.821 386.901l436.881 178.857c10.624 4.355 30.583 4.313 41.207-.085L967.45 386.901zM551.583 603.516c-20.609 8.533-51.787 8.599-72.409.145L24.437 417.494c-32.587-13.359-32.587-47.847.009-61.188l454.73-186.174c20.641-8.448 51.818-8.382 72.407.156l448.836 185.936c32.466 13.442 32.466 47.913.004 61.354l-448.84 185.938zm288.673 166.569c-98 57.565-209.669 88.356-325.888 88.356-116.363 0-228.162-30.866-326.246-88.564-9.749-5.735-22.301-2.481-28.036 7.268s-2.481 22.301 7.268 28.036c104.336 61.377 223.297 94.22 347.014 94.22 123.564 0 242.386-32.763 346.634-93.998 9.753-5.729 13.015-18.279 7.286-28.032s-18.279-13.015-28.032-7.286z"></path><path d="M983.919 383.052v296.233c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V383.052c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"></path></g></svg>        </svg>
        <p className="text-sm text-gray-600 font-title font-semibold">{doctor.experience}</p>
    </div>
    <div className="flex items-center space-x-2 px-8 pb-4">
        
    <p className="text-sm text-demo font-semibold bg-gre bg-opacity-35 rounded-2xl px-2 py-1 flex items-center">
  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Interface / Link">
          <path id="Vector" d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19816 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071" stroke="#3A643B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
      </g>
    </svg>
  </svg>
  {doctor.specialization}
</p>
    </div>
    </div>
</div>

          {/* Book a Session Button */}
          <div className="absolute bottom-0 left-0 w-full">
            <button className="w-full px-6 py-5 bg-[#3A643B] text-white rounded-b-3xl font-title font-semibold text-lg hover:bg-green-700 transition duration-300">
              Book a session
            </button>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-10">
    {[0, 1, 2].map((dotIndex) => (
        <div
            key={dotIndex}
            className={`w-3 h-3 rounded-full mx-4 ${dotIndex === 0 ? "bg-demo" : "bg-gray-400"}`}
        ></div>
    ))}
</div>
<div className="flex justify-center mt-8 mb-4">
    <button className="px-6 py-3 text-xl border border-green-600 bg-gren font-semibold text-demo rounded-md hover:bg-green-100 flex items-center">
        Find more experts
        <svg
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 mt-1 h-5 w-5"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M10 7L15 12L10 17"
                    stroke="#3A643B"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </g>
        </svg>
    </button>
</div>
</section>
</div>


    <div className='bg-yelow'>

    </div>


</div>




  );
};

export default Home;
