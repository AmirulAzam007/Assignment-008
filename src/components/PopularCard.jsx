import { Card } from '@heroui/react';
import Image from "next/image";
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';


const PopularCard = ({data}) => {
    console.log(data)
    return (
        <Card className='border border-transparent shadow-2xl'>
            <div className="relative w-100% aspect-square">
              <Image
              src={data.image}
              alt={data.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              
              className="rounded-xl object- border border-gray-200"
              />  
            </div>

            <div>
               <h1 className='text-lg font-bold'>{data.title}</h1> 
            </div>

            <div className='pb-1'>
                <p className='font-semibold text-gray-400'>{data.instructor}</p>
                <p className='flex items-center gap-2 font-semibold '><span className='text-amber-500'><FaStar /></span>{data.rating}</p>
            </div>

            <div>
                <Link href={`/all-courses/${data.id}`}><button className='btn btn-soft btn-success w-full'>View Details</button></Link>
            </div>
        </Card>
    );
};

export default PopularCard;