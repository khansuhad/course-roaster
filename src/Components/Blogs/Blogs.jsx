
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
        <div className="grid lg:w-4/5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleSelectedCard={handleSelectedCard}></Blog>)
            }
        </div>
    );
};

export default Blogs;