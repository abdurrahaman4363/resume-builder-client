import React from 'react';

const OtherInfo = () => {
    return (
        <div>
            <ul className="steps bg-base-300 p-3  
                        place-items-center">
                <li className="step step-primary mx-2" > <p className=''>PERSONAL</p> </li>
                <li className="step  mx-4 "><p className='ml-5'>EDUCATION</p> </li>
                <li className="step  mx-4 "> <p className='ml-2'>PROJECTS</p> </li>
                <li className="step mx-4"> <p className='ml-1'>ABOUT</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center'>Enter<span className='text-primary'> Other </span> Details</h1>
            </div>
            <h1>Other</h1>


        </div>
    );
};

export default OtherInfo;

