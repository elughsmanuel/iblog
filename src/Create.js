import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import './Create.css';

const Create = () => {
    const { isPending, data } = useFetch('http://localhost:8000/blogs');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Anonymous');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog ={ title, body, author };

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false);
            // history.go(-1);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <div>
                { isPending && <div>Loading...</div> }
                {data && <h1 className="heading-main">Add a New Blog</h1>}
                {data && 
                    <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input type="text" required value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Body</label>
                    <textarea required value={body} 
                        onChange={(e) => setBody(e.target.value)}>
                    </textarea>
                    <label>Author</label>
                    <select value={author}
                        onChange={(e) => setAuthor(e.target.value)}>
                        <option value="Anonymous">Select Author</option>
                        <option value="Emmanuel Elugbaju">Emmanuel Elugbaju</option>
                        <option value="John Doe">John Doe</option>
                    </select>
                    {!isLoading && <button>Add Blog</button>}
                    {isLoading && <button disabled>Adding blog...</button>}
                </form>
                }
            </div>
        </div>
     );
}
 
export default Create;