import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-[85vh]'>

            <span><HashLoader /></span>
            
        </div>
    );
};

export default loading;