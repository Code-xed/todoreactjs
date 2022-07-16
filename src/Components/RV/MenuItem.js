import React from 'react';

function MenuItem({name}) {
  return (
    <div className="flex-auto my-2 md:mx-2">
      <a className="p-2 shadow-lg shadow-orange-800 bg-orange-400 object-center font-small text-white rounded hover:bg-blue-400 transition duration-300 ring-2 ring-stone-900" href="#">{name}</a>
    </div>
    );
}

export default MenuItem;