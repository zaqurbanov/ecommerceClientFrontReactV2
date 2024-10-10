import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const ProductCart2 = ({ product }) => {
  return (
    <div className='w-full h-full bg-transparent flex flex-col gap-2 justify-around p-4'>
      {/* Şəkil bölməsi */}
      <div className='h-[200px] p-2 flex justify-center items-center'>
        <img src={product.primaryImage} alt="" className="max-h-full" />
      </div>

      {/* Məhsul adı */}
      <NavLink
        className="text-2xl font-bold text-black max-md:text-sm max-md:text-center"
        to={`/product/${product._id}`}
      >
        {product.name}
      </NavLink>

      {/* Ölçü seçimi */}
      <div>
        <select name="" id="" className='w-full p-3 custom-border-radius border border-[#838383] text-muted'>
          {product.sizes &&
            product.sizes.map(size => (
              <option value={size._id} className='text-muted' key={size._id}>
                {size.name}
              </option>
            ))}
        </select>
      </div>

      {/* Qiymət və Səbət düyməsi */}
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>{product.price}$</h1>
        <Button product={product} />
      </div>
    </div>
  )
}

export default ProductCart2;
