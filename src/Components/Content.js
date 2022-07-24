import React from 'react';
import py from "../static/svg/python.svg";
import js from "../static/svg/js.svg";
import html from "../static/svg/html5.svg";

import LangCard from './RV/LangCard.js';
import MenuItem from './RV/MenuItem.js';


function Content() {
  const contents = {"Python":py, "JavaScript":js, "HTML5":html};
  return (
    <div className="break-all">
      <div className="bg-slate-200">
        <h1 className="text-5xl text-bold text-center md:text-7xl">Hey, There!</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
          fill="#2790dc"
          fillOpacity={1}
          d="M0,288L24,293.3C48,299,96,309,144,293.3C192,277,240,235,288,197.3C336,160,384,128,432,112C480,96,528,96,576,122.7C624,149,672,203,720,229.3C768,256,816,256,864,229.3C912,203,960,149,1008,128C1056,107,1104,117,1152,128C1200,139,1248,149,1296,144C1344,139,1392,117,1416,106.7L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        />
        </svg>
      </div>
      <div className="w-auto shadow-slate-400/50 mt-8 mb-2 from-sky-200 bg-gradient-to-b md:ml-20 md:w-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path fill="#ffffff" fillOpacity={1} d="M0,192L1440,64L1440,0L0,0Z" />
        </svg>
        <h1 className="border-radius-lg text-bold px-6 text-4xl outline-lg border-l-8 border-rose-900 shadow-sm shadow-slate-400">Bulid Beautiful Web{" "}
          <span className="text-5xl text-sky-500">EXPERIENCES</span>
        </h1>
        
      <div className="flex items-center">
        <div className="shrink-0">
        <img
          className="ml-4 w-24 h-24"
          src="../../static/svg/build.png"
          alt=""
        />
      </div>
      <div className="">
        <h4 className="ml-8 text-stone-800 text-sm px-8 py-2 border-t-2 border-rose-900">
          Scale your design effortlessly. I am proficient in HTML/CSS/JS, and
          will build your dream website. The process will be fast &amp;
          reliable.
        </h4>
      </div>
    </div>
  </div>
  <div
    className="w-screen drop-shadow-sm h-screen bg-no-repeat bg-fill"
    style={{ backgroundImage: 'url("../../static/img/bg1.jpg")' }}
  ></div>
  {/* <div class="bg-black" style="" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fda4af" fill-opacity="1" d="M0,256L288,288L576,192L864,224L1152,64L1440,288L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
  </div> */}
  <div className="shadow-slate-400/50 mb-10 from-red-200 bg-gradient-to-b md:ml-20 md:w-100">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
      <path fill="#e2e8f0" fillOpacity={1} d="M0,192L1440,64L1440,0L0,0Z" />
    </svg>
    <h1 className="border-radius-md text-bold px-6 py-2 text-4xl border-l-8 border-rose-900 shadow-lg shadow-slate-400">
      Scale Instantly And{" "}
      <span className="text-5xl text-sky-500">EFFECTIVELY</span>
    </h1>
    <div className="flex items-center">
      <div className="shrink-0">
        <img
          className="ml-4 w-24 h-24"
          src="../../static/svg/insta.png"
          alt=""
        />
      </div>
      <h4 className="ml-8 text-stone-800 text-sm px-8 py-2 border-t-2 border-rose-900">
        Our Systems are backed up multiple times &amp; our team makes sure that
        our clients get no interruptions. Period
      </h4>
    </div>
  </div>{" "}
  {/* This line remov*/}
  <div
    className="w-auto h-screen bg-no-repeat bg-fill bg-fixed"
    style={{ backgroundImage: 'url("../../static/img/bg2.jpg")' }}
  ></div>
  {/* div class="w-auto h-screen bg-no-repeat bg-cover bg-fixed" style="background-image: url('../../static/img/bg2.jpg');">
  </div*/}
  <div className="shadow-slate-400/50 mb-10 from-teal-200 bg-gradient-to-b md:ml-20 min-h-50 md:w-100">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
      <path fill="#e2e8f0" fillOpacity={1} d="M0,192L1440,64L1440,0L0,0Z" />
    </svg>
    <h1 className="border-radius-md text-bold px-6 text-4xl outline-lg border-l-8 border-rose-900 shadow-lg shadow-slate-400">
      Experience Comes To <span className="text-5xl text-sky-500">PLAY</span>
    </h1>
    <div className="flex items-center">
      <div className="shrink-0">
        <img
          className="ml-4 w-24 h-24"
          src="../../static/svg/android.png"
          alt=""
        />
      </div>
      <h4 className="ml-8 text-stone-800 text-sm px-8 py-2 border-t-2 border-rose-900">
        I've had prior experience with bot devlopment, backend &amp; frontend
        devlopment along with a brief exposure to android development too.
      </h4>
    </div>
  </div>
  <div
    className="w-auto h-screen bg-no-repeat bg-cover bg-fixed"
    style={{ backgroundImage: 'url("../../static/img/bg3.jpg")' }}
  ></div>
  {/* Flex Language */}
  <div className="flex flex-col space-between space-y-8">
    {/* Icon */}
    <div className="flex-inline shadow-lg shadow-yellow-800 from-sky-400 bg-gradient-to-r">
      <div className="shrink-0">
        <img
          className="ml-4 w-24 h-24"
          src="../../static/svg/java.svg"
          alt=""
        />
      </div>
      {/* Description */}
      <div className="">
        <p>Java</p>
      </div>
    </div>
    {/* Icon */}
    <div className="shadow-lg shadow-yellow-800 shrink-0">
      <img className="ml-4 w-24 h-24" src="../../static/svg/html5.svg" alt="" />
      {/* Description */}
      <div className="">
        <p>HTML/CSS</p>
        <p></p>
      </div>
    </div>
    {/* Icon */}
    <div className="shadow-lg shadow-yellow-800 shrink-0">
      <img
        className="ml-4 w-24 h-24"
        src="../../static/svg/python.svg"
        alt=""
      />
      {/* Description */}
      <div className="">
        <p>Python</p>
      </div>
    </div>
    {/* Icon */}
    <div className="shadow-lg shadow-yellow-800 shrink-0">
      <img className="ml-4 w-24 h-24" src="../../static/svg/js.svg" alt="" />
      {/* Description */}
      <div className="">
        <p>JavaScript</p>
      </div>
    </div>
    {/*<LangCard src={} content={}/>*/}
  </div>
  {/* Card */}
  {/* GUBFEST*/}
  <div>
    <img
      src="{{ url_for('static', filename='svg/gubfr.svg')}}"
      className="mx-auto w-full lg:ml-1"
    />
  </div>
  {/* SCRIPT */}
  </div>
  );
}
export default Content;