import React from 'react'
import logo from "../public/images/logo.png"
import Image from 'next/image'
import { CiShoppingCart } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-around'>
        <div>
            <Image src={logo} alt=""/>
        </div>

        <ul>
            <li>MENU</li>
            <li>DEALS</li>
            <li>STORE</li>
            <li>ALLIANCES</li>
        </ul>
        <div>
            <CiShoppingCart/>
        </div>
        <div className='flex flex-row items-center'>
            <RiAccountCircleLine/>
            <p>MY ACCOUNT</p>
        </div>
    </div>
  )
}

export default Header