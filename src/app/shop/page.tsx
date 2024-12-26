import React from 'react';

const Page = () => {
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

  const quantity = [
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: "Next" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-[316px] bg-[url('/Rectangle1.png')] bg-cover flex justify-center items-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-semibold mb-4">Shop</h1>
          <h2 className="text-xl font-semibold">
            Home {">"} <span className="font-light">Shops</span>
          </h2>
        </div>
      </div>

      {/* Filter Bar Section */}
      <div className="w-full h-[100px] bg-[#F9F3EB] flex items-center justify-between px-6 border-b border-[#DADADA] mb-24">
        <div className="mx-10 flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-medium">
            <span>☰</span> Filter
          </button>
          <button className="text-lg">⬛</button>
          <button className="text-lg">☰</button>
          <span className="text-sm text-gray-600">Showing 1–16 of 32 results</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Show</span>
            <input
              type="text"
              defaultValue="16"
              className="w-10 h-8 text-center border border-gray-300 rounded-md text-gray-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort by</span>
            <select className="h-8 border border-gray-300 rounded-md px-2 text-gray-400">
              <option>Default</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex flex-wrap justify-center gap-8 mb-6">
        {datas.map((item, index) => (
          <div
            key={index}
            className="w-[285px] h-[446px] bg-white shadow-lg rounded-md overflow-hidden"
          >
            <div className="w-[285px] h-[301px]">
              <img
                src={item.image}
                alt={item.para}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-4 py-2">
              <h3 className="text-[24px] font-semibold text-black">{item.name}</h3>
              <p className="text-[16px] font-medium text-[#898989] mt-2">{item.para}</p>
              <div className="mt-2">
                <span className="text-[20px] font-semibold text-[#3A3A3A]">
                  Rp {item.price.toLocaleString()}
                </span>
                {item.discount && (
                  <span className="text-[16px] font-normal text-[#B0B0B0] line-through ml-2">
                    Rp {item.discount.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="w-full flex justify-center items-center py-8">
        <div className="flex gap-4">
          {quantity.map((item, index) => (
            <div
              key={index}
              className="w-[60px] h-[60px] flex justify-center items-center rounded-xl bg-[#b88e2f] text-white text-lg font-semibold"
            >
              {item.num}
            </div>
          ))}
        </div>
      </div>

      {/* Feature Section */}
      <div className="w-full h-[270px] bg-[#FAF3EA] flex justify-center items-center">
        <div className="w-[1334px] h-[70px]">
          <img src="/feature.png" alt="Feature" />
        </div>
      </div>
    </div>
  );
};

export default Page;
