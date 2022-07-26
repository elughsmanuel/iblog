import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import './BlogDetails.css';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <h5><span>Written by</span> { blog.author }</h5>
                    <p>{ blog.body }</p>
                    <div className="btn-con">
                        <Link to="/"><button>Back</button></Link>
                        <button onClick={handleClick} className="danger">Delete</button>
                    </div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;