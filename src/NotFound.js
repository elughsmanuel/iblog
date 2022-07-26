import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div>
            <h1>Not found</h1>
            <Link to="/">Go back to homepage</Link>
        </div>
     );
}
 
export default NotFound;