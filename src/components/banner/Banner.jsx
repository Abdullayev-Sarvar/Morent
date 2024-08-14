import React from 'react'
import BannerCard from '../bannerCard/BannerCard'
import Add1 from '../../assets/img/Add1.png'
import Add2 from '../../assets/img/Add2.png'

const Banner = () => {
  return (
    <div className='bg-[#F6F7F9] p-8'>
        <div className="flex flex-col md:flex-row gap-6">
      <BannerCard
        title="The Best Platform for Car Rental"
        description="Ease of doing a car rental safely and reliably. Of course at a low price."
        buttonText="Rental Car"
        imagePath={Add1}
        bgColor="bg-blue-500"
      />
      <BannerCard
        title="Easy way to rent a car at a low price"
        description="Providing cheap car rental services and safe and comfortable facilities."
        buttonText="Rental Car"
        imagePath={Add2}
        bgColor="bg-blue-700"
      />
    </div>
    </div>
  )
}

export default Banner