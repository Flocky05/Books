import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Target from '../Target/Target';
import { BsBookHalf } from 'react-icons/bs';

const Page = () => {
    const [books, setBooks] = useState([]);
    const [time, setTime] = useState(0);
    useEffect(() => {
        fetch(`fakeData.json`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='grid grid-cols-4 gap-3'>
            <div className='col-span-full sm:col-span-2 lg:col-span-3'>
                <div className='p-2 lg:p-12 mx-8'>
                    <div className="navbar bg-base-100 "><BsBookHalf className='text-2xl text-indigo-600' />
                        <a href='/' className="btn btn-ghost normal-case text-2xl text-indigo-600 ">LET'S READING</a>
                    </div>
                    <p className='text-xl text-left '>Select today’s Books</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ww-[90%] mx-auto'>
                        {
                            books.map(book => (<Card setTime={setTime} book={book}></Card>))
                        }
                    </div>
                </div>
            </div>
            <div className='order-first col-span-full sm:col-span-2 lg:col-span-1'>
                <Target time={time}></Target>
            </div>
        </div>
    );
};

export default Page;