import React, { useEffect, useState } from 'react';
import InspiringBlog from './InspiringBlog';

const InspiringStories = () => {
    const [inspiringBlogs, setInspiringBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/inspiringBlog')
            .then(res => res.json())
            .then(data => setInspiringBlogs(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
            {
                inspiringBlogs.map(inspiringBlog => <InspiringBlog
                    inspiringBlog={inspiringBlog}
                    key={inspiringBlog._id}
                > </InspiringBlog>)
            }
        </div>
    );
};

export default InspiringStories;