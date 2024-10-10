import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../enums/apiUrl";
import { ENDPOINTS } from "../enums/endpoints";
import { HashLoader } from "react-spinners";
import BackToHome from "../components/BackToHome";
import RatingStar from "../components/RatingStar";
import BrandTag from "../components/BrandTag";
import IncrementOrDecrementOfProduct from "../components/IncrementOrDecrementOfProduct";
import Button from "../components/Button";
import ProductDetailsSlider from "../components/productDetails/ProductDetailsSlider";
import Description from "../components/productDetails/Description";
import ShippingPolicy from "../components/productDetails/ShippingPolicy";
import TabName from "../components/productDetails/TabName";
import Reviews from "../components/productDetails/Reviews";

const ProductDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [product, setProduct] = useState([]);
const [selectedTab,setSelectedTab]= useState('description')
  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`${BaseUrl}${ENDPOINTS.PRODUCT}/${id}`);

        if (!response.data.success) {
          throw new Error(response.data.message);
        }
        setProduct(response.data.data);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProductById();
  }, []);
  const handleSelectedTab = (name) =>{
    
setSelectedTab(name)  }
  return (
    <div>
      <div className="p-16 max-md:p-2 bg-black">
        {loading && (
          <div className="absolute w-full h-full bg-slate-100  flex justify-center items-center">
            <HashLoader color="#1c20d2" />
          </div>
        )}

        <div>
          <BackToHome />
        </div>
        <div className="flex  justify-center  gap-5 max-md:flex-col max-md:gap-10 py-10">
          <div className="w-1/2 max-md:w-full mt-16 flex flex-col justify-items-start items-start gap-6">
            <BrandTag brand={product.brand?.name || "No brand"} />
            <RatingStar rating={4} />

            <p className="uppercase text-muted text-sm">
              type: <span>{product.type?.name}</span>
            </p>
            <p className="text-muted text-sm">{product?.description}</p>
            <div className="flex gap-8">
              <p className="text-white font-bold text-2xl">{product?.price}$</p>
              <IncrementOrDecrementOfProduct item={product} />
            </div>
            <Button product={product} />
          </div>

          <div className="w-1/2 flex max-md:w-full ">
            <ProductDetailsSlider product={product} />
          </div>
        </div>
      </div>
      <div className="p-16 max-md:p-2">
        <div className="flex justify-center items-center gap-5">
          <TabName name={'description'}  handleSelectedTab={handleSelectedTab} selectedTab={selectedTab} />
          <TabName name={'shipping policy'}  handleSelectedTab={handleSelectedTab} selectedTab={selectedTab}/>
          <TabName name={'reviews'}  handleSelectedTab={handleSelectedTab} selectedTab={selectedTab}/>
        </div>
        <Description selectedTab={selectedTab} product={product}/>
        <ShippingPolicy selectedTab={selectedTab}/>
        <Reviews selectedTab={selectedTab} product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
