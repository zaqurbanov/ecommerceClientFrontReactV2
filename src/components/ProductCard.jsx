import React from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className=" w-full h-full min-h-[100%] flex pb-12 flex-col justify-between rounded-tr-2xl gap-5 card-shadow  p-4">
      <div className="w-full p-2   flex justify-center items-center">
        <img src={product.primaryImage} alt="" className="object-cover w-full h-full rounded-md" />
      </div>
      <NavLink className="text-2xl font-bold text-white max-md:text-sm max-md:text-center" to={`/product/${product._id}`}>{product.name}</NavLink>
      <div>
        {product.sizes.length > 0 ? (
          <select className="bg-transparent text-white w-full border custom-border-radius p-2 max-md:text-sm">
            {product.sizes.map(size => (
              <option value={size._id} key={size._id} className="text-muted bg-transparent">
                {size.name}
              </option>
            ))}
          </select>
        ) : null}
      </div>
      <div className="flex justify-between items-center">
        <div>
        <h2 className="text-white font-bold max-md:text-sm">{product.price} $</h2>
        <h2 className="text-white max-md:text-sm">Old Price</h2>


        </div>
        <Button product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
