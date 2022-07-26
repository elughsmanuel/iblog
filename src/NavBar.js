import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return ( 
        <nav className="navigation-bar">
            <h1><Link to="/">iBlog</Link></h1>
             <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create New Blog</Link></li>
            </ul>
        </nav>

     );
}
 
export default NavBar;