import React from 'react';

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
    <div className="menu">
      <h1>Menu</h1>
      <p>Menu page</p>
    </div>
  );
}
export default Menu;