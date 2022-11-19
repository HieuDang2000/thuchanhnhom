import React from 'react';
import images from '../../images/images';
import './signup.scss';
import {Link} from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <div className='w-full h-screen relative'>
                <img
                    className='w-full h-full absolute'
                    src={images.backgroundwibu2}
                    alt="background"
                />
                <div className='w-full h-full absolute bg-black/20 top-0 left-0 bottom-0'></div>
                <div className='absolute w-full px-4 translate-y-1/2 z-0 ctainer'>
                    <div
                        className='
                                    max-w-[600px] h-[400px] 
                                    mx-auto bg-slate-100 modal__signup rounded-xl bg-opacity-40
                                '
                    >
                        <form action="" className='max-w-[600px] h-[400px]'>
                            <h1 className='text-black/80 text-3xl font-bold text-center pt-8 pb-4'>English Web Quiz</h1>
                            <div className='pl-8 mb-4'>
                                <label htmlFor="" className='text-lg font-semibold pr-8 translate-y-1/2 lb-text'>Account</label>
                                <input
                                    className='w-[420px] placeholder:text-slate-400 placeholder:text-start placeholder:font-semibold font-semibold text-slate-500 rounded-lg p-[10px] mt-1 border-2 border-slate-500'
                                    placeholder="Account"
                                    type="text"
                                />
                            </div>
                            <div className='pl-8 mb-4'>
                                <label htmlFor="" className='text-lg font-semibold pr-5 translate-y-1/2 lb-text'>Password</label>
                                <input
                                    className='w-[420px] placeholder:text-slate-400 placeholder:text-start placeholder:font-semibold font-semibold text-slate-500 rounded-lg p-[10px] mt-1 border-2 border-slate-500'
                                    placeholder="Enter 6 character or more"
                                    type="password"
                                />
                            </div>
                            <div className='pl-8 mb-4'>
                                <label htmlFor="" className='text-lg font-semibold pr-8 translate-y-1/2 lb-text'>Confirm</label>
                                <input
                                    className='w-[420px] placeholder:text-slate-400 placeholder:text-start placeholder:font-semibold font-semibold text-slate-500 rounded-lg p-[10px] mt-1 border-2 border-slate-500'
                                    placeholder="Confirm password"
                                    type="password"
                                />
                            </div>
                            <div className='w-full text-center mt-10'>
                                <button
                                    className='bg-black/80 text-white text-xl w-[150px] py-3 rounded-lg hover:opacity-90 btn-signup'
                                >
                                    Sign Up
                                </button>
                            </div>
                            <div className='pl-4 mt-1 text-end pr-10'>
                                <h4 className='text-black/50 font-semibold'>Already an account?
                                    <Link to='/englishqnu' className='underline underline-offset-1 text-sky-600  decoration-sky-600 hover:opacity-70'>Login now</Link>
                                </h4>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;