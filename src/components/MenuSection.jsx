
import MenuItem from "./MenuItem";

function MenuSection(props) {
 
    return (
        <section id={props.id} className="menu-item-group">
        <h2>{props.title}</h2>

        {props.description && <p>{props.description}</p>}
        {props.clarification && <p>{props.clarification}</p>}
        {/* if there is a description, show it. Else, don't show anything */}
        
        <hr />
  
        <div className="menu-items-wrapper">
          <div className="menu-items">
            {props.items.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                description={item.description}
                image={item.photo}
                clarification={item.clarification}
              />
            ))}
          </div>
        </div>
      </section>
    )
}
export default MenuSection;