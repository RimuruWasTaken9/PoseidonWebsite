

function MenuNavbarItem(props) {
    const handleMouseOver = (e) => {
        
        e.preventDefault();
        e.target.style.backgroundColor = "#3181c7";
    };

    const handleMouseOut = (e) => {
        e.target.style.backgroundColor = "";
    };


    return (
        <li className="item" id={props.id} onMouseDown={handleMouseOut} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <a href={props.destination} 
                style={{"cursor":"pointer"}} 
                onClick={() => {
                    const anchor = document.querySelector(`${props.destination}`)
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}
            >{props.sectionName}</a>
        </li>
    );
}
export default MenuNavbarItem;