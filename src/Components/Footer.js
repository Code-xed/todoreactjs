import React from 'react';

function Footer() {
  return (
    <div className="flex justify-around flex-col text-white text-center bg-black h-[60vh] space-y-4">
      <div className="flex flex-col m-0 p-0 ">
        <h1 className="my-4 text-bold text-[2.5rem]">Get Ideas Delivered to You</h1>
        <button className="bg-white text-black rounded-[20px] p-[0.4rem] text-bold text-[14px] hover:text-white hover:bg-blue-600 mx-[40vw]">Sign Up</button>
      </div>
      <h2 className="mt-[50px]">Copyright © 2022 <strong className="text-underline-red-500">Aditya.</strong><br/>All Rights Reserved.</h2>
    </div>
  );
}

export default Footer;