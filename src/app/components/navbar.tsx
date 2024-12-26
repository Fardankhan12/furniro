import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function navbar() {
  return (
    <div className='w-screen h-[100px] '  >
      <div className='absolute top-[32px] left-[54px] w-[130px] h-[41px]'>
        <Link href="/"><Image src="/logo.png" alt="Hero Image" width={130} height={41}/></Link>
     
        </div>
      <div className='w-["430px"] h-[24px] top-[38px] left-[600px] absolute gap-[60px] flex font-serif text-lg '>
        <Link href={"/"}>home</Link>
        <Link href={"/shop"}>shop</Link>
        <Link href={"/blog"}>blog</Link>
        <Link href={"/contact"}>contact</Link>

      </div>
      <div className='flex w-["430px"] h-[24px] top-[38px] left-[1200px] absolute gap-[40px]'>
      <Link href={"/"}>  <Image src="/mdi_account-alert-outline.png" alt="Hero Image" width={"28"} height={"28"}/></Link>
      <Link href={"/"}>  <Image src="/Vector.png" alt="Hero Image" width={"28"} height={"28"}/></Link>
      <Link href={"/"}>  <Image src="/akar-icons_heart.png" alt="Hero Image" width={"28"} height={"28"}/></Link>
      <Link href={"/"}>  <Image src="/ant-design_shopping-cart-outlined.png" alt="Hero Image" width={"28"} height={"28"}/></Link>
      </div>
    </div>
  )
}

export default navbar
