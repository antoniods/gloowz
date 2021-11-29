import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
           <LogoIcon />  
        </div>
         
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#accueil">
          <p class="text-xl ...">Accueil</p>
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          <p class="text-xl ...">Services</p>
        </AnchorLink>
        <AnchorLink className="px-4" href="#clients">
          <p class="text-xl ...">Clients</p>
        </AnchorLink>
        <AnchorLink className="px-4" href="#contact">
          <p class="text-xl ...">Contact</p>
        </AnchorLink>
      </div>
      {/* <div className="hidden md:block">
        <Button className="text-sm"></Button>
      </div> */}
    </div>
  </header>
);

export default Header;
