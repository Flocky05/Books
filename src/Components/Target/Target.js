import React, { useState } from 'react';
import logo from '../../images/rakibul.jpg'
const Target = (props) => {
    const [breaks, setBreaks] = useState(0);
    return (
        <div className='bg-slate-200 h-screen sticky top-0'>
            <div className='flex gap-3 p-3 text-left pt-10'>
                <img className='h-12 w-12 rounded-full ' src={logo} alt="" />
                <div >
                    <h2 className='text-2xl font-semibold '>Md.Rakibul Islam</h2>
                    <p className='text-gray-600'>Tangail,Dhaka</p>
                </div>
            </div>
            <div className='flex justify-between rounded-md bg-gray-300 p-2 m-4'>
                <div>
                    <h2 className='font-semibold'>12</h2>
                    <p>Story</p>
                </div>
                <div>
                    <h2 className='font-semibold'>8</h2>
                    <p>Love Story</p>
                </div>
                <div >
                    <h2 className='font-semibold'>20</h2>
                    <p>Horror</p>
                </div>
            </div>
            <h2 className='text-2xl font-semibold text-left p-3'>Add a break</h2>
            <div className='flex justify-between rounded-md bg-gray-300 p-4 m-4'>
                <button>
                    <h2 className='h-10 w-10 rounded-full bg-slate-400 grid place-content-center'>5m</h2>
                </button>
                <button>
                    <h2 className='h-10 w-10 rounded-full bg-slate-400 grid place-content-center'>10m</h2>
                </button>
                <button className='h-10 w-10 rounded-full bg-slate-400 grid place-content-center'>
                    <h2 >15m</h2>
                </button>
                <button>
                    <h2 className='h-10 w-10 rounded-full bg-slate-400 grid place-content-center'>20m</h2>
                </button>
                <button>
                    <h2 className='h-10 w-10 rounded-full bg-slate-400 grid place-content-center'>25m</h2>
                </button>

            </div>
            <h2 className='m-4 text-2xl text-left font-semibold'>Exercise Details</h2>
            <div className='flex justify-between rounded-md bg-gray-300 p-4 m-4'>
                <h2 ><span className='text-xl font-semibold text-left p-3'>Exericise Time:</span> {props.time} minute</h2>
            </div>
            <div className='flex justify-between rounded-md bg-gray-300 p-4 m-4'>
                <h2 className='text-xl font-semibold text-left p-3'>Break time </h2>
            </div>
            <div className='p-3'>
                <button className='btn bg-indigo-700  w-full'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Target;