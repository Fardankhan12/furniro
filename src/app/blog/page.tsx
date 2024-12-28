
// Sample Data
const blogs = [
  {
      id: 1,
      imageUrls: ['https://s3-alpha-sig.figma.com/img/56f7/6fe2/41417cd682c30a19eecaf20a549cee89?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gthWU4rLj5Zv2UpB0INcwYGO8gsNFTDwnIxKTKhJvjaDJh6mNaSUZIOst~vQ0dhoQOveTrKcjUs3mc7ueaQBlGPZ3nHyecPvQGGzFo-AAovtFBoucNEGkHZsJStt9B1-cfqP2es89xLoy3M0LddwwLY5uVPYxJCwShcZ3PWFagUHssaMnxKG9GcFKO6RgcYoY9C6SLV8EuSPn-fZ8iKI4pznq84y2~LU86CJIi3~txM8svxtq-abKPsmbBf36llQbt1wkLMcvGqX02zyakSEDqG8g36CES~ms67q5-9VBgCFr9PPzcied-DTrNAEH0~bJOqbwK4mcsj7BgdF1Py~fw__'],
      category: { categoryName: 'Technology' },
      header: 'Going all-in with millennial design',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
  },
  {
      id: 2,
      imageUrls: ['/Rectangle68.png'],
      adminInfo: { roleName: 'Editor' },
      category: { categoryName: 'Health' },
      header: 'Exploring new ways of decorating',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum',
  },
  {
      id: 3,
      imageUrls: ['https://s3-alpha-sig.figma.com/img/8dee/6dec/4190307dc6c7273c0bbf5086605997e4?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RfmXPpQo5hzE5hBo0PSlK2U4Q4QTJmMoIARMOX2NRKjCWqFw~HoaqKOz8tswshSXnFcjHOR~infYMOPBbdKKLKFULuAKMYLkOYrklOsSmsH1SJdihNFlm9a4drIOJrIma-O-MMU6XzMOgeG0QioDpspjRA-CRIn3lYvjiejvDoq7nM6UdgxSiJMZerzU7w42VVIRMlkgbSNEmdyJWu5wQUkvSbWNkMYXKXsfPBXQoHeHzMeFYerR558H~21-3RkjBfZsTSJGtO3fyh20~nkcCzClu28i2J832JquvvgdiQSJY0JkOrYDMDX9I3XPdN7LmyzIhFFd0BxC1B2AwKxh5w__'],
      header: 'Handmade pieces that took time to make',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
  },
];

const categories = [
  { id: 1, categoryName: 'Technology', blogCount: 12 },
  { id: 2, categoryName: 'Health', blogCount: 8 },
  { id: 3, categoryName: 'Travel', blogCount: 5 },
  { id: 4, categoryName: 'Lifestyle', blogCount: 15 },
];

const recentBlogs = [
  {
      id: 1,
      imageUrls: ['/assets/images/recent1.jpg'],
      header: 'Understanding Cybersecurity in 2024',
      createdDate: '2024-06-01',
  },
  {
      id: 2,
      imageUrls: ['/assets/images/recent2.jpg'],
      header: '5 Yoga Poses for Daily Relaxation',
      createdDate: '2024-06-05',
  },
  {
      id: 3,
      imageUrls: ['/assets/images/recent3.jpg'],
      header: 'Travel Essentials for Your Next Trip',
      createdDate: '2024-06-10',
  },
];

// Component
const BlogSection = () => {
  return (
      <>
      <div><div className="w-full h-[316px] bg-[url('/Rectangle1.png')] bg-cover flex justify-center items-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-semibold mb-4">Blog</h1>
        <h2 className="text-xl font-semibold">
          Home {">"} <span className="font-light">Blog</span>
        </h2>
      </div>
    </div></div>
      <section className="container mx-auto pt-[50px] lg:pt-[100px] lg:px-9">
          <div className="container mx-auto pt-[50px] lg:pt-[50px] lg:px-9">
              {/* Mobile Search Bar */}
              <div className="block lg:hidden">
                  <div className="flex items-center rounded-[10px] border px-2 mx-2 py-2 border-[#9F9F9F] mb-11">
                      <input
                          type="text"
                          className="px-4 py-2 w-full outline-none"
                          placeholder="Search..."
                      />
                      <button className="px-4">
                          <img src='/' alt="Search Icon" />
                      </button>
                  </div>
              </div>
              
              {/* Blog Content */}
              <div className="grid lg:grid-cols-3 gap-4">
                  <div className="lg:col-span-2">
                      {blogs.map((item) => (
                          <div key={item.id} className="px-4 lg:px-0">
                              <img
                                  src={item.imageUrls[0]}
                                  alt="Blog Post"
                                  className="w-full h-auto"
                              />
                              <div className="flex items-center justify-between text-[#9F9F9F] py-2">
                                  
                              </div>
                              <div className="lg:pb-8">
                                  <h2 className="text-3xl font-Poppins font-medium pb-3">
                                      {item.header}
                                  </h2>
                                  <p className="font-Poppins text-[#9F9F9F] font-light text-base pb-4">
                                      {item.text}
                                  </p>
                                  <button className="border-b border-black hover:text-[#B88E2F] outline-none text-base font-Poppins font-normal py-3 mb-[54px]">
                                      Read more
                                  </button>
                              </div>
                          </div>
                      ))}
                  </div>

                  {/* Sidebar */}
                  <div className="lg:col-span-1 self-start px-4 lg:pl-8 sticky-sidebar overflow-y-auto">
                      {/* Desktop Search Bar */}
                      <div className="hidden lg:flex items-center rounded-[10px] border px-4 py-2 border-[#9F9F9F] overflow-hidden mb-11">
                          <input
                              type="text"
                              className="px-4 py-2 w-full outline-none"
                              placeholder="Search..."
                          />
                          <button className="px-4">
                              <img src='/' alt="Search Icon" />
                          </button>
                      </div>
                      
                      {/* Categories */}
                      <div className="mx-[34px] mb-28">
                          <h3 className="text-2xl font-medium font-Poppins mb-8">
                              Categories
                          </h3>
                          <ul className="space-y-8 overflow-y-scroll h-80">
                              {categories.map((item) => (
                                  <li key={item.id} className="flex justify-between font-Poppins text-base font-normal text-[#9F9F9F]">
                                      <span className='text-[#9F9F9F] w-full cursor-pointer'>{item.categoryName}</span>
                                      <span className='text-[#9F9F9F] w-4/12 flex justify-end'>{item.blogCount}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>
                      
                      {/* Recent Posts */}
                      <div className="mx-[34px] mb-28">
                          <h3 className="text-2xl font-medium font-Poppins mb-8">
                              Recent Posts
                          </h3>
                          {recentBlogs.map((item) => (
                              <div className="flex items-center bg-white rounded-lg shadow-xs mb-10" key={item.id}>
                                  <div
                                      className="flex-none rounded-lg overflow-hidden w-16 h-16"
                                      style={{ minWidth: "64px" }}
                                  >
                                      <img
                                          src={item.imageUrls[0]}
                                          alt="Notebook"
                                          className="object-cover w-[80px] h-[80px]"
                                      />
                                  </div>
                                  <div className="flex-grow ml-4 pr-8">
                                      <p className="text-sm font-Poppins font-normal pb-2">
                                          {item.header}
                                      </p>
                                      <p className="text-xs font-normal text-[#9F9F9F]">
                                          {item.createdDate}
                                      </p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>
                              </>
  );
};

export default BlogSection;
