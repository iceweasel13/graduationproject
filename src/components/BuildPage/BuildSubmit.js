import React from "react";
function Submit() {
  return (
    <div className="h-screen mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grid grid-cols-3 grid-rows-1">
      <div className="h-1/2"></div>
      <div className=" flex items-center justify-center">
        <div className="max-w-1/3 p-6  bg-gray-700 rounded-lg ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-300">
            Noteworthy technology acquisitions 2021
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Build Now!
          </a>
        </div>
      </div>
      <div className="h-1/2 "></div>
    </div>
  );
}
export default Submit;
