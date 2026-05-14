import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const idpage = async ({params}) => {

    const {id} = await params;

    const res = await fetch('https://assignment-008-ten.vercel.app/data.json')

    const allData = await res.json()


    const data = allData.find(p => p.id === Number(id));


    return (
                <div className='my-20 flex gap-7 max-w-5xl ml-22 items-center border border-transparent shadow-2xl rounded-2xl justify-center py-15 px-15'>
                        <div className="">
                            <Image
                              src={data.image}
                                  alt={data.title}

                                    height={550}
                                     width={550}    
                                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                      
                                className="rounded-xl object- border border-gray-200"
                                      />  
                         </div>

                         <div>
                            <div className='py-5'>
                                <h1 className='text-xl font-bold'>{data.title}</h1>
                                <p className='text-sm'>{data.description}</p>
                            </div> 

                             <div>
                                <p className='font-semibold text-gray-400'>{data.instructor}</p>
                            <p className='flex items-center gap-2 font-semibold '><span className='text-amber-500'><FaStar /></span>{data.rating}</p>
                             </div>

                            <div className='py-5'>
                                <p><span className='text-sm'>Duration:</span> {data.duration}</p>
                                <p><span className='text-sm'>Level:</span> {data.level}</p>
                                <p><span className='text-sm'>Category:</span> {data.category}</p>
                            </div>
                         </div>
                </div>
    );
};

export default idpage;