import React from 'react'

const Description = ({product,selectedTab}) => {
  
    return (

    <div className={`${selectedTab !=="description" ? "hidden" :"" } flex flex-col gap-10 py-10`}>

        <div className='flex  items-center gap-8 max-md:flex-col'>
            <div className='flex-auto min-w-[50%] max-h-80 h-80 p-6 border-blue-700 border custom-border-radius max-md:min-w-full'>
                <img src={product?.primaryImage} alt="" className='w-full h-full object-contain ' />
            </div>

            <div className='space-y-5 flex-auto '>
                <h1 className='font-semibold text-2xl max-md:text-sm'>Explore the Ultimate Gaming Experience
                </h1>
                <p className='text-muted text-sm font-semibold'>{product.description}</p>
            </div>
        </div>
        

        <div className='flex  items-center flex-row-reverse gap-8 max-md:flex-col '>
            <div className='flex-auto min-w-[50%] max-h-80 h-80 p-6 border-blue-700 border custom-border-radius max-md:w-full'>
                <img src={product?.productImages && product?.productImages[0]?.url} alt="" className='w-full h-full object-contain ' />
            </div>

            <div className='space-y-5 flex-auto '>
                <h1 className='font-semibold text-2xl max-md:text-sm'>Dive into the World of Gaming Excellence
                </h1>
                <p className='text-muted text-sm'>Body tracking-track the physical presence of your entire body within the virtual environment. Capture full-body motions with as few as 3 trackers.Accessory tracking-enable the tracking of real-world objects to Increase the realism of your simulation or training experience.Data port sharing in addition to providing power, the USB port can be used to input Controller button events</p>
            </div>
        </div>


    </div>
  )
}

export default Description
