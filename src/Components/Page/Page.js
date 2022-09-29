import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Target from '../Target/Target';

const Page = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`fakeData.json`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='grid grid-cols-4 gap-3'>
            <div className='col-span-3'>
                <div className='p-12 mx-8'>
                    <div className="navbar bg-base-100 ">
                        <a href='/' className="btn btn-ghost normal-case text-xl text-indigo-600 ">LET'S READING</a>
                    </div>
                    <p className='text-xl text-left '>Select today’s Books</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 ww-[90%] mx-auto'>
                        {
                            books.map(book => (<Card book={book}></Card>))
                        }
                    </div>
                </div>
            </div>
            <div>
                <Target></Target>
            </div>
        </div>
    );
};

export default Page;