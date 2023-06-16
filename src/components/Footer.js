import React from 'react';
import '../index.css';

function Footer() {
  return (
    <div>
        <div className="flex justify-between content-center bg-black bg-opacity-80 px-3 py-6 md:px-10 xl:px-64">
          <ul className="flex items-center justify-between w-full">
            <li className="mr-6"><a className="text-gray-300 hover:text-white" href="https://react.dev/" target='_blank' rel='noreferrer'>Powered by ReactJS.</a></li>
            <li className="mr-6"><a className="text-gray-300 hover:text-white" href="https://react.dev/" target='_blank' rel='noreferrer'>©Bear 2023</a></li>
          </ul>
      </div>
    </div>
  )
}

export default Footer