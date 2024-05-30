import { Link } from 'react-router-dom';
import image1 from "./assests/404.jpg";

const Notfound = () => {
    return ( 
        <div className="not-found">
            <img src="assests/404.jpg" alt="" />
            <h2>Sorry</h2>
            <p>That page can not be found</p>
            <Link to='/'>
                Back to the homepage...
            </Link>
        </div>
     );
}
 
export default Notfound;