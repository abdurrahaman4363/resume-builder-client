import React from 'react';

const Projects = ({ formData, setFormData }) => {
    return (
        <div>
            <ul className="steps bg-base-300 p-3  
                        place-items-center">
                <li className="step  mx-4" > <p className=''>PERSONAL</p> </li>
                <li className="step  mx-4 "><p className='ml-2'>EDUCATION</p> </li>
                <li className="step step-primary mx-4 "> <p className='ml-2'>PROJECTS</p> </li>
                <li className="step  mx-4"> <p className='ml-1'>Skills</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center'>Enter  <span className='text-primary'> Project </span> Info</h1>
            </div>


            <div className='px-4'>
                <input type="text" className="input input-bordered input-secondary w-full max-w-lg mb-2" name="project" placeholder='Project Name' value={formData.project} onChange={(e) => setFormData({ ...formData, project: e.target.value })} />

                <textarea type="text" className="input input-bordered input-secondary w-full max-w-lg mb-2" name="features" placeholder='Project features' value={formData.features} onChange={(e) => setFormData({ ...formData, features: e.target.value })} />


            </div>
        </div>
    );
};

export default Projects;