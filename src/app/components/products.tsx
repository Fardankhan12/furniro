import React from 'react';

const datas = [
  { name: 'Syltherine', image: '/17.jpg', para: 'Stylish cafe chair', price: 2500.0, discount: 3500.0 },
  { name: 'Leviosa', image: '/3.jpg', para: 'Stylish cafe chair', price: 2500.0 },
  { name: 'Lolito', image: '/4.jpg', para: 'Luxury big sofa', price: 7000.0, discount: 14000.0 },
  { name: 'Respira', image: '/(2).png', para: 'Outdoor bar table and stool', price: 500.0 },
  { name: 'Grifo', image: '/(3).png', para: 'Night lamp', price: 1500.0 },
  { name: 'Muggo', image: '/15.jpg', para: 'Small mug', price: 150.0 },
  { name: 'Pingky', image: '/16.jpg', para: 'Cute bed set', price: 7000.0, discount: 14000.0 },
  { name: 'Potty', image: '/2.jpg', para: 'Minimalist flower pot', price: 500.0 },
];

const ProductList = () => {
  return (
    <div className="w-full max-w-[1236px] mx-auto mt-20 text-center">
      <h1 className="text-[32px] font-bold mb-10">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {datas.map((item, index) => (
          <div
            key={index}
            className="w-[285px] h-[446px] gap-0 opacity-100 bg-white shadow-lg rounded-md overflow-hidden"
          >
            <div className="w-[285px] h-[301px] gap-0 opacity-100">
              <img
                src={item.image}
                alt={item.para}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[285px] h-[145px] gap-0 opacity-100 px-4 py-2">
              <h3 className="text-[24px] font-semibold leading-[28.8px] text-left text-black">
                {item.name}
              </h3>
              <p className="text-[16px] font-medium leading-[24px] text-left text-[#898989]  mt-2">
                {item.para}
              </p>
              <div className="mt-2">
                <span className="text-[20px] font-semibold leading-[30px] text-left text-[#3A3A3A] ">
                  Rp {item.price.toFixed(3)}
                </span>
                {item.discount && (
                  <span className="text-[16px] font-normal leading-[24px] text-left text-[#B0B0B0] line-through ml-2 ">
                    Rp {item.discount.toFixed(3)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

