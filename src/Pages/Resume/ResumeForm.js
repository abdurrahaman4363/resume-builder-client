import React, { useState } from 'react';
import EducationalInfo from '../Resume/EducationalInfo';

import PersonalInfo from '../Resume/PersonalInfo';

import Projects from '../Resume/Projects';
import ResumePage from './ResumePage';
import Skills from './Skills';


const ResumeForm = () => {

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        education: '',
        institute: '',
        startDate: '',
        endDate: '',
        project: '',
        features: '',
        skills: '',

    })


    const pageTitles = ["Personal Information", "Education", "Projects", "Skills"]


    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        }
        else if (page === 1) {
            return <EducationalInfo formData={formData} setFormData={setFormData} />;
        }
        else if (page === 2) {
            return <Projects formData={formData} setFormData={setFormData} />
        }
        else if (page === 3) {
            return <Skills formData={formData} setFormData={setFormData} />
        }

    }


    const handleInfo = e => {
        e.preventDefault();
        alert('submitted');
        console.log(formData);

        fetch('http://localhost:5000/resume', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }


    return (
        <div className='mt-28 mb-16 m-10 '>
            <div className='lg:flex'>
                <div className="grid grid-rows-12 p-2 rounded-xl sm:col-6 ">
                    <div className="col-start-1 col-end-12 bg-gray-300 rounded-xl">
                        <div>

                            <div className='flex gap-2 mb-3 '>
                                <div className='progressbar'></div>
                                <div className="form-container mx-auto">

                                    <div className="body">
                                        {PageDisplay()}
                                    </div>
                                    <div className="footer flex justify-between mt-5 p-4">

                                        <button
                                            disabled={page == 0}
                                            className='btn btn-success pt-4' onClick={() => {
                                                setPage((currPage) => currPage - 1)
                                            }}>Prev</button>

                                        {page == pageTitles.length - 1 ? <button className='btn btn-success pt-4' onClick={handleInfo}>Submit</button>
                                            :
                                            <button
                                                className='btn btn-success pt-4' onClick={() => {
                                                    setPage((currPage) => currPage + 1)
                                                }}>
                                                Next
                                            </button>
                                        }



                                        {/* <button
                                            className='btn btn-success pt-4' onClick={() => {
                                                if (page === pageTitles.length - 1) {
                                                    alert('form submitted');
                                                    console.log(formData);
                                                    // handleResumeInfo(formData);
                                                } else {

                                                    setPage((currPage) => currPage + 1)
                                                }
                                            }}>
                                            {page === pageTitles.length - 1 ? `onClick = { handleInfo }Submit` : "Next"}
                                        </button> */}
                                    </div>
                                </div >
                            </div>
                        </div>
                    </div>
                </div >

                {/* <div className="grid grid-rows-12 p-2"> */}
                <div className='w-full md:w-2/3 sm:col-6'>
                    {/* <div className="col-start-1 col-end-6 ... bg-gray-200"> */}
                    <div class="bg-gray-300 rounded-xl p-2">
                        <ResumePage class="w-96" formData={formData}></ ResumePage>
                    </div>
                </div>
            </div >
        </div >


    );
};

export default ResumeForm;