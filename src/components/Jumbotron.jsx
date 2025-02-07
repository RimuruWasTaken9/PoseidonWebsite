import { Link } from "react-router-dom";

function Jumbotron() {
    return (
        <div className="container my-5" id="viewMenu">
        <div className="position-relative p-5 text-center text-muted bg-body ">

            <h1 className="col-lg-6 mx-auto ">New York City's finest Greek Bakery for over 100 years.</h1>
            <p className="col-lg-6 mx-auto mb-4">

                While our recipes are secret - our delicious sweets and savories provide a glimpse of the old-school
                preparation,
                outstanding ingredients and love passed through many generations.

            </p>
            <Link to="/Menu"><button className="btn btn-primary px-4 mb-5" type="button">
                View Our Menu
            </button></Link>
        </div>
    </div>
    );
}
export default Jumbotron;