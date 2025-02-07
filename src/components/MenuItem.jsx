

function MenuItem(props) {
  return (
    <div className="menu-item-wrapper">
            <div className="menu-item">
              <img src={props.image} />
              <div>
                <div className="menu-item-title">
                  <h3>{props.name}</h3>
                </div>
                <div className="menu-item-details">
                  {props.clarification && <h6>{props.clarification}</h6>}
                  <p>{props.description}</p>
                </div>
              </div>
            </div>
          </div>
    );
    }
export default MenuItem;
