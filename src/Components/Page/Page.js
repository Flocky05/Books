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
    return (<>
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-full sm:col-span-6 lg:col-span-8 xl:col-span-9'>
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
                <div className=' p-10 text-justify space-y-10'>
                    <div className=''>
                        <div className='font-semibold text-2xl pb-5'>How does react work?</div>
                        <div>
                            React is a declarative, efficient, and flexible JavaScript library for building user interfaces.While building client-side apps, a team of Facebook developers realized that the DOM is slow. So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create.React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.
                        </div>
                    </div>
                    <div>
                        <div className='font-semibold text-2xl pb-5'>
                            Difine State and props.
                        </div>
                        <div>
                            Props allow you to pass data from one component to other components as an argument.State holds information about the components.Props are read-only. State changes can be asynchronous. Props are immutable.State is mutable.Props are used to communicate between components.States can be used for rendering dynamic changes with the component.Props can be accessed by the child component.State cannot be accessed by child components.Props are external and controlled by whatever renders the component.The State is internal and controlled by the React Component itself.
                        </div>
                    </div>
                    <div>
                        <div className='font-semibold text-2xl pb-5'>
                            Uses of useEffect.
                        </div>
                        <div>
                            Validating an input while it's receiving characters is another great application for useEffect.We can use useEffect to filter an array "on the fly" by typing letters into an input element.We can use the useEffect hook to trigger an animation on a shopping cart as a side effect of adding a new product to it. We want to trigger a state update due to an updated fetch() call. We are sending the fetched data to a child component, and whenever that data is changed, the child component re-process it.
                        </div>
                    </div>

                </div>
            </div>
            <div className='order-first lg:order-1 col-span-full sm:col-span-6 lg:col-span-4 xl:col-span-3'>
                <Target time={time}></Target>
            </div>
        </div>

    </>
    );
};

export default Page;