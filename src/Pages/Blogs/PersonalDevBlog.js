import React from 'react';

const PersonalDevBlog = ({ personalDevBlog }) => {
    const { _id, name, blogTitle, img, date, description } = personalDevBlog;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="blog" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{blogTitle}</h2>
                    <small>{date} | {name} </small>

                    <p>{description.slice(0, 400)}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalDevBlog;