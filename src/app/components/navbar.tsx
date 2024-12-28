      'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface links {
  url: string; // URL for navigation or social link
  title: string; // Title or label of the link
  localPath?: string; // Optional path for social media icons
}

const socialLinks: links[] = [
  { localPath: 'github.png', title: 'Github', url: 'https://github.com/Fardankhan12' },
  { localPath: 'facebook.png', title: 'Facebook', url: 'https://www.facebook.com/arish.mohammad.1?mibextid=LQQJ4d' },
  { localPath: 'instagram.png', title: 'Instagram', url: 'https://www.instagram.com/mr_fardan_khan12/' },
  { localPath: 'linkedin.png', title: 'LinkedIn', url: 'https://www.linkedin.com/in/fardankhan/' },
];

const navLinks: links[] = [
  { url: '/', title: 'Home' },
  { url: '/shop', title: 'Shop' },
  { url: '/blog', title: 'Blog' },
  { url: '/contact', title: 'Contact' },
  { url: '/search', title: 'Search' },
  { url: '/favorites', title: 'Favorites' },
  { url: '/cart', title: 'Cart' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="w-screen h-[100px] relative">
      {/* Logo Section */}
      <div className="absolute top-[32px] left-[54px] w-[130px] h-[41px]">
        <Link href="/">
          <Image src={'/logo.png'} alt="Logo" width={130} height={41} />
        </Link>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden lg:flex absolute top-[38px] left-[600px] w-auto gap-[60px] font-serif text-lg">
        {navLinks.map((link) => (
          <Link href={link.url} key={link.title}>{link.title}</Link>
        ))}
      </div>

      {/* Desktop Icon Links */}
      <div className="hidden lg:flex absolute top-[38px] left-[1200px] gap-[40px]">
        {socialLinks.map((icon) => (
          <Link href={icon.url} key={icon.title} target="_blank" rel="noopener noreferrer">
            <Image src={`/${icon.localPath}`} alt={`${icon.title} icon`} width={28} height={28} />
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex justify-between items-center py-7 px-3 z-30">
        <button
          className="flex flex-col items-center justify-center w-10 h-10 z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`w-8 h-1 bg-black origin-center transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-8 h-1 bg-black my-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-8 h-1 bg-black origin-center transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden bg-white text-2xl absolute z-20 w-full h-full bottom-0 py-32 pl-3 flex flex-col gap-10 duration-500 ${isMenuOpen ? 'left-0' : 'left-[-100%]'}`}
      >
        {navLinks.map((link) => (
          <Link href={link.url} key={link.title} onClick={() => setIsMenuOpen(false)}>{link.title}</Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

    </div>
  )
}

export default navbar
