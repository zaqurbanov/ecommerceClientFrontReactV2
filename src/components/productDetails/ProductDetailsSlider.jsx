import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductDetailsSlider = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product?.primaryImage || '');
  const thumbnailsRef = useRef(null);

  const handleSetImage = (src) => {
    setSelectedImage(src);
  };



  return (
    <div className="slider w-full max-h-[500px] flex  gap-5 max-md:flex-col">
      {/* Thumbnails Section */}
      <div className="flex items-center justify-center ">
     
        <div
          ref={thumbnailsRef}
          className="smalImg flex gap-2 overflow-x-auto scroll-smooth mx-2 flex-col max-md:flex-row"
        >
          {product?.productImages?.map((image, index) => (
            <div
              key={image.url}
              className={`flex-shrink-0 w-20 h-20 border ${
                selectedImage === image.url ? 'border-blue-600' : 'border-transparent'
              } rounded cursor-pointer hover:border-blue-600 transition`}
              onClick={() => handleSetImage(image.url)}
            >
              <img
                src={image.url}
                alt={`Product Thumbnail ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
    
      </div>

      {/* Main Image Section */}
      <div className="mainImg relative h-[400px] border border-blue-500 flex justify-center items-center card-shadow overflow-hidden p-5">
        <AnimatePresence>
          <motion.img
            key={selectedImage}
            src={selectedImage || product?.primaryImage}
            alt="Selected Product"
            className="w-full h-full object-contain"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductDetailsSlider;
