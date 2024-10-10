import React from "react";

const AboutOurShop = () => {
  return (
    <div className="p-16 max-md:p-4 flex flex-col gap-10 text-[#11111]">
      <div className="space-y-2">
        <h1 className="text-3xl max-md:text-xl font-bold ">About Our Shop</h1>
        <p className="text-muted text-sm">
          Gaming can help to improve cognitive skills such as problem-solving,
          memory, and attention.
        </p>
      </div>

      <div className="flex  flex-wrap gap-10">
            <div className="bg-third border border-blue-500 custom-border-radius px-4 py-6 flex-1 min-w-1/4 max-md:min-w-[45%] flex flex-col gap-4 ">
                <h2 className="linear-text font-semibold text-4xl">01</h2>
                <h3 className="text-2xl font-bold">Gift boxes
                </h3>
                <p className="text-muted">Finished products products and gift wrapping</p>
            </div>


            <div className="bg-third border border-blue-500 custom-border-radius px-4 py-6 flex-1 min-w-1/4 max-md:min-w-[45%] flex flex-col gap-4 ">
                <h2 className="linear-text font-semibold text-4xl">02</h2>
                <h3 className="text-2xl font-bold">Promotions
                </h3>
                <p className="text-muted">Large and frequent promotions with numerous</p>
            </div>


            <div className="bg-third border border-blue-500 custom-border-radius px-4 py-6 flex-1 min-w-1/4 max-md:min-w-[45%] flex flex-col gap-4 ">
                <h2 className="linear-text font-semibold text-4xl">03</h2>
                <h3 className="text-2xl font-bold">Shipping

                </h3>
                <p className="text-muted">Free shipping on any order from $ 150</p>
            </div>


            <div className="bg-third border border-blue-500 custom-border-radius px-4 py-6 flex-1 min-w-1/4 max-md:min-w-[45%] flex flex-col gap-4 ">
                <h2 className="linear-text font-semibold text-4xl">04</h2>
                <h3 className="text-2xl font-bold">Quality
                </h3>
                <p className="text-muted">All products are made by engineers and designers from India

</p>
            </div>
      </div>
    </div>
  );
};

export default AboutOurShop;
