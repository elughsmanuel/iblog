// import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();

    const homeClick = () => {
        history.push('/');
    }

    return ( 
        <div className="not-found">
            <h1>Error</h1>
            <p>Page not found</p>
            <button onClick={homeClick}>Back to home</button>
            {/* <Link to="/">Go back to homepage</Link> */}
        </div>
     );
}
 
export default NotFound;