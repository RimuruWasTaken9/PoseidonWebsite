import MenuNavbarItem from "./MenuNavbarItem";

function MenuNavbar() {

    return (
        <div className="navbar-container">
      <div className="scroll-container">
        <div id="menu-navbar" className="menu-navbar">
          <ul id="menu" className="menu">
            
            <MenuNavbarItem
            id="nav-popular-items" 
            destination="#popular-items" 
            sectionName="Popular Items" 
            />

            <MenuNavbarItem 
            id="nav-sweets"
            destination="#sweets" 
            sectionName="Sweets" />

            <MenuNavbarItem 
            id="nav-savories"
            destination="#savories" 
            sectionName="Savories" />

            <MenuNavbarItem 
            id="nav-cookies"
            destination="#cookies" 
            sectionName="Cookies & Treats" />

            <MenuNavbarItem 
            id="nav-strudels"
            destination="#strudels" 
            sectionName="Strudels" />

            <MenuNavbarItem 
            id="nav-specialty-items"
            destination="#specialty-items" 
            sectionName="Other Specialties" />
            
          </ul>
        </div>
      </div>
    </div>
    );
}
export default MenuNavbar;