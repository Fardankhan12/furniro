import React from 'react';

const Page = () => {
  // Define the quantity array for pagination (example data)
  const quantity = [
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
  ];

  const blogdata=[
    {
      image:"https://s3-alpha-sig.figma.com/img/56f7/6fe2/41417cd682c30a19eecaf20a549cee89?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gthWU4rLj5Zv2UpB0INcwYGO8gsNFTDwnIxKTKhJvjaDJh6mNaSUZIOst~vQ0dhoQOveTrKcjUs3mc7ueaQBlGPZ3nHyecPvQGGzFo-AAovtFBoucNEGkHZsJStt9B1-cfqP2es89xLoy3M0LddwwLY5uVPYxJCwShcZ3PWFagUHssaMnxKG9GcFKO6RgcYoY9C6SLV8EuSPn-fZ8iKI4pznq84y2~LU86CJIi3~txM8svxtq-abKPsmbBf36llQbt1wkLMcvGqX02zyakSEDqG8g36CES~ms67q5-9VBgCFr9PPzcied-DTrNAEH0~bJOqbwK4mcsj7BgdF1Py~fw__" ,
      heading:"Going all-in with millennial design" ,
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum." ,
    },
    {
      image:"/Rectangle68.png",
      heading:"Exploring new ways of decorating",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
    },{
      image:"https://s3-alpha-sig.figma.com/img/8dee/6dec/4190307dc6c7273c0bbf5086605997e4?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RfmXPpQo5hzE5hBo0PSlK2U4Q4QTJmMoIARMOX2NRKjCWqFw~HoaqKOz8tswshSXnFcjHOR~infYMOPBbdKKLKFULuAKMYLkOYrklOsSmsH1SJdihNFlm9a4drIOJrIma-O-MMU6XzMOgeG0QioDpspjRA-CRIn3lYvjiejvDoq7nM6UdgxSiJMZerzU7w42VVIRMlkgbSNEmdyJWu5wQUkvSbWNkMYXKXsfPBXQoHeHzMeFYerR558H~21-3RkjBfZsTSJGtO3fyh20~nkcCzClu28i2J832JquvvgdiQSJY0JkOrYDMDX9I3XPdN7LmyzIhFFd0BxC1B2AwKxh5w__",
      heading:"Handmade pieces that took time to make",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."

      
    }
  ]

    const categories = [
      { name: 'Crafts', count: 2 },
      { name: 'Design', count: 8 },
      { name: 'Handmade', count: 7 },
      { name: 'Interior', count: 1 },
      { name: 'Wood', count: 6 },
    ];
  

  return (
    <>
      {/* Header Section */}
      <div className="w-full h-[316px] bg-[url('/Rectangle1.png')] bg-cover flex justify-center items-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-semibold mb-4">Blog</h1>
          <h2 className="text-xl font-semibold">
            Home {">"} <span className="font-light">Blog</span>
          </h2>
        </div>
      </div>

 
{/* Blog Section */}
<div className='w-full flex flex-wrap gap-4 p-24 '>
  {blogdata.map((blogs, index) => (
    <div key={index} className='w-[820px] p-6 '>
      <div>
        <img src={blogs.image} alt="Blog Image" width="817" height="500" className='mb-4 rounded-lg' />
        <div className='mb-4 flex gap-4 text-gray-600 text-sm'>
          <div>
            <span role="img" aria-label="Admin">👤</span>
            <span> Admin</span>
          </div>
          <div>
            <span role="img" aria-label="Date">🗓️</span>
            <span> 14 Oct 2022</span>
          </div>
          <div>
            <span role="img" aria-label="Wood">🪵</span>
            <span> Wood</span>
          </div>
        </div>
        <h2 className='mb-4 text-[24px] leading-[32px] font-medium'>{blogs.heading}</h2>
        <p className='mb-4 text-gray-700'>{blogs.paragraph}</p>
        <a href="#" className='underline font-bold text-[#b88e2f]'>Read more</a>
      </div>
    </div>
  ))}
  <div className='absolute  left-[70rem]'>
      <h2>Categories</h2>
      <ul >
        {categories.map((category) => (
          <li key={category.name}>
            {category.name} - {category.count}
          </li>
        ))}
      </ul>
    </div>
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
    </>
  );
};

export default Page;
