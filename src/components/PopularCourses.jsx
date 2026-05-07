import React from 'react';
import PopularCard from './PopularCard';

const PopularCourses = async () => {
    const res = await fetch('https://assignment-008-ten.vercel.app/data.json')

    const allData = await res.json()

    const data = allData.slice(0, 3)



    return (
        <div>
            
            <h1 className='text-2xl font-bold mt-5'>Popular Courses</h1>

            <div>
                {
                    data.map(data => <PopularCard key={data.id} data={data}></PopularCard> )
                }
            </div>
        </div>
    );
};

export default PopularCourses;