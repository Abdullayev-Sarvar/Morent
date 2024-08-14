import React from 'react'

const BannerCard = ({ title, description, buttonText, imagePath, bgColor }) => {
  return (
    <div className={`relative ${bgColor} p-6 rounded-lg overflow-hidden flex flex-col justify-between`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 opacity-50 rounded-lg"></div>
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-white">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h1>
          <p className="text-md sm:text-lg mb-6">
            {description}
          </p>
          <button className="bg-blue-700 text-white px-6 py-3 rounded-md shadow-md">
            {buttonText}
          </button>
        </div>
        <div className="mt-6 sm:mt-0">
          <img
            src={imagePath}
            alt="Car"
            className="w-full max-w-xs sm:max-w-md pt-52"
          />
        </div>
      </div>
    </div>
  )
}

export default BannerCard