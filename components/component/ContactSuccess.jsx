"use client"
import React from "react";

const ContactSuccess = ({ onOKClick }) => {
  const handleOKClick = () => {
    if (onOKClick) {
      onOKClick();
    }
    // Reload the page
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blur">
      <div className="bg-white dark:bg-gray-800 bg-opacity-90 shadow-xl rounded-xl p-8 max-w-md mx-4 mt-10 w-full sm:max-w-md">
        <h2 className="text-2xl font-bold text-green-500 mb-4 text-center">{"Success!"}</h2>
        <p className="text-gray-700 dark:text-gray-300 text-center">
          {"Your message has been sent successfully."}
        </p>
        <div className="mt-6 flex justify-center">
          <button
            className="py-2 px-6 bg-green-500 hover:bg-green-600 text-white rounded focus:outline-none"
            onClick={handleOKClick}
          >
            {"OK"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactSuccess;
