import React from "react";
import "../Login/Login.css";
import "../Login/Login.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

import Loding from '../Shared/Loding';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';
import login_img_1 from '../../assets/images/login_image.jpg'


const SignUp = () => {
  const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  let signInError;

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser);


    if (error || gError || updateError) {
        signInError = <p className='text-red-500 '><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if (loading || gloading || updating) {
        return <Loding></Loding>
    }

    if (token) {

        navigate('/home')


    }

    const onSubmit = async (data, event) => {

        event.preventDefault();

        await createUserWithEmailAndPassword(data.email, data.password)
        // await updateProfile({ displayNamef: data.firstName, displayNamel: data.lastName })
        await updateProfile({ displayName: data.name })
        // navigate('/home')
        // console.log(data)

    };

    return (
        <div className='mt-10'>
            <h1 className='sm:text-3xl font-extrabold text-transparent lg:text-3xl bg-clip-text bg-secondary'></h1>


             <div class="avatar">
                        <div class="w-40 mx-auto rounded-full">
                            <img src={login_img_1} alt=""/>
                        </div>
                    </div>
                    <h1 className='sm:text-3xl font-extrabold text-transparent lg:text-3xl bg-clip-text bg-secondary'>REGISTRATION</h1>

            <div className='flex justify-center items-center mt-5 '>

           

                <div className="card w-96 shadow-xl mb-5 dark:bg-cyan-900 login_div">

                    <div className="card-body my">

                   
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text dark:text-white">Your Name</span>
                                </label>

                                <input type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs dark:text-black"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'First Name is Required'
                                        },

                                    })}
                                />

                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 dark:text-black">{errors.name.message}</span>}


                                </label>
                            </div>



                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text dark:text-white">Email</span>
                                </label>

                                <input type="email"
                                    placeholder="Your Eamil"
                                    className="input input-bordered w-full max-w-xs dark:text-black"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />

                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text dark:text-white">Password</span>
                                </label>
                                <input type="password"
                                    placeholder="Your Password"
                                    className="input input-bordered w-full max-w-xs dark:text-black"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 character or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>
                            </div>
                            {signInError}

                            <input className='btn btn-outline bg-secondary w-full max-w-xs' type="submit" value='Signup' />
                        </form>

                        <p> Already have an Account?? <small><Link className='text-secondary font-bold' to="/login">Go to Login</Link></small></p>

                        <div className="divider text-secondary">Or Continue With</div>

                        <div className='flex justify-center items-center gap-5'>
                            <button

                                onClick={() => signInWithGoogle()}
                                className="btn btn-outline bg-secondary w-full max-w-xs"
                            >Google</button>

                        </div>


                    </div>


                </div>
            </div>
        </div>

    );
  }


export default SignUp;
