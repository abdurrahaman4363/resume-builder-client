import React from 'react';
import '../Login/Login.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='mt-10'>
            <h1 className='pt-10 sm:text-6xl font-extrabold text-transparent lg:text-5xl bg-clip-text bg-secondary'>WELCOME TO REGISTRATION</h1>
            <div className='flex h-screen justify-center items-center mt-5'>

                <div class="card lg:lg-w-full bg-white shadow-xl mb-5 ">


                    <div class="card-body my">

                        {/*   <h2 class="text-center text-xl font-bold text-primary">Login</h2> */}



                        <form>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">First Name</span>

                                </label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    class="input input-bordered w-full max-w-xs"

                                />

                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Last Name</span>

                                </label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    class="input input-bordered w-full max-w-xs"

                                />

                            </div>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Email</span>

                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    class="input input-bordered w-full max-w-xs"

                                />

                            </div>


                            <div class="form-control w-full max-w-xs mb-3">
                                <label class="label">
                                    <span class="label-text">Password</span>

                                </label>

                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    class="input input-bordered w-full max-w-xs"

                                />

                            </div>


                            <p className='text-secondary'>Already have an account?? <Link className='text-secondary font-bold' to="/login">Go to Login</Link></p>


                            <input className='btn btn-outline bg-secondary w-full max-w-xs mt-3' type="submit" value="Signup" />
                        </form>



                        <div class="divider text-secondary">Or Continue With</div>

                        <div className='flex justify-center items-center gap-5'>
                            <button class="btn btn-outline bg-secondary w-1/2">Google</button>
                            <button class="btn btn-outline bg-secondary w-1/2">Facebook</button>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default SignUp;