import React from 'react';

const Hero = () => {
  return (
    <div className="w-screen h-[716.83px] bg-[url('/Hero.png')] bg-cover">
      {/* Pink Div */}
      <div
      
        className="w-[643px] h-[443px] top-[194px] left-[739px] rounded-[10px] bg-[#fff3e3] relative"
        style={{ opacity: 1 }}
      >
        <div
          className="w-[561px] h-[344px] absolute top-[62px] left-[48px] flex flex-col justify-start items-start"
          style={{ opacity: 1 }}
        >
            <h1 className=' pl-[10px]  font-bold text-lg'>New Arrival</h1>
          {/* Heading */}
          <div
            className="w-[559px] h-[127px] text-[#B88E2F]"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "52px",
              fontWeight: 700,
              lineHeight: "65px",
              padding: "10px",
            }}
          >
            Discover Our <br />
            New Collection
          </div>
          {/* Paragraph */}
          <p
            className="text-[#333] text-left p-[10 px ] pt-9 pl-[10px] pb-7"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "24px",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
            sequi! Voluptatibus, deserunt.
          </p>
          <button className=' w-[222px] h-[74px] pl-[10px] bg-[#B88E2F] font-sans text-white  rounded-lg ml-[10px] font-semibold'>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
