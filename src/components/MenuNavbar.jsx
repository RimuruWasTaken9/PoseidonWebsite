

function MenuNavbar() {

    return (
        <div className="navbar-container">
      <div className="scroll-container">
        <div id="menu-navbar" className="menu-navbar">
          <ul id="menu" className="menu">
            <li className="item" id="nav-popular-items"><a href="#popular-items">Popular Items</a></li>
            <li className="item" id="nav-sweets"><a href="#sweets">Sweets</a></li>
            <li className="item" id="nav-savories"><a href="#savories">Savories</a></li>
            <li className="item" id="nav-cookies"><a href="#cookies">Cookies & Treats</a></li>
            <li className="item" id="nav-strudels"><a href="#strudels">Strudels</a></li>
            <li className="item" id="nav-specialties"><a href="#specialties">Other Specialties</a></li>
          </ul>
        </div>
      </div>
    </div>
    );
}
export default MenuNavbar;