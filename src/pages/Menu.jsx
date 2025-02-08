import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeButton from '../components/HomeButton';
import MenuNavbar from '../components/MenuNavbar';
import MenuSection from '../components/MenuSection';
import { menuInfo } from '../assets/bakeryPhotos';
import '../App.css';

function Menu() {


  return (
    <div>
        <Header />
        <MenuNavbar />

        {menuInfo.map((section, index) => 
            (<MenuSection 
            key={index}
            id={section.id}
            title={section.sectionName} 
            description={section.description} 
            clarification={section.clarification}
            items={section.items}
            />))}

        <hr />
        <HomeButton />
        <Footer />
    </div>
  );
}
export default Menu;