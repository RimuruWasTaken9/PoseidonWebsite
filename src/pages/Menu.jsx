import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../App.css';
import { Link } from "react-router-dom";
import HomeButton from '../components/HomeButton';
import MenuNavbar from '../components/MenuNavbar';
import MenuSection from '../components/MenuSection';
import { menuPhotos } from '../assets/bakeryPhotos';
import { menuInfo } from '../assets/bakeryPhotos';

function Menu() {
    const navbarSelector = document.querySelectorAll("li.item a");
    let observer = new IntersectionObserver(
      (entries, observer) => {
        let topMostEntry = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              !topMostEntry ||
              entry.boundingClientRect.top <
                topMostEntry.boundingClientRect.top
            ) {
              topMostEntry = entry;
            }
          }
          if (topMostEntry) {
            let targetElement = topMostEntry.target;
            navbarSelector.forEach(function (sel) {
              sel.classList.remove("selected");
            });
            document.querySelector("#nav-" + targetElement.id + " a").classList.add("selected");
          }
        });
      },
      { threshold: 0.23 }
    );
    let targets = document.querySelectorAll("section");
    targets.forEach((target) => {
      observer.observe(target);
    });


    document.querySelectorAll('.menu-navbar a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        
        const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.menu-navbar').offsetHeight; // Get the current navbar height
    
        const scrollOffset = 265;
        // Scroll to the target element and account for the navbar height
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight  + scrollOffset,
          behavior: 'smooth'
        });
      });
    });
    

  return (
    <div>
        <Header />
        <MenuNavbar />
        {menuInfo.map((section) => 
            (<MenuSection 
            
            title={section.sectionName} 
            description={section.description} 
            clarification={section.clarification}
            items={section.items}
            />))}

        {/* 
        <MenuSection 
        sectionID="popularItems"
        title="Popular Items"
        />
        <MenuSection 
        sectionID="sweets"
        title="Sweets"
        description="Our traditional, hand-made Greek pastries are unparalleled. After all, we're the place that Bobby Flay goes
        when he's in the mood for Greek desserts!" 
        />
        <MenuSection
        sectionID="savories"
        title="Savories"
        description="Whether you're looking for a delicious lunch, light dinner or exquisite tray of hors d'oeuvres, these are a few
        of our classic savory specialties. While our individual pies make a great meal, each is available in cocktail
        sizes too. Perfect for parties or corporate office lunches. Ask about our trays-to-go." 
        />  
        <MenuSection
        sectionID="cookies"
        title="Cookies & Treats"
        />
        <MenuSection
        sectionID="strudels"
        title="Strudels"
        description="Our hand-made strudels are not traditional Greek fare - but foodie favorites introduced from our Austrian side
        of the family by Menina in the 1940s. She was the Heart & Soul of the business. Strudels are sold individually
        wrapped or sliced, by the pound. Both are wrapped in golden, crispy phyllo."
        clarification="*there are no nuts in our strudels*"
        />
        <MenuSection
        sectionID="specialties"
        title="Other Specialty Items"
        description="At the Poseidon Bakery, you'll discover some hard-to-find specialty items."
        /> */}
        <hr />
        <HomeButton />
        <Footer />
    </div>
  );
}
export default Menu;