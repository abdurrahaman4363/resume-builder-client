import React from 'react';


const CoverLetterEducation = ({ formData, setFormData }) => {
    return (
        <div className='mt-28 mb-16 m-10'>
            <div className='flex '>
                <div class="grid grid-rows-12 p-2 rounded-xl ">
                    <div class="col-start-1 col-end-12 ... bg-gray-300 rounded-xl">

                        <ul class="steps bg-base-300 p-3  
                        place-items-center">
                            <li class="step step-primary ml-2"> <p className=''>CONTACT</p> </li>
                            <li class="step ml-5 step-primary "> <p className='ml-8'>EXPERIENCE</p> </li>
                            <li class="step step-primary  ml-12 "><p className='ml-5'>EDUCATION</p> </li>
                            <li class="step  ml-4 "> <p className='ml-2'>SKILLS</p> </li>
                            <li class="step ml-3"> <p className='ml-1'>ABOUT</p> </li>
                            {/* <li class="step   ml-3"> <p>FINISHIT</p> </li> */}
                        </ul>
                        <div>
                            <h1 className='text-2xl font-bold mt-8  '>Please enter your <span className='text-primary font-bold'>Education</span> information</h1>
                            <p className='p-1 text-xl mb-5'>Enter your last degree</p>

                            <form action="" className='p-3'>
                                <div className='flex gap-2 mb-3 '>
                                    <div>
                                        <label for="Job Title">Collage/University</label>
                                        <input type="text" placeholder="Harvard" value={formData.universityName} onChange={(e) => setFormData({ ...formData, universityName: e.target.value })} class="input input-bordered input-secondary w-full max-w-xs" />
                                    </div>

                                    <div class="form-control w-full max-w-xs">
                                        <label for="selectdegree">Type Degree</label>
                                        {/* <select class="select   p-2 border-primary-3">
                                                <option disabled selected>Select your degree</option>
                                                <option value={formData.ssc} onChange={(e) => setFormData({...formData, ssc:e.target.value})} >SSC</option>
                                                <option>HSC</option>
                                                <option>Bachelor of Science</option>
                                                <option>Bachelor of Computer Science and Engineering</option>
                                                <option>BBA</option>
                                                <option>MBA</option>
                                                <option>Master's Degree</option>
                                                <option>Undergraduate</option>
                                            </select> */}
                                        <input type="text" placeholder="Education" class="input input-bordered input-primary w-full max-w-xs" value={formData.education} onChange={(e) => setFormData({ ...formData, education: e.target.value })} required />

                                    </div>

                                </div>
                                <div className='flex gap-2 mb-3 '>
                                    <div>
                                        {/* <div>
                                            <label for="startdate">Graduation Date</label>
                                        </div> */}
                                        {/* <select class="select    border-primary-3">
                                                <option disabled selected>Select Graduation Date</option>
                                                <option>2030</option>
                                                <option>2029</option>
                                                <option>2028</option>
                                                <option>2027</option>
                                                <option>2026</option>
                                                <option>2025</option>
                                                <option>2024</option>
                                                <option>2023</option>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                                <option>2017</option>
                                                <option>2016</option>
                                                <option>2015</option>
                                                <option>2014</option>
                                                <option>2013</option>
                                                <option>2012</option>
                                                <option>2011</option>
                                                <option>2010</option>
                                                <option>2009</option>
                                                <option>2008</option>
                                                <option>2007</option>
                                                <option>2006</option>
                                                <option>2005</option>
                                                <option>2004</option>
                                                <option>2003</option>
                                                <option>2002</option>
                                                <option>2001</option>
                                                <option>2000</option>
                                                <option>1999</option>
                                                <option>1998</option>
                                                <option>1997</option>
                                                <option>1996</option>
                                                <option>1995</option>
                                                <option>1994</option>
                                                <option>1993</option>
                                                <option>1992</option>
                                                <option>1991</option>
                                                <option>1990</option>
                                                <option>1989</option>
                                                <option>1988</option>
                                                <option>1986</option>
                                                <option>1985</option>
                                                <option>1984</option>
                                                <option>1983</option>
                                                <option>1982</option>
                                                <option>1981</option>
                                                <option>1980</option>
                                                <option>1979</option>
                                                <option>1978</option>
                                                <option>1977</option>
                                                <option>1976</option>
                                                <option>1975</option>
                                                <option>1974</option>
                                                <option>1973</option>
                                                <option>1972</option>
                                                <option>1971</option>
                                                <option>1970</option>
                                                <option>1969</option>
                                                <option>1968</option>
                                                <option>1967</option>
                                                <option>1966</option>
                                                <option>1965</option>
                                                <option>1964</option>
                                                <option>1963</option>
                                                <option>1962</option>
                                                <option>1961</option>
                                                <option>1960</option>
                                                <option>1959</option>
                                                <option>1958</option>
                                                <option>1957</option>
                                                <option>1956</option>
                                                <option>1955</option>
                                                <option>1954</option>
                                                <option>1953</option>
                                                <option>1952</option>
                                                <option>1951</option>
                                                <option>1950</option>
                                            </select> */}
                                        <div>
                                            <label htmlFor="">start Date</label>
                                            <input type="date" class="input input-bordered input-primary w-full max-w-xs" value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })} required />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">End date</label>
                                        <input type="date" class="input input-bordered input-primary w-full max-w-xs" value={formData.endDate} onChange={(e) => setFormData({ ...formData, endDate: e.target.value })} required />
                                    </div>
                                    <div>
                                        <label for="city">Education Location</label>
                                        <input type="text" value={formData.educationCity} onChange={(e) => setFormData({ ...formData, educationCity: e.target.value })} placeholder="Dhaka" class="input input-bordered input-secondary w-full max-w-xs" required />
                                    </div>
                                </div>

                                <div className='flex flex-col-reverse  gap-2 mb-3 '>

                                    <textarea className='w-full p-3 ' value={formData.educationDescription} onChange={(e) =>setFormData({...formData, educationDescription: e.target.value})} placeholder='Write your Education experience' name="Description" id="Description" cols="30" rows="10"></textarea>
                                    <label for="">Description</label>
                                </div>


                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CoverLetterEducation;