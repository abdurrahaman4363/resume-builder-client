import React from 'react';

const CLCompanyDetails = ({ formData, setFormData }) => {
    return (
        <div className='mt-28 mb-16 '>
            <div className='flex '>
                <div class="grid grid-rows-12 p-2 rounded-xl ">
                    <div class="col-start-1 col-end-12 ... bg-gray-300 rounded-xl">

                        <ul class="steps bg-base-300 p-3  
                    place-items-center">
                            <li class="step step-primary ml-2"> <p className=''>CONTACT</p> </li>
                            <li class="step step-primary "> <p className=''>Company Details</p> </li>
                            {/* <li class="step ml-5 step-primary "> <p className=''>Company Details</p> </li> */}

                            <li class="step   ml-3"> <p>FINISHIT</p> </li>
                        </ul>
                        <div>
                            <h1 className='text-2xl mt-8'>Write down your <span className='text-primary font-bold'>Company Details</span> </h1>
                            <p className='p-1 mb-5'> Describe your Company Details</p>

                            <form action="" className='p-3'>

                                <div className='flex gap-4'>
                                    <div className='flex flex-col-reverse  gap-2 mb-3 '>

                                        <textarea value={formData.professionalCareer} onChange={(e) => setFormData({ ...formData, professionalCareer: e.target.value })} className='w-full p-2 ' placeholder='Professional Career' name="Description" id="Description" ></textarea>

                                    </div>
                                    <div className='flex flex-col-reverse  gap-2 mb-3 '>

                                        <textarea value={formData.achievements} onChange={(e) => setFormData({ ...formData, achievements: e.target.value })} className='w-full p-2' placeholder='Skills and Achievements' name="Description" id="Description" ></textarea>

                                    </div>
                                </div>
                                <div className='flex flex-col-reverse  gap-2 mb-3 '>

                                    <textarea value={formData.characteristics} onChange={(e) => setFormData({ ...formData, characteristics: e.target.value })} className='w-full p-2' placeholder='Characteristics' name="Description" id="Description" ></textarea>

                                </div>


                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CLCompanyDetails;