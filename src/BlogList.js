import { Link } from "react-router-dom";
import './BlogList.css';

const BlogList = ({blogs, title }) => {

    return ( 
        <div className="blog-list">
            <h1>{ title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h1><Link to={`/blogs/${blog.id}`}>{ blog.title }</Link></h1>
                    <p><span>Written by </span>{ blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;

