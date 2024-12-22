import React from 'react';

const Hero = () => {
  const doctors = [
    {
      name: 'Dr. Prerna Narang',
      specialization: 'Male-Female Infertility',
      experience: '7 years of Experience',
      languages: 'Speaks: English, Hindi, Marathi',
      rating: '4.5',
      videoConsultation: '₹800',
      chatConsultation: 'Free',
      imgSrc: 'src/assets/doctorimg.svg',
    },
    {
      name: 'Dr. Bruce Willis',
      specialization: 'Gynecologist Specialist',
      experience: '10 years of Experience',
      languages: 'Speaks: English, Gujarati, Tamil',
      rating: '4.7',
      videoConsultation: '₹1000',
      chatConsultation: '₹200',
      imgSrc: 'src/assets/doctor2.svg',
    },
    {
      name: 'Dr. Prerna Narang',
      specialization: 'Dermatology and Skin Care',
      experience: '5 years of Experience',
      languages: 'Speaks: English, Hindi, Bengali',
      rating: '4.6',
      videoConsultation: '₹600',
      chatConsultation: '₹100',
      imgSrc: 'src/assets/doctorimg.svg',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <header className="flex items-center justify-between px-10 py-4 bg-yelow ">
        <div>
          <img src="src/assets/image 45.png" alt="Amrutam Logo" className="h-10 px-12" />
        </div>
        <nav className="space-x-16 px-20">
          <a href="#" className="font-semibold text-gray-700 text-lg hover:text-green-800">Home</a>
          <a href="#" className="text-green-800 hover:text-demo text-lg font-bold">Find Doctors</a>
          <a href="#" className="text-gray-700 hover:text-green-800 text-lg font-semibold">About Us</a>
        </nav>
        <div className="space-x-4 pr-20">
          <button className="px-4 py-2 text-demo border border-demo text-lg rounded-lg font-semibold">Login</button>
          <button className="px-4 py-2 text-white bg-demo rounded-lg text-lg">Sign-up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="px-8 py-12 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/frame.svg')" }}
        >
        <h1 className="mb-6 text-4xl font-bold text-gray-800 font-title">Find Expert Doctors For An In-Clinic Session Here</h1>
        <div className="flex items-center justify-center gap-2 mb-6 pt-4">
        <div className="relative w-1/8 ">
        <div className="flex items-center px-4 py-3 border border-gray-300 rounded-lg bg-white bg-opacity-80">
          <span className="text-green-800 mr-2">
          {/* Icon */}
          <svg
        version="1.0"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 64 64"
        enableBackground="new 0 0 64 64"
        xmlSpace="preserve"
        fill="#3A643B"
        className="h-5 w-5"
      >
        <path
          fill="#3A643B"
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </svg>
    </span>
    <select
      className="flex-1 appearance-none bg-transparent outline-none text-gray-500 text-sm text-center" 
      defaultValue=""
    >
      <option value="" disabled>
        Select Location
      </option>
      <option value="Location1">Location 1</option>
      <option value="Location2">Location 2</option>
    </select>
    <span className="text-gray-800 pl-2">
      {/* Down Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </span>
  </div>
</div>

{/* Input Box with Arrow */}
<div className="relative w-1/3">
  <input
    type="text"
    placeholder="eg. Doctor, specialisation, clinic name"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white bg-opacity-80 text-gray-800 text-sm pr-10"
  />
  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-green-800">
    {/* New Arrow Icon */}
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
        fill="#000000"
      ></path>
    </svg>
  </span>
</div>

</div>
      </section>

      {/* Filters */}
<section className="px-8 py-4 text-center border bg-white ">
  <div className="flex items-center justify-center gap-14">
    <button className="flex items-center font-semibold justify-between px-6 py-2 text-gray-700 border border-gray-300 rounded-md bg-gray-100 hover:bg-white shadow-sm">
      Expertise
      <span className="ml-2 pl-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    <button className="flex items-center font-semibold justify-between px-6 py-2 text-gray-700 border border-gray-300 rounded-md bg-gray-100 hover:bg-white shadow-sm">
      Gender
      <span className="ml-2 pl-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    <button className="flex items-center font-semibold justify-between px-6 py-2 text-gray-700 border border-gray-300 rounded-md bg-gray-100 hover:bg-white shadow-sm">
      Fees
      <span className="ml-2 pl-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    <button className="flex items-center font-semibold justify-between px-6 py-2 text-gray-700 border border-gray-300 rounded-md bg-gray-100 hover:bg-white shadow-sm">
      Languages
      <span className="ml-2 pl-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    <button className="flex font-semibold items-center justify-between px-6 py-2 text-green-800 border border-green-800 rounded-md bg-gren hover:bg-green-200 shadow-sm">
      All filters
      <span className="ml-2 pl-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
  </div>
</section>



      {/* Applied Filters */}
<section className="px-8 py-2 pt-12 bg-white">
  <div className="flex flex-wrap items-center justify-end gap-2">
    {/* Filter Tag */}
    <div className="flex items-center px-4 py-2 text-md text-black bg-gren border rounded-full shadow-sm">
      Hair care
      <button className="ml-2 text-gray-600 hover:text-red-600 focus:outline-none">
        &times;
      </button>
    </div>
    <div className="flex items-center px-4 py-2 text-md text-black bg-gren border rounded-full shadow-sm">
      Female
      <button className="ml-2 text-gray-600 hover:text-red-600 focus:outline-none">
        &times;
      </button>
    </div>
    <div className="flex items-center px-4 py-2 text-md text-black bg-gren border rounded-full shadow-sm">
      Rs.0-Rs.500
      <button className="ml-2 text-gray-600 hover:text-red-600 focus:outline-none">
        &times;
      </button>
    </div>
    <div className="flex items-center px-4 py-2 text-md text-black bg-gren border rounded-full shadow-sm">
      Hindi
      <button className="ml-2 text-gray-600 hover:text-red-600 focus:outline-none">
        &times;
      </button>
    </div>
  </div>
</section>

      {/* Doctor Cards */}
      <section className="px-80 py-8 bg-white">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {doctors.map((doctor, index) => (
      <div
        className="p-6 bg-beige rounded-2xl border border-gray-200 shadow-lg text-center bg-yelow"
        key={index}
      >
        {/* Doctor Image */}
        <div className="relative w-28 h-28 mx-auto">
        <img
          src={doctor.imgSrc}
          alt={doctor.name}
          className="w-full h-full rounded-full object-cover"
        />
        <div className="absolute bottom-0 left-8  bg-black text-white px-2 py-0.5 rounded-2xl text-xs font-medium flex items-center">
          {doctor.rating} <span className="text-yellow-500 ml-1">★</span>
        </div>
      </div>

        
        {/* Doctor Details */}
        <h3 className="text-2xl font-bold font-title text-gray-800">
          {doctor.name}
        </h3>
        <div className='flex justify-center items-left'>
        <div className='space-y-1 '>
    <div className="flex items-center space-x-2">
        <svg className="h-4 w-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Link"> <path id="Vector" d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19816 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071" stroke="#3A643B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
        </svg>
        <p className="text-xs text-gray-600 font-title">{doctor.specialization}</p>
    </div>
    <div className="flex items-center space-x-2">
        <svg className="h-4 w-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <svg fill="#3A643B" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M197.769 791.767l60.672-286.853c2.341-11.066-4.733-21.934-15.799-24.275s-21.934 4.733-24.275 15.799l-60.672 286.853c-2.341 11.066 4.733 21.934 15.799 24.275s21.934-4.733 24.275-15.799zm571.063-286.786l61.778 287.068c2.38 11.058 13.273 18.093 24.33 15.713s18.093-13.273 15.713-24.33l-61.778-287.068c-2.38-11.058-13.273-18.093-24.33-15.713s-18.093 13.273-15.713 24.33z"></path><path d="M967.45 386.902L535.9 208.126c-10.609-4.399-30.569-4.442-41.207-.088L57.821 386.901l436.881 178.857c10.624 4.355 30.583 4.313 41.207-.085L967.45 386.901zM551.583 603.516c-20.609 8.533-51.787 8.599-72.409.145L24.437 417.494c-32.587-13.359-32.587-47.847.009-61.188l454.73-186.174c20.641-8.448 51.818-8.382 72.407.156l448.836 185.936c32.466 13.442 32.466 47.913.004 61.354l-448.84 185.938zm288.673 166.569c-98 57.565-209.669 88.356-325.888 88.356-116.363 0-228.162-30.866-326.246-88.564-9.749-5.735-22.301-2.481-28.036 7.268s-2.481 22.301 7.268 28.036c104.336 61.377 223.297 94.22 347.014 94.22 123.564 0 242.386-32.763 346.634-93.998 9.753-5.729 13.015-18.279 7.286-28.032s-18.279-13.015-28.032-7.286z"></path><path d="M983.919 383.052v296.233c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V383.052c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"></path></g></svg>        </svg>
        <p className="text-xs text-gray-600 font-title font-semibold">{doctor.experience}</p>
    </div>
    <div className="flex items-center space-x-2">
        <svg className="h-3 w-3 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <svg fill="#3A643B" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1662.178 0v1359.964h-648.703l-560.154 560.154v-560.154H0V0h1662.178ZM1511.07 151.107H151.107v1057.75h453.321v346.488l346.489-346.488h560.154V151.107ZM906.794 755.55v117.53H453.32V755.55h453.473Zm302.063-302.365v117.529H453.32V453.185h755.536Z" fill-rule="evenodd"></path> </g></svg>        </svg>
        <p className="text-xs text-gray-600 font-title">{doctor.languages}</p>
    </div>
    </div>
</div>

        {/* Consultations */}
        <div className="grid grid-cols-2 gap-2 my-3 text-vs whitespace-nowrap ">
          <div className="border border-demo border-opacity-35 rounded-lg px-1 py-1 font-title font-semibold">
            <p>Video Consultation</p>
            <p className="font-semibold  text-green-800">{doctor.videoConsultation}</p>
          </div>
          <div className="border border-demo border-opacity-35 rounded-lg px-1 py-1 font-title font-semibold">
            <p>Chat Consultation</p>
            <p className="font-semibold  text-green-800">{doctor.chatConsultation}</p>
          </div>
        </div>
        
        {/* Actions */}
        <div className="space-y-2 pt-1 ">
          <button className="w-full px-4 py-2 border border-green-700 text-demo rounded-md text-xs font-title font-semibold bg-white">
            View Profile
          </button>
          <button className="w-full px-4 py-3 bg-demo rounded-md text-white font-title text-xs">
            Book a consultation
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default Hero;
