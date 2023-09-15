
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleSelectedCard }) => {
    const [blogs, setBlogs] =useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
  
    return (
        <div className="grid grid-cols-3 gap-5">
            
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleSelectedCard={handleSelectedCard}></Blog>)
            }
        </div>
    );
};

export default Blogs;