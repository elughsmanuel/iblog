import BlogList from "./BlogList";
import useFetch from "./useFetch";
import './Home';

const Home = () => {
    const { error, isPending, data } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="Home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            {data && <BlogList blogs={data} title="All Blogs !!!"/>}
        </div>
    );
}
 
export default Home;