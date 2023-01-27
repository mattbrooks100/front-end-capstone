import React from 'react';
import MenuLinks from "./MenuLinks";
import SocialMedia from './SocialMedia';

const Footer = () => {
    return ( 
        <div className='bg-black text-white mt-28 grid grid-cols-2'>
            <MenuLinks />
            <SocialMedia />
        </div>
     );
}
 
export default Footer;