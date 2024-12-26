import React from 'react';

interface DiningCart {
  name: string;
  image: string;
}

const items: DiningCart[] = [
  { name: 'Dining', image: '/dining.png' },
  { name: 'Living', image: '/living.png' },
  { name: 'Bedroom', image: '/bedroom.png' },
];

const Browsethepage = () => {
  return (
    <div className="w-full max-w-[1183px] mx-auto mt-20 text-center">
      <h1 className="text-[32px] font-bold font-poppins leading-[48px]">Browse the Range</h1>
      <p className="text-[20px] mt-4 leading-[30px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="flex justify-center gap-[20px] mt-[50px]">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-[381px] h-[480px]">
            <img src={item.image} alt={item.name} className="object-cover" />
            <h1 className="text-[24px] font-semibold mt-4">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browsethepage;
